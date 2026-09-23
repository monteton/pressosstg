const CACHE_NAME = 'osanka-press-v1';
const META_CACHE  = 'osanka-press-meta-v1';   // отдельный кеш для метаданных
const DAYS_90_MS  = 90 * 24 * 60 * 60 * 1000; // 90 дней в миллисекундах

// Получить (или создать при первом запуске) метку времени установки
async function getInstallTimestamp() {
  const cache    = await caches.open(META_CACHE);
  const existing = await cache.match('install-timestamp');

  if (existing) {
    const text = await existing.text();
    return parseInt(text, 10);
  }

  // Первый запуск — записываем текущее время
  const now = Date.now();
  await cache.put('install-timestamp', new Response(String(now), {
    headers: { 'Content-Type': 'text/plain' }
  }));
  return now;
}

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // Инициализируем метку установки при первой активации
      await getInstallTimestamp();

      // Удаляем устаревшие кеши
      const allCaches = await caches.keys();
      await Promise.all(
        allCaches
          .filter(name => name !== CACHE_NAME && name !== META_CACHE)
          .map(name => caches.delete(name))
      );

      await self.clients.claim();
    })()
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Не кешируем видео и внешние ресурсы
  if (
    url.hostname.includes('bothelp') ||
    url.hostname.includes('file-storage') ||
    !url.protocol.startsWith('http')
  ) {
    return;
  }

  event.respondWith(
    (async () => {
      const installTime = await getInstallTimestamp();
      const expiryDate  = installTime + DAYS_90_MS;
      const now         = Date.now();

      // Проверяем, прошло ли 90 дней с момента установки
      if (now >= expiryDate) {
        const expiredDate = new Date(expiryDate).toLocaleDateString('ru-RU', {
          day: 'numeric', month: 'long', year: 'numeric'
        });
        return new Response(
          `<!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Курс завершён</title>
            <style>
              body {
                margin: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                background: linear-gradient(135deg, #8f5cf2 0%, #7a4bd1 45%, #3fb07e 100%);
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                color: #fff;
              }
              .container {
                text-align: center;
                padding: 2rem;
                max-width: 500px;
              }
              h1 {
                font-size: 2.5rem;
                margin: 0 0 1rem;
                color: #fff;
                animation: fadeIn 1s ease-out;
              }
              p {
                font-size: 1.2rem;
                color: rgba(255,255,255,0.9);
                line-height: 1.6;
                animation: fadeIn 1.5s ease-out;
              }
              .emoji {
                font-size: 4rem;
                margin-bottom: 1rem;
                animation: bounce 2s infinite;
              }
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to   { opacity: 1; transform: translateY(0); }
              }
              @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50%       { transform: translateY(-20px); }
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="emoji">👑</div>
              <h1>Поздравляем!</h1>
              <p>Вы успешно завершили программу «Осанка и пресс»!</p>
              <p style="font-size:0.9rem;margin-top:2rem;opacity:0.7;">
                Доступ закрыт ${expiredDate}
              </p>
            </div>
          </body>
          </html>`,
          {
            status: 403,
            headers: { 'Content-Type': 'text/html; charset=utf-8' }
          }
        );
      }

      // До истечения срока — работаем нормально
      try {
        const response = await fetch(event.request);
        if (response.status === 200 && event.request.method === 'GET') {
          const cache = await caches.open(CACHE_NAME);
          cache.put(event.request, response.clone());
        }
        return response;
      } catch (error) {
        const cached = await caches.match(event.request);
        if (cached) return cached;
        throw error;
      }
    })()
  );
});
