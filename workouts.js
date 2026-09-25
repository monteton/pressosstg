// Список тренировок и страница одной тренировки для обоих разделов.

const SECTIONS = {
  posture: {
    title: 'Осанка',
    listTitle: 'Тренировки для осанки',
    items: POSTURE,
    color: 'violet',
    image: id => `images/posture${id}.jpg`,
    meta: w => `Вступление + ${w.videos.length} упражнения`,
    intro: 'Делайте каждое упражнение так, как показано в видео. Двигайтесь по порядку — от тренировки 1 к 7.',
  },
  press: {
    title: 'Пресс',
    listTitle: 'Тренировки на пресс',
    items: PRESS,
    color: 'green',
    image: id => `images/press${id}.jpg`,
    meta: w => `${w.duration} мин · ${w.exercises.length} упр.`,
    intro: 'Включите видео и повторяйте за Натальей. Подходы и повторы — в списке под видео.',
  },
};

// Правило отдыха — показывается в каждой тренировке
const REST_NOTE = `
  <div class="rest-note">${ICONS.clock}<span><b>Отдых:</b> между подходами — 1 минута, между упражнениями — до 2 минут.</span></div>`;

function workoutUrl(type, id) { return `workout.html?type=${type}&id=${id}`; }

function renderList(type) {
  const s = SECTIONS[type];
  const done = countDone(type);
  document.getElementById('list-title').textContent = s.listTitle;
  const welcome = type === 'posture' ? `
    <button class="welcome-video" id="section-welcome-btn">
      <div class="play-circle">${ICONS.play}</div>
      <div>
        <strong>Вступление к программе</strong>
        <span>Посмотрите один раз перед первой тренировкой</span>
      </div>
    </button>` : '';
  document.getElementById('intro').innerHTML = welcome + `
    <div class="intro-card intro-${s.color}">
      <h2>Выполнено ${done} из ${s.items.length}</h2>
      <p>${s.intro}</p>
      <div class="progress progress-${s.color}"><i style="width:${done / s.items.length * 100}%"></i></div>
    </div>`;

  document.getElementById('grid').innerHTML = s.items.map(w => `
    <a class="w-card" href="${workoutUrl(type, w.id)}">
      ${isDone(type, w.id) ? `<span class="done-badge">${ICONS.check}Готово</span>` : ''}
      <img src="${s.image(w.id)}" alt="" loading="lazy">
      <div class="w-body">
        <div class="w-num ${s.color === 'violet' ? 'ico-violet' : 'ico-green'}">${w.id}</div>
        <div class="w-text">
          <h3>Тренировка ${w.id}</h3>
          <p>${s.meta(w)}</p>
        </div>
        <div class="arrow arrow-${s.color}">${ICONS.arrow}</div>
      </div>
    </a>`).join('');

  const welcomeBtn = document.getElementById('section-welcome-btn');
  if (welcomeBtn) welcomeBtn.onclick = () => openVideo(POSTURE_WELCOME_VIDEO, 'Вступление к программе «Осанка»');
}

