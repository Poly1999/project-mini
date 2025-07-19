const translations = {
  en: {
    heroTitle: '21 Days to a Flexible Body',
    heroText: 'Improve posture, stretch and tone up — just 20 minutes a day!',
    startBtn: 'Start for free',
    modalTitle: 'Welcome!',
    modalText: 'You’ve just taken the first step towards a more flexible body.',
    closeBtn: 'Close',
  },
  ua: {
    heroTitle: '21 день до гнучкого тіла',
    heroText:
      'Покращи поставу, розтягнись і підтянись — всього 20 хвилин на день!',
    startBtn: 'Почати безкоштовно',
    modalTitle: 'Вітаємо!',
    modalText: 'Ти щойно зробила перший крок до гнучкого тіла.',
    closeBtn: 'Закрити',
  },
};

// Переклад
function translatePage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[lang][key];
  });
}

// Перемикач мови
const langButtons = document.querySelectorAll('[data-lang]');
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    translatePage(lang);
  });
});

// Модальне вікно
const modal = document.getElementById('modal');
const openModalBtn = document.querySelector('.start-btn');
const closeModalBtn = document.querySelector('.close-modal');

openModalBtn.addEventListener('click', () => {
  modal.classList.add('is-open');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('is-open');
});

// Закриття при кліку поза модалкою
modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('is-open');
  }
});
