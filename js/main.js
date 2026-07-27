'use strict';

const RACE_DATE = new Date('2026-08-01T09:01:00+03:00').getTime();
const REG_DATE = new Date('2026-07-30T18:00:00+03:00').getTime();

const content = {
  ua: {
    badge: 'Неофіційний фан-сайт учасника — реєстрація на Timing Events',
    brand: 'Гори Вище',
    navHome: 'Головна', navArchive: 'Архів', navRecords: 'Рекорди', navFaq: 'FAQ',
    ctaPrimary: 'Зареєструватись', ctaSecondary: 'Положення',
    heroKicker: 'Аматорський вело-підйом · Київ · 1 серпня 2026',
    heroTitle: 'Три хвилини болю. Рік гордості.',
    heroSub: 'Спринт вгору «Гори Вище»: 730 метрів бруківки Смородинського узвозу, дві спроби і фінал на нервах. Тобі не треба бути PRO — треба лише наважитись приїхати.',
    heroStamp: 'Смородинський узвіз · Татарка',
    profileHeading: 'Профіль висоти',
    routeHeading: 'Маршрут',
    linkRoute: 'Маршрут у Google Maps', linkStart: 'Місце старту', linkFinish: 'Місце фінішу',
    tickerParts: ['ДО СТАРТУ', '730 М ВГОРУ', '68% БРУКІВКИ', 'РЕКОРД 2:41 — ПОБ’ЄШ?', 'ВНЕСКИ — НА ПІДРОЗДІЛ НАШОГО ВЕЛОДРУГА', 'РЕЄСТРАЦІЯ ДО 30.07, 18:00'],
    factsHeading: 'Траса в ЧИСЛАХ',
    factsRaw: [
      { value: '730 м', label: 'Довжина траси' },
      { value: '62 м', label: 'Набір висоти' },
      { value: '68%', label: 'Історична бруківка' },
      { value: '2:41', label: 'Рекорд траси, 2025' },
    ],
    whyHeading: 'Чому ти маєш стартувати',
    why: [
      'Три хвилини болю — і дванадцять місяців права казати «я це зробив».',
      'Стартувати можна на будь-якому велосипеді. Категорій дві — за типом керма: «баран» (шосе, гравійники) та прямий руль (МТБ, двопідвіси тощо).',
      'Формат на вибування: програєш двічі — і все одно можеш доїхати до фіналу. Тут другий шанс вбудований у правила.',
      'Гандикап 20 секунд: навіть якщо ти повільніший, суперник стартує позаду. Наздоженуть — але хай спробують.',
      'Бруківці понад сто років. Твій час на ній залишиться в протоколі назавжди.',
      'Кошти від реєстрації підуть на потреби підрозділу нашого велодруга Олександра Царевського — твій піт працює двічі.',
    ],
    storyHeading: 'Чому саме Смородинський',
    storyLeft: [
      'Майже в кожного велосипедиста є «улюблений» підйом — той, що ми залежно від довжини й градієнта звемо «тягуном» чи «торчком». У багатьох містах України райдери завзято долають власні «Коппенберги» та «Муури».',
      'Київ і область спокійно можуть позмагатися з бельгійською Фландрією за кількістю викличних стрімких апхілів. Численні узвози, що єднають Поділ і Куренівку з «верхнім містом», — ідеальні локації, щоб набути гірських скілів. Ну і всі ми «любимо» прекрасний «Космос» неподалік Рославичів.',
      'Один із найцікавіших, найколоритніших і овіяних легендами — Смородинський узвіз.',
    ],
    storyRight: [
      'Приблизно у 2020-му Станіслав Клименко запропонував уважніше придивитися до Смородинського як до місця викличних велозмагань. У 2021-му відбувся «пробний» старт на закриття сезону — атмосферно все пройшло.',
      'Тепер ми знову проводимо спринт вгору — уже на відремонтованому узвозі.',
      'Амбітні райдери позмагаються, менш підготовлені просто насолодяться красою ландшафтного парку і впишуть знакову сторінку у власну велоісторію.',
    ],
    storyKicker: 'Let’s climb it up 🤘',
    regLabel: 'Кінець реєстрації за', regNote: 'Реєстрація відкрита до 30 липня, 18:00',
    countdownLabel: 'До старту', countdownNote: 'Старт: 1 серпня, 09:00',
    cdHoursLabel: 'годин', cdMinsLabel: 'хвилин',
    scheduleHeading: 'План дня',
    schedule: [
      { time: '09:00', event: 'Реєстрація і видача номерів' },
      { time: '10:00', event: 'Перша спроба (кваліфікація)' },
      { time: '12:00', event: 'Друга спроба (кваліфікація)' },
      { time: '14:00', event: 'Півфінали (пари)' },
      { time: '15:30', event: 'Фінал' },
      { time: '16:30', event: 'Нагородження' },
    ],
    resultsHeading: 'РЕКОРДИ, які чекають, щоб їх побили',
    resultsSub: 'Переможці 2025 року. Хтось має зняти ці рекорди. Чому не ти?',
    results: [
      { category: 'Чоловіки, пряме кермо', winner: 'Юрій Коваль', time: '2:41' },
      { category: 'Жінки, пряме кермо', winner: 'Олена Бондар', time: '3:05' },
      { category: 'Чоловіки, «баран»', winner: 'Максим Ткач', time: '2:52' },
      { category: 'Жінки, «баран»', winner: 'Марія Гриценко', time: '3:14' },
    ],
    resultsCta: 'Усі результати та рекорди',
    galleryHeading: 'З архіву',
    gallerySub: 'Два сезони — 2024 і 2025: бруківка, падіння і фініші. Наступне фото може бути твоїм.',
    galleryCta: 'Дивитись архів',
    voicesHeading: 'Що кажуть учасники',
    voices: [
      { quote: 'Крутий досвід. Напружена боротьба. І важливе нагадування: іноді можна витягнути гонку на характері 💥', name: 'Володимир Валько', handle: '@cosy.rider', link: 'https://www.instagram.com/p/DNGHIeFNQ2f/' },
      { quote: 'Найкоротше і найшвидше змагання, яке я їхала 🤣 Майже кілометр угору чистого задоволення по відбірній бруківці з гарними поворотами — і вино з музикою на фініші, кава з печивом на старті ✨', name: 'Дар’я Опенько', handle: '@ultiis', link: 'https://www.instagram.com/p/DNTD14Hsdju/' },
      { quote: 'Формат крутий: треба максимально швидко заїхати на Смородинський узвіз, де більша частина — бруківка різних розмірів. Усі радили їхати на МТБ, але я був упевнений у своєму велосипеді — прикатував і зрозумів, що з правильним тиском усе їдеться добре.', name: 'Олексій Морозов', handle: '@dedmoroz235', link: 'https://www.instagram.com/p/DCRHm-GtER_/' },
    ],
    faqHeading: 'Питання, які нам пишуть',
    faqRaw: [
      { q: 'Я ніколи не брав участі в гонках. Мені точно сюди?', a: 'Так. Половина учасників — новачки. Формат із гандикапом і другим шансом придуманий саме для тебе.' },
      { q: 'Який велосипед підійде?', a: 'Будь-який. Категорій дві — за типом керма: «баран» (шосе, гравійники) та прямий руль (МТБ, двопідвіси тощо).' },
      { q: 'Куди йдуть внески?', a: 'Кошти від реєстрації передамо на потреби підрозділу нашого велодруга — Олександра Царевського.', link: 'https://www.facebook.com/tsarevskiy', linkLabel: 'Олександр Царевський у Facebook' },
      { q: 'Що як дощ?', a: 'Бруківка стає підступнішою, а не гонку скасовують.' },
    ],
    finalTitle: 'Смородинський вже чекає. Справа за тобою.',
    finalSub: 'Реєстрація займає дві хвилини. Підйом — близько трьох. Гордість — значно довше.',
    footerOrganizersPre: 'Організатор — команда', footerOrganizersLink: '«Київська Сотка»',
    footerFb: 'Подія на Facebook',
    footerDisclaimer: 'Це неофіційний фан-сайт. За реєстрацію та офіційну інформацію відповідає оргкомітет Київської Сотки.',
  },
  en: {
    badge: 'Unofficial fan site — registration on Timing Events',
    brand: 'Hory Vyshche',
    navHome: 'Home', navArchive: 'Archive', navRecords: 'Records', navFaq: 'FAQ',
    ctaPrimary: 'Register', ctaSecondary: 'Rules',
    heroKicker: 'Amateur bike climb · Kyiv · August 1, 2026',
    heroTitle: 'Three minutes of pain. A year of pride.',
    heroSub: 'Sprynt Vhoru «Hory Vyshche»: 730 meters of Smorodynskyi Uzviz cobblestone, a 20-second handicap, and a nail-biting final. You don’t need to be a pro — just press the button.',
    heroStamp: 'Smorodynskyi Uzviz · Tatarka',
    profileHeading: 'Elevation profile',
    routeHeading: 'The route',
    linkRoute: 'Route on Google Maps', linkStart: 'Start location', linkFinish: 'Finish location',
    tickerParts: ['TO THE START', '730 M UPHILL', '68% COBBLESTONE', 'RECORD 2:41 — BEAT IT?', 'FEES GO TO A FRIEND’S ARMY UNIT', 'REGISTRATION CLOSES JULY 30, 18:00'],
    factsHeading: 'The course in numbers',
    factsRaw: [
      { value: '730 m', label: 'Course length' },
      { value: '62 m', label: 'Elevation gain' },
      { value: '68%', label: 'Historic cobblestone' },
      { value: '2:41', label: 'Course record, 2025' },
    ],
    whyHeading: 'Why you should be on the start line',
    why: [
      'Three minutes of pain — twelve months of getting to say “I did it.”',
      'Any bike is welcome. Two categories, split by handlebar: drop bar (road, gravel) and flat bar (MTB, full-suspension and the rest).',
      'Knockout format: lose twice and you can still make the final. A second chance is built into the rules.',
      'A 20-second handicap: even if you’re slower, your rival starts behind you. They’ll chase — let them try.',
      'The cobblestone is over a century old. Your time on it stays in the protocol forever.',
      'Registration fees go to the army unit of our cycling friend Oleksandr Tsarevskyi — your sweat works twice.',
    ],
    storyHeading: 'Why Smorodynskyi',
    storyLeft: [
      'Almost every cyclist has a “favourite” climb — the one we call a grinder or a wall depending on its length and gradient. In cities across Ukraine riders doggedly take on their own Koppenbergs and Muurs.',
      'Kyiv and its region can easily rival Belgian Flanders for the sheer number of steep, punishing uphills. The uzvozy linking Podil and Kurenivka to the “upper city” are perfect places to build climbing skills. And of course we all “love” the glorious Kosmos near Roslavychi.',
      'One of the most interesting, characterful and legend-soaked of them all is Smorodynskyi Uzviz.',
    ],
    storyRight: [
      'Around 2020, Stanislav Klymenko suggested taking a closer look at Smorodynskyi as a venue for a proper challenge race. In 2021 we ran a trial start to close the season — the atmosphere was superb.',
      'Now we’re running the uphill sprint again, this time on the resurfaced climb.',
      'Ambitious riders will race; less-prepared ones will simply enjoy (with a certain amount of effort) the beauty of the landscape park and write a landmark page into their own cycling history. Original souvenirs and a warm welcome at the finish — warm in every sense — will make the day unforgettable.',
    ],
    storyKicker: 'Let’s climb it up 🤘',
    regLabel: 'Registration closes in', regNote: 'Registration open until July 30, 18:00',
    countdownLabel: 'To the start', countdownNote: 'Start: August 1, 09:00',
    cdHoursLabel: 'hours', cdMinsLabel: 'minutes',
    scheduleHeading: 'Race-day schedule',
    schedule: [
      { time: '09:00', event: 'Check-in & bib pickup' },
      { time: '10:00', event: 'First run (qualifying)' },
      { time: '12:00', event: 'Second run' },
      { time: '14:00', event: 'Semifinals (heats)' },
      { time: '15:30', event: 'Final' },
      { time: '16:30', event: 'Awards' },
    ],
    resultsHeading: 'Times waiting to be beaten',
    resultsSub: '2025 category winners. Someone has to take these records down. Why not you?',
    results: [
      { category: 'Men, drop bar', winner: 'Yurii Koval', time: '2:41' },
      { category: 'Women, drop bar', winner: 'Olena Bondar', time: '3:05' },
      { category: 'Men, flat bar', winner: 'Maksym Tkach', time: '2:52' },
      { category: 'Women, flat bar', winner: 'Mariia Hrytsenko', time: '3:14' },
    ],
    resultsCta: 'All results & records',
    galleryHeading: 'From the archive',
    gallerySub: 'Two seasons — 2024 and 2025: cobblestone, crashes and finish lines. The next photo could be yours.',
    galleryCta: 'Browse the archive',
    voicesHeading: 'What riders say',
    voices: [
      { quote: 'A great experience. A tense fight. And an important reminder: sometimes you can pull a race out on sheer character 💥', name: 'Volodymyr Valko', handle: '@cosy.rider', link: 'https://www.instagram.com/p/DNGHIeFNQ2f/' },
      { quote: 'The shortest and fastest race I’ve ever ridden 🤣 Almost a kilometre uphill of pure pleasure on choice cobblestone with lovely corners — wine and music at the finish, coffee and cookies at the start ✨', name: 'Daria Openko', handle: '@ultiis', link: 'https://www.instagram.com/p/DNTD14Hsdju/' },
      { quote: 'Great format: get up Smorodynskyi Uzviz as fast as you can, most of it cobblestone of all shapes and sizes. Everyone told me to ride an MTB, but I trusted my bike — did a recon and realised that with the right tyre pressure it all rolls just fine.', name: 'Oleksii Morozov', handle: '@dedmoroz235', link: 'https://www.instagram.com/p/DCRHm-GtER_/' },
    ],
    faqHeading: 'Questions we get asked',
    faqRaw: [
      { q: 'I’ve never raced. Is this really for me?', a: 'Yes. Half the field are first-timers. The handicap and second-chance format exist exactly for you.' },
      { q: 'What bike works?', a: 'Any bike. Two categories, split by handlebar: drop bar (road, gravel) and flat bar (MTB, full-suspension and the rest).' },
      { q: 'Where do entry fees go?', a: 'Registration fees go to the army unit of our cycling friend, Oleksandr Tsarevskyi.', link: 'https://www.facebook.com/tsarevskiy', linkLabel: 'Oleksandr Tsarevskyi on Facebook' },
      { q: 'What if it rains?', a: 'The cobblestone gets trickier — the race doesn’t get cancelled.' },
    ],
    finalTitle: 'The hill is ready. Your move.',
    finalSub: 'Registration takes two minutes. The climb takes about three. The pride lasts much longer.',
    footerOrganizersPre: 'Organized by the cycling community', footerOrganizersLink: '«Kyivska Sotka»',
    footerFb: 'Facebook event',
    footerDisclaimer: 'This is an unofficial fan site run by a participant. The organizing committee handles registration and official information.',
  },
};

