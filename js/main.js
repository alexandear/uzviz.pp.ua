'use strict';

const RACE_DATE = new Date('2026-08-01T09:01:00+03:00').getTime();
const REG_DATE = new Date('2026-07-30T18:00:00+03:00').getTime();

const REGISTER_URL = 'https://e.ticketme.org/events/Hory-vyshche-2026';
const RULES_URL = 'https://timingevents.com/events/25180073';
const PHOTOS_2024_URL = 'https://sportmoments.photo/gallery.php?album=go_higher_2024';
const PHOTOS_2025_URL = 'https://www.facebook.com/media/set/?vanity=piskun.oleg&set=a.24296077950048786';

const HERO_IMAGE = 'assets/2024-hero-cobblestone-climb.jpg';
const GALLERY_IMAGES = [
  'assets/DSC05662.jpg',
  'assets/DSC05783.jpg',
  'assets/DSC04481.jpg',
  'assets/DSC05177.jpg',
  'assets/DSC05382.jpg',
  'assets/DSC05445.jpg',
  'assets/DSC05337.jpg',
  'assets/DSC05451.jpg',
  'assets/DSC05964.jpg',
  'assets/DSC05991.jpg',
  'assets/DSC06034.jpg',
  'assets/DSC06013.jpg',
];

const content = {
  ua: {
    brand: 'Гори Вище',
    navHome: 'Головна', navRoute: 'Маршрут', navArchive: 'Світлини', navVoices: 'Відгуки', navStory: 'Історія', navSchedule: 'План дня', navRecords: 'Результати', navFaq: 'FAQ',
    ctaPrimary: 'Зареєструватись', ctaSecondary: 'Положення',
    heroKicker: 'Аматорський вело-підйом · Київ · 1 серпня 2026',
    heroTitle: 'Три хвилини болю. Рік гордості.',
    heroSub: 'Спринт вгору «Гори Вище»: 880 метрів Смородинського узвозу, бруківка, дві спроби і фінал на нервах. Тобі не треба бути PRO — треба лиш наважитись приїхати.',
    heroStamp: 'Смородинський узвіз · Татарка',
    photoCredit: 'Фото: sportmoments.photo',
    routeHeading: 'Strava',
    linkRoute: 'Google Maps', linkStart: 'Місце старту', linkFinish: 'Місце фінішу',
    factsHeading: 'Траса в ЧИСЛАХ',
    factsRaw: [
      { value: '880 м', label: 'Довжина траси' },
      { value: '77 м', label: 'Набір висоти' },
      { value: '68%', label: 'Історична бруківка' },
      { value: '9,3%', label: 'Середній градієнт' },
      { value: '2:38', label: 'Рекорд траси (чоловіки), 2024' },
      { value: '3:30', label: 'Рекорд траси (жінки), 2024' },
    ],
    whyHeading: 'Чому ти маєш стартувати',
    why: [
      'Кошти від реєстрації підуть на потреби підрозділу нашого велодруга Олександра Царевського — твій піт працює двічі.',
      'Перевірити свої сили - скільки максимум ватів видаєш на підйомі.',
      'Бруківці понад сто років. Твій час на ній залишиться в протоколі назавжди.',
      'Можливість побувати на історичному узвозі, насолодитися красою ландшафтного парку "Смородинський" та побачити Смородинську печеру, якій 5 тисяч років.',
      'Три хвилини болю — і дванадцять місяців права казати «я це зробив».',
      'Унікальний формат гонки в Києві — таких подій більше немає в столиці.',
      'Доторкнутись до Туру Фландрії - легендарної гонки, якою надихались організатори "Гори Вище".',
    ],
    storyHeading: 'Чому гонка саме на Смородинському',
    storyBody: '<p><a href="https://uk.wikipedia.org/wiki/%D0%A1%D0%BC%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D1%83%D0%B7%D0%B2%D1%96%D0%B7" target="_blank" rel="noopener">Смородинський узвіз</a> — найдовший підйом Києва з бруківкою. Це старовинна вулиця у Шевченківському районі, місцевість Куренівка: пролягає від Нагірної до Кирилівської. До середини XX століття узвіз був забудований, тепер проходить через регіональний ландшафтний парк «Смородинський».</p><p>На схилах яру ховаються входи до <a href="https://uk.wikipedia.org/wiki/%D0%A1%D0%BC%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B0_%D0%BF%D0%B5%D1%87%D0%B5%D1%80%D0%B0" target="_blank" rel="noopener">Смородинської печери</a> — комплексу з майже двадцяти підземних споруд віком 4–3 тисячоліття до н. е. З печерою пов’язана легенда про двобій Добрині Микитича зі Змієм, тому її ще називають Змієвою печерою. У 1941–1943 роках вона слугувала схованкою для підпільників, які боролися проти німецької окупації. Сьогодні це офіційна археологічна пам’ятка України.</p><p>У 2021-му замість повноцінної гонки "Узвіз" <a href="https://www.facebook.com/media/set/?vanity=bikeincity&set=a.1955120627994450" target="_blank" rel="noopener">відбувся</a> лише «пробний» заїзд — через карантинні обмеження COVID-19.</p><p>Але вже <a href="https://www.facebook.com/events/1686152935573625/" target="blank" rel="noopener">у 2024 році</a> ідею змагань відновили й провели її на відремонтованому узвозі за участі близько 70 спортсменів. Попри шахеди, холод та тривоги, вона пройшла успішно, зібрані кошти з якої пішли для бійців загону ударних БпЛА «Злі Птахи».</p><p>У 2025-му <a href="https://www.facebook.com/events/1095082119158596/" target="blank" rel="noopener">«Гори Вище»</a> перенесли з осені на кінець літа — перед «Київською Соткою». У змаганнях взяли участь 50 райдерів у різних категоріях.</p><p>Тепер, у <a href="https://www.facebook.com/events/1374282914840076" target="_blank" rel="noopener">2026 році</a>, ми знову проводимо спринт вгору. Амбітні велоспортсмени позмагаються, а менш підготовлені — просто насолодяться красою ландшафтного парку й впишуть знакову сторінку у власну велоісторію.</p>',
    regLabel: 'Кінець реєстрації за', regNote: 'Реєстрація відкрита до 30 липня, 18:00',
    countdownLabel: 'До старту', countdownNote: 'Старт: 1 серпня, 09:00',
    cdHoursLabel: 'годин', cdMinsLabel: 'хвилин',
    scheduleHeading: 'План дня',
    schedule: [
      { time: '08:00', event: 'Збір учасників біля місця старту, довидача стартових пакетів' },
      { time: '08:45', event: 'Відкриття змагань' },
      { time: '09:00', event: 'Хвилина мовчання' },
      { time: '09:02', event: 'Старт першої спроби' },
      { time: '09:30', event: 'Старт другої спроби' },
      { time: '10:00', event: 'Півфінал' },
      { time: '10:15', event: 'Фінал' },
      { time: '11:00', event: 'Нагородження переможців' },
      { time: '11:30', event: 'Культурна програма, присвячена історії Києва та Татарки зокрема' },
    ],
    resultsHeading: 'РЕКОРДИ, які чекають, щоб їх побили',
    resultsSub: 'Переможці 2024 і 2025 років. Хтось має зняти ці рекорди. Чому не ти?',
    resultYears: [
      { year: 'Переможці 2024', protocol: 'https://timingevents.com/results/25179818', protocolLabel: 'Протокол 2024', rows: [
        { category: 'Чоловіки, пряме кермо', winner: 'Юрій Кресан', time: '2:39', strava: 'https://www.strava.com/activities/12852597860' },
        { category: 'Жінки, пряме кермо', winner: 'Наталія Ковалевська', time: '3:45', strava: 'https://www.strava.com/activities/12804364329' },
        { category: 'Чоловіки, кермо «баран»', winner: 'Павло Міщенко', time: '2:38', strava: 'https://www.strava.com/activities/15315853196' },
        { category: 'Жінки, кермо «баран»', winner: 'Марина Кизилова', time: '3:30', strava: 'https://www.strava.com/activities/12804703142' },
      ] },
      { year: 'Переможці 2025', protocol: 'https://drive.google.com/file/d/1ZO6vvxxCnTLvbUHJbwxVb2aB_-pTWkJI/view', protocolLabel: 'Протокол 2025', rows: [
        { category: 'Чоловіки, пряме кермо', winner: 'Максим Тимощук', time: '2:51', strava: 'https://www.strava.com/activities/15317493276' },
        { category: 'Жінки, пряме кермо', winner: 'Дар’я Опенько', time: '3:32', strava: 'https://www.strava.com/activities/15315104828' },
        { category: 'Чоловіки, кермо «баран»', winner: 'Дмитро Мельников', time: '2:46', strava: 'https://www.strava.com/activities/15315880154' },
        { category: 'Жінки, кермо «баран»', winner: 'Ірина Шіхадат', time: '4:49', strava: 'https://www.strava.com/activities/15306946309' },
      ] },
    ],
    galleryHeading: 'Світлини з минулих подій',
    gallerySub: 'Два сезони — 2024 і 2025: бруківка, насолода, страждання, фініші з останніх сил. Наступне фото може бути твоїм.',
    galleryCta: 'Фото за рік:',
    voicesHeading: 'Що кажуть учасники та учасниці',
    voices: [
      { quote: '🏁 Як для мене пройшла гонка "Гори Вище".\n Кваліфікація вийшла слабкою: не відчував ні сили в ногах, ні дихання - захекався, ще й пекло горло. Приїхав другим. У фіналі залишився з суперником до кінця і вдало спринтонув на фініші, що принесло перемогу.\nКрутий досвід. Напружена боротьба. Іноді можна витягнути гонку на характері 💥', name: 'Володимир Валько', bike: 'Гравійник', handle: '@cosy.rider', link: 'https://www.instagram.com/p/DNGHIeFNQ2f/' },
      { quote: 'Найкоротше і найшвидше змагання, яке я їхала 🤣 Майже кілометр угору чистого задоволення по відбірній бруківці з гарними поворотами — і вино з музикою на фініші, кава з печивом на старті ✨', name: 'Дар’я Опенько', bike: 'МТБ', handle: '@ultiis', link: 'https://www.instagram.com/p/DNTD14Hsdju/' },
      { quote: 'Формат крутий: треба максимально швидко заїхати на Смородинський узвіз, де більша частина — бруківка різних розмірів. Усі радили їхати на МТБ, але я був упевнений у своєму велосипеді — прикатував і зрозумів, що з правильним тиском усе їдеться добре.', name: 'Олексій Морозов', bike: 'Шосе', handle: '@dedmoroz235', link: 'https://www.instagram.com/p/DCRHm-GtER_/' },
      { quote: 'Було надзвичайно душевно. "Київська Сотка" великі молодці, що змогли провести захід у перервах між повітряними тривогами.\nГарно поспілкувався з учасниками, напився кави від "Лайби",  посів третє місце.\nЗмагання "ГориВище 2024" дуже сподобались.', name: 'Олександр Редько', bike: 'Гравійник', handle: '@oleksandr.red', link: 'https://instagram.com/oleksandr.red' },
      { quote: 'Завдяки велоподії вперше побувала на Смородинському узвозі. Через тривоги від шахедів сусідньої недодержави чекати заїздів прийшлося довго, тож дослідила пагорби та печеру змія. Змія давно немає, бо на мерзенну тварюку знайдеться Кожум\'яка або "Злі Птахи" зведеного загону ударних БпЛА, на підтримку яких організована подія.', name: 'Світлана Юсипенко', bike: 'Глядачка', handle: '@svitlana.usipenko', link: 'https://www.facebook.com/svitlana.usipenko/posts/pfbid02qBjJUW2tc6KWLdu4gemsQhdninzELz1zss3w8U44hLwLMvz1N1wRbNA2AEVGbjNvl' },
    ],
    faqHeading: 'Питання, які нам пишуть',
    faqRaw: [
      { q: 'Я ніколи не брав участі в гонках. Мені точно сюди?', a: 'Так. Половина учасників — новачки. Формат із гандикапом і другим шансом придуманий саме для тебе.' },
      { q: 'Який велосипед підійде?', a: 'Будь-який. Категорій дві — за типом керма: «баран» (шосе, гравійники) та прямий руль (МТБ, двопідвіси тощо).' },
      { q: 'Куди йдуть внески?', a: 'Кошти від реєстрації передамо на потреби підрозділу нашого велодруга — Олександра Царевського.', link: 'https://www.facebook.com/tsarevskiy', linkLabel: 'Олександр Царевський у Facebook' },
      { q: 'Чи є знижки для військових?', a: 'Так — 50% від ціни стартового внеску.' },
      { q: 'Чи треба мати страховку?', a: 'Ні, не обов’язково.' },
      { q: 'Що як дощ?', a: 'Бруківка стає підступнішою, але гонку не скасовують.' },
      { q: 'Який алгоритм дій в повітряну тривогу?', a: 'Прямуємо в укриття. Змагання продовжаться після відбою тривоги.' },
    ],
    finalTitle: 'Смородинський вже чекає. Справа за тобою.',
    finalSub: 'Реєстрація займає дві хвилини. Підйом — близько трьох. Гордість — значно довше.',
    footerOrganizers: 'Організатор — команда <a href="https://www.facebook.com/velo100ka" target="_blank" rel="noopener">«Київська Сотка»</a>',
    footerFb: 'Подія на Facebook',
    footerDisclaimer: 'Це неофіційний фан-сайт, створений <a href="https://www.instagram.com/oleksandr.red/" target="_blank" rel="noopener">Олександром Редько</a>, учасником змагань. Реєстрацією та офіційною інформацією опікується організаційний комітет.',
    backToTop: 'Нагору',
  },
  en: {
    brand: 'Hory Vyshche',
    navHome: 'Home', navRoute: 'Route', navArchive: 'Photos', navVoices: 'Reviews', navStory: 'Story', navSchedule: 'Schedule', navRecords: 'Results', navFaq: 'FAQ',
    ctaPrimary: 'Register', ctaSecondary: 'Rules',
    heroKicker: 'Amateur bike climb · Kyiv · August 1, 2026',
    heroTitle: 'Three minutes of pain. A year of pride.',
    heroSub: 'Uphill sprint «Hory Vyshche»: 880 meters of Smorodynskyi Uzviz cobblestone, two attempts, and a nail-biting final. You don’t need to be a pro — you just need to dare to show up.',
    heroStamp: 'Smorodynskyi Uzviz · Tatarka',
    photoCredit: 'Photo: sportmoments.photo',
    routeHeading: 'Strava',
    linkRoute: 'Google Maps', linkStart: 'Start location', linkFinish: 'Finish location',
    factsHeading: 'The course in numbers',
    factsRaw: [
      { value: '880 m', label: 'Course length' },
      { value: '77 m', label: 'Elevation gain' },
      { value: '68%', label: 'Historic cobblestone' },
      { value: '9.3%', label: 'Average gradient' },
      { value: '2:38', label: 'Course record (men), 2024' },
      { value: '3:30', label: 'Course record (women), 2024' },
    ],
    whyHeading: 'Why you should be on the start line',
    why: [
      'Registration fees go to the army unit of our cycling friend Oleksandr Tsarevskyi — your sweat works twice.',
      'Test your limits — find out the max watts you can put out on a climb.',
      'The cobblestone is over a century old. Your time on it stays in the protocol forever.',
      'A chance to visit a historic climb, enjoy the beauty of the Smorodynskyi landscape park, and see the 5,000-year-old Smorodynska Cave.',
      'Three minutes of pain — twelve months of getting to say “I did it.”',
      'A one-of-a-kind race format in Kyiv — there’s nothing else like it in the capital.',
      'A taste of the Tour of Flanders — the legendary race that inspired the organizers of "Hory Vyshche."',
    ],
    storyHeading: 'Why the race is held on Smorodynskyi',
    storyBody: '<p><a href="https://uk.wikipedia.org/wiki/%D0%A1%D0%BC%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D1%83%D0%B7%D0%B2%D1%96%D0%B7" target="_blank" rel="noopener">Smorodynskyi Uzviz</a> is Kyiv’s longest cobblestone climb. It’s a historic street in the Shevchenkivskyi district, in the Kurenivka area, running from Nahirna to Kyrylivska Street. Built up until the mid-20th century, it now runs through the Smorodynskyi regional landscape park.</p><p>The slopes of the ravine hide the entrances to the <a href="https://uk.wikipedia.org/wiki/%D0%A1%D0%BC%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B0_%D0%BF%D0%B5%D1%87%D0%B5%D1%80%D0%B0" target="_blank" rel="noopener">Smorodynska Cave</a> — a complex of nearly twenty underground chambers dating back 4,000–3,000 years BCE. A legend about Dobrynia Nikitich’s duel with the Dragon is tied to the cave, giving it its alternate name, the Dragon’s Cave. In 1941–1943 it served as a hideout for an underground resistance group fighting the German occupation. Today it’s an officially recognized archaeological monument of Ukraine.</p><p>In 2021, instead of a full "Uzviz" race, only a "trial" run <a href="https://www.facebook.com/media/set/?vanity=bikeincity&set=a.1955120627994450" target="_blank" rel="noopener">took place</a> — due to COVID-19 quarantine restrictions.</p><p>But already <a href="https://www.facebook.com/events/1686152935573625/" target="_blank" rel="noopener">in 2024</a> the idea of the race was revived and held on the resurfaced climb, with around 70 athletes taking part. Despite Shahed drones, the cold, and air-raid alerts, it went off successfully, and the funds raised went to the fighters of the "Zli Ptakhy" strike UAV unit.</p><p>In 2025, <a href="https://www.facebook.com/events/1095082119158596/" target="_blank" rel="noopener">"Hory Vyshche"</a> moved from autumn to the end of summer — right before "Kyivska Sotka." 50 riders took part across the categories.</p><p>Now, in <a href="https://www.facebook.com/events/1374282914840076" target="_blank" rel="noopener">2026</a>, we’re holding the uphill sprint once again. Ambitious cyclists will compete, while the less prepared will simply enjoy the beauty of the landscape park and write a landmark page into their own cycling history.</p>',
    regLabel: 'Registration closes in', regNote: 'Registration open until July 30, 18:00',
    countdownLabel: 'To the start', countdownNote: 'Start: August 1, 09:00',
    cdHoursLabel: 'hours', cdMinsLabel: 'minutes',
    scheduleHeading: 'Race-day schedule',
    schedule: [
      { time: '08:00', event: 'Riders gather near the start, race-kit pickup' },
      { time: '08:45', event: 'Opening ceremony' },
      { time: '09:00', event: 'A minute of silence' },
      { time: '09:02', event: 'First run' },
      { time: '09:30', event: 'Second run' },
      { time: '10:00', event: 'Semifinal' },
      { time: '10:15', event: 'Final' },
      { time: '11:00', event: 'Awards' },
      { time: '11:30', event: 'Cultural programme on the history of Kyiv and Tatarka' },
    ],
    resultsHeading: 'Times waiting to be beaten',
    resultsSub: '2024 and 2025 category winners. Someone has to take these records down. Why not you?',
    resultYears: [
      { year: '2024 winners', protocol: 'https://timingevents.com/results/25179818', protocolLabel: '2024 protocol', rows: [
        { category: 'Men, flat bar', winner: 'Yurii Kresan', time: '2:39', strava: 'https://www.strava.com/activities/12852597860' },
        { category: 'Women, flat bar', winner: 'Nataliia Kovalevska', time: '3:45', strava: 'https://www.strava.com/activities/12804364329' },
        { category: 'Men, drop bar', winner: 'Pavlo Mishchenko', time: '2:38', strava: 'https://www.strava.com/activities/15315853196' },
        { category: 'Women, drop bar', winner: 'Maryna Kyzylova', time: '3:30', strava: 'https://www.strava.com/activities/12804703142' },
      ] },
      { year: '2025 winners', protocol: 'https://drive.google.com/file/d/1ZO6vvxxCnTLvbUHJbwxVb2aB_-pTWkJI/view', protocolLabel: '2025 protocol', rows: [
        { category: 'Men, flat bar', winner: 'Maksym Tymoshchuk', time: '2:51', strava: 'https://www.strava.com/activities/15317493276' },
        { category: 'Women, flat bar', winner: 'Daria Openko', time: '3:32', strava: 'https://www.strava.com/activities/15315104828' },
        { category: 'Men, drop bar', winner: 'Dmytro Melnykov', time: '2:46', strava: 'https://www.strava.com/activities/15315880154' },
        { category: 'Women, drop bar', winner: 'Iryna Shikhadat', time: '4:49', strava: 'https://www.strava.com/activities/15306946309' },
      ] },
    ],
    galleryHeading: 'Photos from past events',
    gallerySub: 'Two seasons — 2024 and 2025: cobblestone, joy, suffering, finishes on the very last of your strength. The next photo could be yours.',
    galleryCta: 'Photos by year:',
    voicesHeading: 'What riders say',
    voices: [
      { quote: '🏁 Here’s how "Hory Vyshche" went for me.\n Qualifying was weak: no power in my legs, no air in my lungs — I was gasping, my throat was on fire. Finished second. In the final I stayed with my rival to the very end and pulled off a winning sprint at the finish.\nA great experience. A tense fight. Sometimes you can pull a race out on sheer character 💥', name: 'Volodymyr Valko', bike: 'Gravel', handle: '@cosy.rider', link: 'https://www.instagram.com/p/DNGHIeFNQ2f/' },
      { quote: 'The shortest and fastest race I’ve ever ridden 🤣 Almost a kilometre uphill of pure pleasure on choice cobblestone with lovely corners — wine and music at the finish, coffee and cookies at the start ✨', name: 'Daria Openko', bike: 'MTB', handle: '@ultiis', link: 'https://www.instagram.com/p/DNTD14Hsdju/' },
      { quote: 'Great format: get up Smorodynskyi Uzviz as fast as you can, most of it cobblestone of all shapes and sizes. Everyone told me to ride an MTB, but I trusted my bike — did a recon and realised that with the right tyre pressure it all rolls just fine.', name: 'Oleksii Morozov', bike: 'Road', handle: '@dedmoroz235', link: 'https://www.instagram.com/p/DCRHm-GtER_/' },
      { quote: 'It was incredibly heartfelt. Huge respect to "Kyivska Sotka" for pulling off the event between air-raid alerts.\nHad great conversations with other riders, drank my fill of coffee from "Laiba", finished third.\nReally enjoyed the "Hory Vyshche 2024" race.', name: 'Oleksandr Redko', bike: 'Gravel', handle: '@oleksandr.red', link: 'https://instagram.com/oleksandr.red' },
      { quote: 'Thanks to this bike event, I visited Smorodynskyi Uzviz for the first time. Because of Shahed alerts from the neighboring non-state, I had to wait a long time between runs, so I explored the hills and the Dragon’s Cave. The dragon is long gone — a Kozhum’iaka or the "Zli Ptakhy" strike UAV unit, which the event supports, will always find the vile creature.', name: 'Svitlana Yusypenko', bike: 'Spectator', handle: '@svitlana.usipenko', link: 'https://www.facebook.com/svitlana.usipenko/posts/pfbid02qBjJUW2tc6KWLdu4gemsQhdninzELz1zss3w8U44hLwLMvz1N1wRbNA2AEVGbjNvl' },
    ],
    faqHeading: 'Questions we get asked',
    faqRaw: [
      { q: 'I’ve never raced. Is this really for me?', a: 'Yes. Half the field are first-timers. The handicap and second-chance format exist exactly for you.' },
      { q: 'What bike works?', a: 'Any bike. Two categories, split by handlebar: drop bar (road, gravel) and flat bar (MTB, full-suspension and the rest).' },
      { q: 'Where do entry fees go?', a: 'Registration fees go to the army unit of our cycling friend, Oleksandr Tsarevskyi.', link: 'https://www.facebook.com/tsarevskiy', linkLabel: 'Oleksandr Tsarevskyi on Facebook' },
      { q: 'Is there a discount for military personnel?', a: 'Yes — 50% off the entry fee.' },
      { q: 'Do I need insurance?', a: 'No, it’s not required.' },
      { q: 'What if it rains?', a: 'The cobblestone gets trickier — the race doesn’t get cancelled.' },
      { q: 'What’s the protocol during an air-raid alert?', a: 'We head to shelter. The race resumes once the all-clear sounds.' },
    ],
    finalTitle: 'Smorodynskyi is already waiting. It’s up to you now.',
    finalSub: 'Registration takes two minutes. The climb takes about three. The pride lasts much longer.',
    footerOrganizers: 'Organizer — the <a href="https://www.facebook.com/velo100ka" target="_blank" rel="noopener">«Kyivska Sotka»</a> team',
    footerFb: 'Facebook event',
    footerDisclaimer: 'This is an unofficial fan site created by <a href="https://www.instagram.com/oleksandr.red/" target="_blank" rel="noopener">Oleksandr Redko</a>, a race participant. Registration and official information are handled by the organizing committee.',
    backToTop: 'To the top',
  },
};

