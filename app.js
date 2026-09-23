// Общая логика: иконки, нижнее меню, видео-окно, отметки выполненных тренировок.

const SUPPORT_URL = 'https://t.me/MyuppyTeam';

const ICONS = {
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10z"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.5h.01"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19c0-8 5-13 15-14-1 10-6 15-14 15"/><path d="M5 19l7-7"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.7 2.3a1 1 0 0 0-1.4 0l-9 9A1 1 0 0 0 3 13h1v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7h1a1 1 0 0 0 .7-1.7z"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c1.2-3.6 4-5.5 7-5.5s5.8 1.9 7 5.5"/></svg>',
  help: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M9.6 9.3a2.5 2.5 0 0 1 4.8.9c0 1.7-2.4 2.2-2.4 3.8M12 17h.01"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
};

// ---------- Нижнее меню ----------
function renderTabbar(active) {
  const items = [
    { id: 'home', href: './main.html', label: 'Главная', icon: ICONS.home },
    { id: 'profile', href: './profile.html', label: 'Профиль', icon: ICONS.user },
    { id: 'support', href: SUPPORT_URL, label: 'Поддержка', icon: ICONS.help, external: true },
  ];
  const nav = document.createElement('nav');
  nav.className = 'tabbar';
  nav.innerHTML = items.map(i => `
    <a href="${i.href}" class="${i.id === active ? 'active' : ''}"${i.external ? ' target="_blank" rel="noopener"' : ''}>
      ${i.icon}<span>${i.label}</span>
    </a>`).join('');
  document.body.appendChild(nav);
}

// ---------- Модальные окна ----------
function openModal(el) { el.classList.add('open'); }
function closeModal(el) {
  el.classList.remove('open');
  el.querySelectorAll('video').forEach(v => v.pause());
}
function bindModal(el) {
  el.addEventListener('click', e => { if (e.target === el) closeModal(el); });
  el.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => closeModal(el)));
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.querySelectorAll('.modal.open').forEach(closeModal);
});

// Окно с одним видео (создаётся по требованию)
function openVideo(src, title) {
  let modal = document.getElementById('video-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'video-modal';
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-sheet">
        <button class="modal-close" data-close aria-label="Закрыть">${ICONS.close}</button>
        <h2 id="video-modal-title"></h2>
        <div class="video-box"><video playsinline controls preload="metadata"></video></div>
      </div>`;
    document.body.appendChild(modal);
    bindModal(modal);
  }
  modal.querySelector('#video-modal-title').textContent = title;
  const video = modal.querySelector('video');
  if (video.getAttribute('src') !== src) video.setAttribute('src', src);
  openModal(modal);
  video.play().catch(() => {});
}

// ---------- Выполненные тренировки ----------
const DONE_KEY = 'op-done-v1';

function getDone() {
  try { return JSON.parse(localStorage.getItem(DONE_KEY)) || {}; } catch { return {}; }
}
function isDone(type, id) { return !!getDone()[`${type}-${id}`]; }
function setDone(type, id, value) {
  const done = getDone();
  if (value) done[`${type}-${id}`] = Date.now(); else delete done[`${type}-${id}`];
  try { localStorage.setItem(DONE_KEY, JSON.stringify(done)); } catch {}
}
function countDone(type) {
  return Object.keys(getDone()).filter(k => k.startsWith(type + '-')).length;
}

// ---------- Service Worker ----------
// PWA пока отключено: снимаем service worker, если он остался от прошлых версий
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(regs => regs.forEach(r => r.unregister()));
}