const FACT_CELLS = [
  { bg: '#F4EFE4', fg: '#17130E', sub: '#5B5648' },
  { bg: '#F4EFE4', fg: '#17130E', sub: '#5B5648' },
  { bg: '#F4EFE4', fg: '#17130E', sub: '#5B5648' },
  { bg: '#E23A00', fg: '#F4EFE4', sub: '#FBEBDD' },
];

const state = {
  lang: 'ua',
  menuOpen: false,
  faqOpen: 0,
};

function pad(n) { return String(n).padStart(2, '0'); }

function uaDaysWord(n) {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return 'день';
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return 'дні';
  return 'днів';
}

function dayLabel(lang, n) {
  return lang === 'ua' ? uaDaysWord(n) : (n === 1 ? 'day' : 'days');
}

function splitCountdown(target, now) {
  const left = Math.max(0, target - now);
  return {
    days: Math.floor(left / 86400000),
    hours: pad(Math.floor(left / 3600000) % 24),
    mins: pad(Math.floor(left / 60000) % 60),
  };
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function elevationProfileSvg() {
  return `
  <svg viewBox="0 0 300 112" class="profile-svg" role="img" aria-label="Elevation profile 105-180 m">
    <line x1="8" y1="71.6" x2="288" y2="71.6" stroke="#17130E" stroke-opacity="0.18" stroke-width="1" stroke-dasharray="3 4"></line>
    <line x1="8" y1="52.4" x2="288" y2="52.4" stroke="#17130E" stroke-opacity="0.18" stroke-width="1" stroke-dasharray="3 4"></line>
    <line x1="8" y1="33.2" x2="288" y2="33.2" stroke="#17130E" stroke-opacity="0.18" stroke-width="1" stroke-dasharray="3 4"></line>
    <line x1="8" y1="14" x2="288" y2="14" stroke="#17130E" stroke-opacity="0.18" stroke-width="1" stroke-dasharray="3 4"></line>
    <text x="8" y="68.6" font-family="IBM Plex Mono, monospace" font-size="9" fill="#5B5648">120</text>
    <text x="8" y="49.4" font-family="IBM Plex Mono, monospace" font-size="9" fill="#5B5648">140</text>
    <text x="8" y="30.2" font-family="IBM Plex Mono, monospace" font-size="9" fill="#5B5648">160</text>
    <text x="8" y="11" font-family="IBM Plex Mono, monospace" font-size="9" fill="#5B5648">180 m</text>
    <path d="M8,86 L39.8,75.4 L71.6,64.9 L103.5,56.2 L135.3,48.6 L157.6,42.8 L173.4,40.9 L183,39.9 L198.9,36.1 L214.8,32.2 L230.7,27.4 L262.5,20.7 L288,14 L288,86 Z" fill="#E23A00" fill-opacity="0.85"></path>
    <path d="M8,86 L39.8,75.4 L71.6,64.9 L103.5,56.2 L135.3,48.6 L157.6,42.8 L173.4,40.9 L183,39.9 L198.9,36.1 L214.8,32.2 L230.7,27.4 L262.5,20.7 L288,14" fill="none" stroke="#17130E" stroke-width="2"></path>
    <line x1="8" y1="87" x2="288" y2="87" stroke="#17130E" stroke-width="2"></line>
    <text x="8" y="100" font-family="IBM Plex Mono, monospace" font-size="9" fill="#5B5648">0</text>
    <text x="71.6" y="100" font-family="IBM Plex Mono, monospace" font-size="9" fill="#5B5648" text-anchor="middle">200</text>
    <text x="135.3" y="100" font-family="IBM Plex Mono, monospace" font-size="9" fill="#5B5648" text-anchor="middle">400</text>
    <text x="198.9" y="100" font-family="IBM Plex Mono, monospace" font-size="9" fill="#5B5648" text-anchor="middle">600</text>
    <text x="288" y="100" font-family="IBM Plex Mono, monospace" font-size="9" fill="#5B5648" text-anchor="end">880 m</text>
  </svg>`;
}

function render() {
  const c = content[state.lang];
  const isUa = state.lang === 'ua';
  const now = Date.now();
  const reg = splitCountdown(REG_DATE, now);
  const race = splitCountdown(RACE_DATE, now);
  const timers = [
    { label: c.regLabel, note: c.regNote, ...reg, dLabel: dayLabel(state.lang, reg.days) },
    { label: c.countdownLabel, note: c.countdownNote, ...race, dLabel: dayLabel(state.lang, race.days) },
  ];
  const daysWord = dayLabel(state.lang, race.days);
  const tickerParts = [`${race.days} ${daysWord.toUpperCase()} ${c.tickerParts[0]}`, ...c.tickerParts.slice(1)];
  const tickerText = tickerParts.join('   ★   ');
  const facts = c.factsRaw.map((f, i) => ({ ...f, ...FACT_CELLS[i] }));

  document.documentElement.lang = state.lang;
  document.title = c.brand + ' — ' + c.heroTitle;

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="badge-strip">${escapeHtml(c.badge)}</div>

    <nav class="nav">
      <span class="nav-brand">${escapeHtml(c.brand)}</span>
      <div class="nav-controls">
        <div class="lang-switch" aria-label="Language switch / Перемикач мови">
          <button type="button" data-action="lang-ua" aria-pressed="${isUa}" class="lang-btn${isUa ? ' is-active' : ''}">UA</button>
          <span class="sep">/</span>
          <button type="button" data-action="lang-en" aria-pressed="${!isUa}" class="lang-btn${!isUa ? ' is-active' : ''}">EN</button>
        </div>
        <button type="button" data-action="toggle-menu" aria-expanded="${state.menuOpen}" aria-label="Menu" class="menu-btn">
          <span></span><span></span><span></span>
        </button>
      </div>
      ${state.menuOpen ? `
      <div class="dropdown">
        <a href="#top">${escapeHtml(c.navHome)}</a>
        <a href="#gallery">${escapeHtml(c.navArchive)}</a>
        <a href="#">${escapeHtml(c.navRecords)}</a>
        <a href="#faq">${escapeHtml(c.navFaq)}</a>
        <div class="dropdown-rule"></div>
        <a href="#" class="dropdown-cta">${escapeHtml(c.ctaPrimary)}</a>
      </div>` : ''}
    </nav>

    <div class="ticker" aria-hidden="true">
      <div class="ticker-track">
        <span class="ticker-text">${escapeHtml(tickerText)}</span>
        <span class="ticker-text">${escapeHtml(tickerText)}</span>
      </div>
    </div>

    <section id="top">
      <div class="hero-inner">
        <p class="kicker">${escapeHtml(c.heroKicker)}</p>
        <h1 class="hero-title">${escapeHtml(c.heroTitle)}</h1>
        <div class="hero-footer-row">
          <p class="hero-sub">${escapeHtml(c.heroSub)}</p>
          <div class="cta-row">
            <a href="#" class="btn-primary">${escapeHtml(c.ctaPrimary)}</a>
            <a href="#" class="btn-secondary">${escapeHtml(c.ctaSecondary)}</a>
          </div>
        </div>
      </div>
      <div class="hero-media">
        <div class="hero-img-placeholder" role="img" aria-label="Велосипедисти піднімаються бруківкою узвозу"></div>
        <div class="profile-card">
          <p class="profile-heading">${escapeHtml(c.profileHeading)}</p>
          ${elevationProfileSvg()}
        </div>
        <div class="stamp">${escapeHtml(c.heroStamp)}</div>
      </div>
    </section>

    <section class="video-section">
      <figure class="video-frame">
        <video id="race-video" autoplay muted loop playsinline></video>
      </figure>
    </section>

    <div class="container">
      <section class="facts-section">
        <h2 class="section-heading-mono">${escapeHtml(c.factsHeading)}</h2>
        <div class="facts-grid">
          ${facts.map((fact) => `
          <div class="fact-cell" style="background:${fact.bg}">
            <p class="fact-value" style="color:${fact.fg}">${escapeHtml(fact.value)}</p>
            <p class="fact-label" style="color:${fact.sub}">${escapeHtml(fact.label)}</p>
          </div>`).join('')}
        </div>
      </section>

      <section class="route-section">
        <h2 class="section-heading">${escapeHtml(c.routeHeading)}</h2>
        <div id="hv-route-map"></div>
        <div class="route-links">
          <a href="https://maps.app.goo.gl/BRLo8xGGdRsKHYse8" target="_blank" rel="noopener" class="route-link">${escapeHtml(c.linkRoute)} ↗</a>
          <a href="https://maps.app.goo.gl/nxpHzWWnkN71EqMx8" target="_blank" rel="noopener" class="route-link">${escapeHtml(c.linkStart)} ↗</a>
          <a href="https://maps.app.goo.gl/Fev8zkjKWhLST3y66" target="_blank" rel="noopener" class="route-link">${escapeHtml(c.linkFinish)} ↗</a>
        </div>
      </section>

      <section class="story-section">
        <h2 class="section-heading">${escapeHtml(c.storyHeading)}</h2>
        <div class="story-grid">
          <div class="story-col">
            ${c.storyLeft.map((p) => `<p class="story-p">${escapeHtml(p)}</p>`).join('')}
          </div>
          <div class="story-col">
            ${c.storyRight.map((p) => `<p class="story-p">${escapeHtml(p)}</p>`).join('')}
            <p class="story-kicker">${escapeHtml(c.storyKicker)}</p>
          </div>
        </div>
      </section>

      <section class="why-section">
        <h2 class="why-heading">${escapeHtml(c.whyHeading)}</h2>
        <div class="why-list">
          ${c.why.map((text, i) => `
          <div class="why-item">
            <span class="why-num">${pad(i + 1)}</span>
            <p class="why-text">${escapeHtml(text)}</p>
          </div>`).join('')}
          <div class="rule-top"></div>
        </div>
      </section>
    </div>

    <section class="countdown-section">
      <div class="countdown-inner">
        <div class="timers">
          ${timers.map((tm) => `
          <div class="timer">
            <p class="timer-label">${escapeHtml(tm.label)}</p>
            <div class="timer-values">
              <div><span class="timer-num">${tm.days}</span><span class="timer-unit">${escapeHtml(tm.dLabel)}</span></div>
              <span class="timer-colon">:</span>
              <div><span class="timer-num">${tm.hours}</span><span class="timer-unit">${escapeHtml(c.cdHoursLabel)}</span></div>
              <span class="timer-colon">:</span>
              <div><span class="timer-num">${tm.mins}</span><span class="timer-unit">${escapeHtml(c.cdMinsLabel)}</span></div>
            </div>
            <p class="timer-note">${escapeHtml(tm.note)}</p>
          </div>`).join('')}
        </div>
        <a href="#" class="countdown-cta">${escapeHtml(c.ctaPrimary)}</a>
      </div>
    </section>

    <div class="container">
      <section class="schedule-section">
        <h2 class="section-heading">${escapeHtml(c.scheduleHeading)}</h2>
        <div>
          ${c.schedule.map((item) => `
          <div class="schedule-item">
            <span class="schedule-time">${escapeHtml(item.time)}</span>
            <span class="schedule-event">${escapeHtml(item.event)}</span>
          </div>`).join('')}
          <div class="rule-top"></div>
        </div>
      </section>

      <section class="results-section">
        <h2 class="section-heading">${escapeHtml(c.resultsHeading)}</h2>
        <p class="section-sub">${escapeHtml(c.resultsSub)}</p>
        <div>
          ${c.results.map((item) => `
          <div class="results-item">
            <span class="results-category">${escapeHtml(item.category)}</span>
            <span class="results-winner">${escapeHtml(item.winner)}</span>
            <span class="results-time">${escapeHtml(item.time)}</span>
          </div>`).join('')}
          <div class="rule-top"></div>
        </div>
        <a href="#" class="results-cta">${escapeHtml(c.resultsCta)} →</a>
      </section>

      <section id="gallery" class="gallery-section">
        <h2 class="section-heading">${escapeHtml(c.galleryHeading)}</h2>
        <p class="section-sub">${escapeHtml(c.gallerySub)}</p>
        <div class="gallery-grid">
          <figure class="gallery-figure"><div class="gallery-placeholder"></div></figure>
          <figure class="gallery-figure"><div class="gallery-placeholder"></div></figure>
          <figure class="gallery-figure"><div class="gallery-placeholder"></div></figure>
        </div>
        <a href="#" class="gallery-cta">${escapeHtml(c.galleryCta)} →</a>
      </section>

      <section class="voices-section">
        <h2 class="section-heading">${escapeHtml(c.voicesHeading)}</h2>
        <div class="voices-grid">
          ${c.voices.map((v) => `
          <figure class="voice-card">
            <blockquote class="voice-quote">${escapeHtml(v.quote)}</blockquote>
            <figcaption class="voice-caption">
              <span class="voice-name">${escapeHtml(v.name)}</span>
              <a href="${escapeHtml(v.link)}" target="_blank" rel="noopener" class="voice-link">${escapeHtml(v.handle)} ↗</a>
            </figcaption>
          </figure>`).join('')}
        </div>
      </section>

      <section id="faq" class="faq-section">
        <h2 class="section-heading">${escapeHtml(c.faqHeading)}</h2>
        <div>
          ${c.faqRaw.map((item, i) => {
            const open = state.faqOpen === i;
            return `
          <div class="faq-item">
            <button type="button" data-action="faq-toggle" data-index="${i}" aria-expanded="${open}" class="faq-question">
              <span>${escapeHtml(item.q)}</span>
              <span class="faq-marker">${open ? '−' : '+'}</span>
            </button>
            ${open ? `
            <p class="faq-answer">${escapeHtml(item.a)}</p>
            ${item.link ? `<p class="faq-link-wrap"><a href="${escapeHtml(item.link)}" target="_blank" rel="noopener" class="faq-link">${escapeHtml(item.linkLabel)} ↗</a></p>` : ''}
            ` : ''}
          </div>`;
          }).join('')}
          <div class="rule-top"></div>
        </div>
      </section>
    </div>

    <section class="final-section">
      <div class="final-inner">
        <h2 class="final-title">${escapeHtml(c.finalTitle)}</h2>
        <p class="final-sub">${escapeHtml(c.finalSub)}</p>
        <a href="#" class="final-cta">${escapeHtml(c.ctaPrimary)}</a>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand-col">
          <p class="footer-brand">${escapeHtml(c.brand)}</p>
          <p class="footer-organizers">${escapeHtml(c.footerOrganizersPre)} <a href="https://www.facebook.com/velo100ka" target="_blank" rel="noopener">${escapeHtml(c.footerOrganizersLink)}</a></p>
          <p class="footer-disclaimer">${escapeHtml(c.footerDisclaimer)}</p>
        </div>
        <a href="#" class="footer-fb">${escapeHtml(c.footerFb)} →</a>
      </div>
    </footer>
  `;

  mountRouteMap();
}

let routeMapMounted = false;
function mountRouteMap() {
  const host = document.getElementById('hv-route-map');
  if (!host || host.hasChildNodes()) return;
  const ph = document.createElement('div');
  ph.className = 'strava-embed-placeholder';
  Object.assign(ph.dataset, {
    embedType: 'route', embedId: '3516762366020213816', units: 'metric',
    fullWidth: 'false', style: 'standard', mapHash: '14.52/50.47716/30.47883',
    fromEmbed: 'true', token: 'Dym1LHBWgZbWm5HQYacE4ZBkKQVE56sRzLUKikpOC-s',
  });
  host.appendChild(ph);
  new MutationObserver(() => {
    const f = host.querySelector('iframe');
    if (f) { f.style.height = '100%'; f.style.width = '100%'; f.style.display = 'block'; }
  }).observe(host, { childList: true, subtree: true });

  if (!routeMapMounted) {
    routeMapMounted = true;
    const s = document.createElement('script');
    s.src = 'https://strava-embeds.com/embed.js';
    document.body.appendChild(s);
  }
}

document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const action = btn.dataset.action;
  if (action === 'lang-ua') state.lang = 'ua';
  else if (action === 'lang-en') state.lang = 'en';
  else if (action === 'toggle-menu') state.menuOpen = !state.menuOpen;
  else if (action === 'faq-toggle') {
    const i = Number(btn.dataset.index);
    state.faqOpen = state.faqOpen === i ? -1 : i;
  } else {
    return;
  }
  render();
});

setInterval(render, 30000);
render();