const FACT_CELL_DEFAULT = { bg: '#F4EFE4', fg: '#17130E', sub: '#5B5648' };
const FACT_CELL_HIGHLIGHT = { bg: '#E23A00', fg: '#F4EFE4', sub: '#FBEBDD' };

const PHOTO_DATE = { ua: '2 лис 2024', en: '2 Nov 2024' };

const state = {
  lang: 'ua',
  menuOpen: false,
  faqOpen: 0,
  photo: -1,
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

function escapeHtmlMultiline(str) {
  return escapeHtml(str).replace(/\n/g, '<br>');
}

function webpOf(jpgSrc) {
  return jpgSrc.replace(/\.jpg$/, '.webp');
}

function thumbOf(jpgSrc) {
  return jpgSrc.replace('assets/', 'assets/thumbs/');
}

function picture(src, attrs) {
  return `<picture><source srcset="${webpOf(src)}" type="image/webp"><img src="${src}" ${attrs}></picture>`;
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
  const facts = c.factsRaw.map((f) => ({
    ...f,
    ...(/рекорд|record/i.test(f.label) ? FACT_CELL_HIGHLIGHT : FACT_CELL_DEFAULT),
  }));

  document.documentElement.lang = state.lang;
  document.title = c.brand + ' — ' + c.heroTitle;

  const app = document.getElementById('app');
  app.innerHTML = `
    <nav class="nav">
      <a href="#top" class="nav-brand">${escapeHtml(c.brand)}</a>
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
        <a href="#route">${escapeHtml(c.navRoute)}</a>
        <a href="#gallery">${escapeHtml(c.navArchive)}</a>
        <a href="#voices">${escapeHtml(c.navVoices)}</a>
        <a href="#story">${escapeHtml(c.navStory)}</a>
        <a href="#schedule">${escapeHtml(c.navSchedule)}</a>
        <a href="#results">${escapeHtml(c.navRecords)}</a>
        <a href="#faq">${escapeHtml(c.navFaq)}</a>
        <div class="dropdown-rule"></div>
        <a href="${REGISTER_URL}" target="_blank" rel="noopener" class="dropdown-cta">${escapeHtml(c.ctaPrimary)}</a>
      </div>` : ''}
    </nav>

    <section id="top">
      <div class="hero-inner">
        <p class="kicker">${escapeHtml(c.heroKicker)}</p>
        <h1 class="hero-title">${escapeHtml(c.heroTitle)}</h1>
        <div class="hero-footer-row">
          <p class="hero-sub">${escapeHtml(c.heroSub)}</p>
          <div class="cta-row">
            <a href="${REGISTER_URL}" target="_blank" rel="noopener" class="btn-primary">${escapeHtml(c.ctaPrimary)}</a>
            <a href="${RULES_URL}" target="_blank" rel="noopener" class="btn-secondary">${escapeHtml(c.ctaSecondary)}</a>
          </div>
        </div>
      </div>
      <div class="hero-media">
        ${picture(HERO_IMAGE, 'alt="Велосипедисти піднімаються бруківкою узвозу" class="hero-img"')}
        <div class="stamp">${escapeHtml(c.heroStamp)}</div>
        <a href="https://sportmoments.photo/" target="_blank" rel="noopener" class="photo-credit">${escapeHtml(c.photoCredit)} ↗</a>
      </div>
    </section>

    <div class="container">
      <section id="route" class="facts-section">
        <h2 class="section-heading-mono"><a href="#route" class="heading-link">${escapeHtml(c.factsHeading)}</a></h2>
        <div class="facts-grid">
          ${facts.map((fact) => `
          <div class="fact-cell" style="background:${fact.bg}">
            <p class="fact-value" style="color:${fact.fg}">${escapeHtml(fact.value)}</p>
            <p class="fact-label" style="color:${fact.sub}">${escapeHtml(fact.label)}</p>
          </div>`).join('')}
        </div>
      </section>

      <section class="route-section">
        <div id="hv-route-map"></div>
        <div class="route-links">
          <a href="https://maps.app.goo.gl/BRLo8xGGdRsKHYse8" target="_blank" rel="noopener" class="route-link">${escapeHtml(c.linkRoute)} ↗</a>
          <a href="https://maps.app.goo.gl/nxpHzWWnkN71EqMx8" target="_blank" rel="noopener" class="route-link">${escapeHtml(c.linkStart)} ↗</a>
          <a href="https://maps.app.goo.gl/Fev8zkjKWhLST3y66" target="_blank" rel="noopener" class="route-link">${escapeHtml(c.linkFinish)} ↗</a>
        </div>
      </section>

      <section id="gallery" class="gallery-section">
        <h2 class="section-heading"><a href="#gallery" class="heading-link">${escapeHtml(c.galleryHeading)}</a></h2>
        <p class="section-sub">${escapeHtml(c.gallerySub)}</p>
        <div class="gallery-grid" data-action="open-lightbox">
          ${GALLERY_IMAGES.map((src, i) => `<figure class="gallery-figure" data-index="${i}">${picture(thumbOf(src), 'alt="" loading="lazy"')}</figure>`).join('')}
        </div>
        <div class="gallery-years">
          <span class="years-label">${escapeHtml(c.galleryCta)}</span>
          <a href="${PHOTOS_2024_URL}" target="_blank" rel="noopener" class="year-link">2024 →</a>
          <a href="${PHOTOS_2025_URL}" target="_blank" rel="noopener" class="year-link">2025 →</a>
        </div>
      </section>

      <section id="voices" class="voices-section">
        <h2 class="section-heading"><a href="#voices" class="heading-link">${escapeHtml(c.voicesHeading)}</a></h2>
        <div class="voices-grid">
          ${c.voices.map((v) => `
          <figure class="voice-card">
            <blockquote class="voice-quote">${escapeHtmlMultiline(v.quote)}</blockquote>
            <figcaption class="voice-caption">
              <span class="voice-name">${escapeHtml(v.name)}</span>
              <a href="${escapeHtml(v.link)}" target="_blank" rel="noopener" class="voice-link">${escapeHtml(v.handle)} ↗</a>
              <span class="voice-bike">${escapeHtml(v.bike)}</span>
            </figcaption>
          </figure>`).join('')}
        </div>
      </section>

      <section id="story" class="story-section">
        <h2 class="section-heading"><a href="#story" class="heading-link">${escapeHtml(c.storyHeading)}</a></h2>
        <div class="story-body">${c.storyBody}</div>
      </section>

      <section id="participate" class="why-section">
        <h2 class="why-heading"><a href="#participate" class="heading-link">${escapeHtml(c.whyHeading)}</a></h2>
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
        <a href="${REGISTER_URL}" target="_blank" rel="noopener" class="countdown-cta">${escapeHtml(c.ctaPrimary)}</a>
      </div>
    </section>

    <div class="container">
      <section id="schedule" class="schedule-section">
        <h2 class="section-heading"><a href="#schedule" class="heading-link">${escapeHtml(c.scheduleHeading)}</a></h2>
        <div>
          ${c.schedule.map((item) => `
          <div class="schedule-item">
            <span class="schedule-time">${escapeHtml(item.time)}</span>
            <span class="schedule-event">${escapeHtml(item.event)}</span>
          </div>`).join('')}
          <div class="rule-top"></div>
        </div>
      </section>

      <section id="results" class="results-section">
        <h2 class="section-heading"><a href="#results" class="heading-link">${escapeHtml(c.resultsHeading)}</a></h2>
        <p class="section-sub">${escapeHtml(c.resultsSub)}</p>
        <div class="results-years-grid">
          ${c.resultYears.map((yr) => `
          <div>
            <p class="results-year-heading">${escapeHtml(yr.year)}</p>
            ${yr.rows.map((item) => `
            <div class="results-item">
              <span class="results-category">${escapeHtml(item.category)}</span>
              <a href="${escapeHtml(item.strava)}" target="_blank" rel="noopener" class="results-winner">${escapeHtml(item.winner)}</a>
              <span class="results-time">${escapeHtml(item.time)}</span>
            </div>`).join('')}
            <div class="rule-top"></div>
            <a href="${escapeHtml(yr.protocol)}" target="_blank" rel="noopener" class="year-link results-protocol-link">${escapeHtml(yr.protocolLabel)} →</a>
          </div>`).join('')}
        </div>
      </section>

      <section id="faq" class="faq-section">
        <h2 class="section-heading"><a href="#faq" class="heading-link">${escapeHtml(c.faqHeading)}</a></h2>
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
        <a href="${REGISTER_URL}" target="_blank" rel="noopener" class="final-cta">${escapeHtml(c.ctaPrimary)}</a>
      </div>
    </section>

    ${state.photo >= 0 ? `
    <div data-action="close-lightbox" role="dialog" aria-modal="true" class="lightbox">
      <div class="lightbox-img" style="background-image: url('${GALLERY_IMAGES[state.photo]}'); background-image: image-set(url('${webpOf(GALLERY_IMAGES[state.photo])}') type('image/webp'), url('${GALLERY_IMAGES[state.photo]}') type('image/jpeg'));"></div>
      <div class="lightbox-controls">
        <button type="button" data-action="prev-photo" aria-label="Previous" class="lightbox-btn">←</button>
        <span class="lightbox-counter">${state.photo + 1} / ${GALLERY_IMAGES.length}</span>
        <button type="button" data-action="next-photo" aria-label="Next" class="lightbox-btn">→</button>
        <button type="button" data-action="close-lightbox" aria-label="Close" class="lightbox-btn lightbox-close">✕</button>
      </div>
      <span class="lightbox-date">${escapeHtml(PHOTO_DATE[state.lang])}</span>
      <a href="https://sportmoments.photo/" target="_blank" rel="noopener" class="lightbox-credit">${escapeHtml(c.photoCredit)} ↗</a>
    </div>` : ''}

    <a href="#top" class="back-to-top">${escapeHtml(c.backToTop)} ↑</a>

    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand-col">
          <p class="footer-brand">${escapeHtml(c.brand)}</p>
          <p class="footer-organizers">${c.footerOrganizers}</p>
          <p class="footer-disclaimer">${c.footerDisclaimer}</p>
        </div>
        <a href="https://www.facebook.com/events/1374282914840076/" target="_blank" rel="noopener" class="footer-fb">${escapeHtml(c.footerFb)} →</a>
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
  } else if (action === 'open-lightbox') {
    const fig = e.target.closest('[data-index]');
    if (!fig) return;
    state.photo = Number(fig.dataset.index);
  } else if (action === 'close-lightbox') {
    state.photo = -1;
  } else if (action === 'prev-photo') {
    state.photo = (state.photo - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
  } else if (action === 'next-photo') {
    state.photo = (state.photo + 1) % GALLERY_IMAGES.length;
  } else {
    return;
  }
  render();
});

document.addEventListener('keydown', (e) => {
  if (state.photo < 0) return;
  if (e.key === 'Escape') state.photo = -1;
  else if (e.key === 'ArrowRight') state.photo = (state.photo + 1) % GALLERY_IMAGES.length;
  else if (e.key === 'ArrowLeft') state.photo = (state.photo - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
  else return;
  render();
});

setInterval(render, 30000);
render();
