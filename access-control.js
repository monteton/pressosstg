// PWA Access Control
// Если сайт открыт не как установленное приложение — отправляем на index.html,
// где показывается экран установки. Локальный просмотр (файл / localhost) не блокируем.
(function () {
  var isStandalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;

  var isLocal =
    location.protocol === 'file:' ||
    /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);

  if (!isStandalone && !isLocal) {
    var currentPage = window.location.pathname;
    if (!currentPage.endsWith('index.html') && !currentPage.endsWith('/')) {
      window.location.replace('index.html');
    }
  }
})();