function renderWorkout() {
  const params = new URLSearchParams(location.search);
  const type = SECTIONS[params.get('type')] ? params.get('type') : 'posture';
  const s = SECTIONS[type];
  const idx = Math.max(0, s.items.findIndex(w => String(w.id) === params.get('id')));
  const w = s.items[idx];
  const icoClass = s.color === 'violet' ? 'ico-violet' : 'ico-green';

  document.title = `${s.title}: тренировка ${w.id}`;
  document.getElementById('back').href = `${type}.html`;
  document.getElementById('w-title').textContent = `${s.title} · Тренировка ${w.id}`;

  let html = '';
  if (type === 'posture') {
    html += `
      <div class="card">
        <h2>Тренировка ${w.id}</h2>
        <p class="sub">Сначала посмотрите вступление, затем делайте каждое упражнение так, как показано в видео.</p>
        <div class="meta-row"><span class="pill pill-violet">${ICONS.list}${w.videos.length} упражнения</span></div>
        ${REST_NOTE}
      </div>`;
    if (w.intro) html += `
      <div class="card">
        <div class="ex-head">
          <div class="w-num ${icoClass}">${ICONS.play}</div>
          <h2>Вступление к тренировке</h2>
        </div>
        <div class="video-box"><video controls playsinline preload="metadata" src="${w.intro}#t=0.5"></video></div>
      </div>`;
    html += w.videos.map((src, i) => `
      <div class="card">
        <div class="ex-head">
          <div class="w-num ${icoClass}">${i + 1}</div>
          <h2>Упражнение ${i + 1}</h2>
        </div>
        <div class="video-box"><video controls playsinline preload="metadata" src="${src}#t=0.5"></video></div>
      </div>`).join('');
  } else {
    html += `
      <div class="card">
        <div class="video-box"><video controls playsinline preload="metadata" src="${w.video}#t=0.5"></video></div>
      </div>
      <div class="card">
        <h2>Тренировка ${w.id}</h2>
        <div class="meta-row">
          <span class="pill pill-green">${ICONS.clock}${w.duration} мин</span>
          <span class="pill pill-violet">${ICONS.list}${w.exercises.length} упражнений</span>
        </div>
        ${REST_NOTE}
        <div class="ex-list">
          ${w.exercises.map((ex, i) => `
            <div class="ex-item">
              <div class="n">${String(i + 1).padStart(2, '0')}</div>
              <div class="ex-text"><b>${ex.name}</b><span>${ex.reps}</span></div>
              ${EXERCISE_GUIDES[ex.name] ? `<button class="howto-btn" data-guide="${ex.name}">Как делать</button>` : ''}
            </div>`).join('')}
        </div>
      </div>`;
  }

  const prev = s.items[idx - 1];
  const next = s.items[idx + 1];
  html += `
    <button class="btn" id="done-btn"></button>
    <div class="pager">
      <a class="btn btn-ghost" href="${prev ? workoutUrl(type, prev.id) : '#'}" aria-disabled="${!prev}">← Предыдущая</a>
      <a class="btn btn-ghost" href="${next ? workoutUrl(type, next.id) : '#'}" aria-disabled="${!next}">Следующая →</a>
    </div>`;
  document.getElementById('content').innerHTML = html;

  // Одновременно играет только одно видео
  document.querySelectorAll('[data-guide]').forEach(b => b.onclick = () => openGuide(b.dataset.guide));

  const videos = document.querySelectorAll('video');
  videos.forEach(v => v.addEventListener('play', () => videos.forEach(o => { if (o !== v) o.pause(); })));

  const doneBtn = document.getElementById('done-btn');
  const paint = () => {
    const done = isDone(type, w.id);
    doneBtn.className = 'btn ' + (done ? 'btn-done' : (s.color === 'violet' ? 'btn-violet' : 'btn-green'));
    doneBtn.innerHTML = done ? `${ICONS.check}Тренировка выполнена` : 'Отметить как выполненную';
  };
  doneBtn.onclick = () => { setDone(type, w.id, !isDone(type, w.id)); paint(); };
  paint();
}

// Окно с техникой упражнения
function openGuide(name) {
  const g = EXERCISE_GUIDES[name];
  if (!g) return;
  let modal = document.getElementById('guide-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'guide-modal';
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-sheet guide">
        <button class="modal-close" data-close aria-label="Закрыть">${ICONS.close}</button>
        <div class="guide-body"></div>
      </div>`;
    document.body.appendChild(modal);
    bindModal(modal);
  }
  modal.querySelector('.guide-body').innerHTML = `
    <span class="guide-tag">Техника</span>
    <h2>${name}</h2>
    <p class="guide-intro">${g.intro}</p>
    <h3>Как делать</h3>
    <ol class="guide-steps">${g.steps.map(t => `<li>${t}</li>`).join('')}</ol>`;
  modal.querySelector('.modal-sheet').scrollTop = 0;
  openModal(modal);
}
