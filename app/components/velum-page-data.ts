const assetRoot = '/assets/velum';

export const assets = {
  logo: '/logo.svg',
  hero: `${assetRoot}/hero/hero.jpg`,
  models: [
    `${assetRoot}/models/hutir/photo.jpg`,
    `${assetRoot}/models/sadiba/photo.jpg`,
    `${assetRoot}/models/majetok/photo.jpg`,
    `${assetRoot}/models/pomistya/photo.jpg`
  ],
  houses: [
    `${assetRoot}/houses/hutir-43/photo.jpg`,
    `${assetRoot}/houses/sadiba-31/photo.jpg`,
    `${assetRoot}/houses/hutir-26/photo.jpg`,
    `${assetRoot}/houses/majetok-43/photo.jpg`,
    `${assetRoot}/houses/ugiddya-10/photo.webp`,
    `${assetRoot}/houses/otchina-88/photo.png`
  ],
  ecoPark: `${assetRoot}/cases/eco-park/main.jpg`,
  tyshaCottages: `${assetRoot}/cases/tysha-cottages.png`,
  chudodievo: `${assetRoot}/cases/chudodievo.png`,
  ostrivCamp: `${assetRoot}/cases/ostriv-camp.webp`,
  spokiy: `${assetRoot}/cases/spokiy.png`,
  ecoGallery: [
    `${assetRoot}/cases/eco-park/gallery-1.jpg`,
    `${assetRoot}/cases/eco-park/gallery-2.jpg`,
    `${assetRoot}/cases/eco-park/gallery-3.webp`
  ]
};

export const navigation = [
  ['Головна', 'top'],
  ['Модульні будинки', 'houses'],
  ['Наші кейси', 'cases'],
  ['FAQ', 'faq'],
  ['Безкоштовний розрахунок', 'contacts'],
  ['Контакти', 'footer'],
] as const;

export const processSteps = [
  ['1 етап', 'Фінансова модель бази відпочинку', 'Рахуємо дохідність, бюджет і строк окупності проєкту.', 0],
  ['2 етап', 'Розробка генплану бази', 'Продумуємо ділянку, розміщення будинків та інфраструктуру.', 1],
  ['3 етап', 'Виробництво та монтаж будинків', 'Виготовляємо модульні будинки та встановлюємо їх на ділянці.', 2],
  ['4 етап', 'Підготовка землі та комунікацій', 'Фундамент, електрика, вода, каналізація та благоустрій.', 3],
  ['5 етап', 'Запуск і перші продажі', 'Налаштовуємо базовий маркетинг і допомагаємо залучити перших гостей.', 4],
  ['Сервіс', 'Сервісна підтримка', 'Залишаємося на зв’язку після запуску та супроводжуємо проєкт.', 5]
] as const;

export const modelNames = ['Кемп', 'Віледж', 'Резиденція', 'Резорт'] as const;
export const modelCounts = ['3', '5', '7', '10+'] as const;

export type ModelRow = {
  payback: string;
  profit: string;
  revenue: string;
  costs: string;
  price: string;
  rentalPrice?: string;
  title?: string;
  titlePrefix?: string;
  preserveTitleCase?: boolean;
  showEconomy?: boolean;
  revenueLabel?: string;
  revenueNote?: string;
  costsLabel?: string;
  costsNote?: string;
  rentalLabel?: string;
  paybackLabel?: string;
  profitLabel?: string;
};

export const modelRows: ModelRow[] = [
  {
    payback: '28 місяців',
    profit: '2 562 000 грн',
    revenue: '3 942 000 грн',
    costs: '1 380 000 грн',
    price: '6 000 000 грн',
    rentalPrice: '6 000 грн',
    titlePrefix: 'КЕМП',
    preserveTitleCase: true,
    showEconomy: false,
    revenueLabel: 'Прогнозована виручка за рік:',
    revenueNote: 'Сценарій: 60% завантаженості',
    costsLabel: 'Прогнозовані витрати за рік:',
    costsNote: 'Що входить у витрати →',
    rentalLabel: 'Середня ціна оренди будинку / доба:',
    paybackLabel: 'Прогнозований термін окупності бази',
    profitLabel: 'Прогнозований прибуток за рік'
  },
  {
    payback: '27 місяців',
    profit: '4 400 000 грн',
    revenue: '6 570 000 грн',
    costs: '2 170 000 грн',
    price: '9 900 000 грн',
    rentalPrice: '6 000 грн',
    titlePrefix: 'ВІЛЕДЖ',
    preserveTitleCase: true,
    showEconomy: false,
    revenueLabel: 'Прогнозована виручка за рік:',
    revenueNote: 'Сценарій: 60% завантаженості',
    costsLabel: 'Прогнозовані витрати за рік:',
    costsNote: 'Що входить у витрати →',
    rentalLabel: 'Середня ціна оренди будинку / доба:',
    paybackLabel: 'Прогнозований термін окупності бази',
    profitLabel: 'Прогнозований прибуток за рік'
  },
  {
    payback: '26 місяців',
    profit: '6 258 000 грн',
    revenue: '9 198 000 грн',
    costs: '2 940 000 грн',
    price: '13 500 000 грн',
    rentalPrice: '6 000 грн',
    titlePrefix: 'РЕЗИДЕНЦІЯ',
    preserveTitleCase: true,
    showEconomy: false,
    revenueLabel: 'Прогнозована виручка за рік:',
    revenueNote: 'Сценарій: 60% завантаженості',
    costsLabel: 'Прогнозовані витрати за рік:',
    costsNote: 'Що входить у витрати →',
    rentalLabel: 'Середня ціна оренди будинку / доба:',
    paybackLabel: 'Прогнозований термін окупності бази',
    profitLabel: 'Прогнозований прибуток за рік'
  },
  {
    payback: '25 місяців',
    profit: '9 070 000 грн',
    revenue: '13 140 000 грн',
    costs: '4 070 000 грн',
    price: '18 900 000 грн',
    rentalPrice: '6 000 грн',
    titlePrefix: 'РЕЗОРТ',
    preserveTitleCase: true,
    showEconomy: false,
    revenueLabel: 'Прогнозована виручка за рік:',
    revenueNote: 'Сценарій: 60% завантаженості',
    costsLabel: 'Прогнозовані витрати за рік:',
    costsNote: 'Що входить у витрати →',
    rentalLabel: 'Середня ціна оренди будинку / доба:',
    paybackLabel: 'Прогнозований термін окупності бази',
    profitLabel: 'Прогнозований прибуток за рік'
  }
];

export const faqItems = [
  ['Чи можна побудувати базу відпочинку в будь-якій локації?', 'Так, але спочатку потрібно перевірити ділянку: під’їзд, електрику, воду, каналізацію, рельєф та обмеження. Ми допомагаємо оцінити локацію до старту проєкту.'],
  ['Що входить у вартість запуску бази відпочинку?', 'Виробництво та монтаж будинків, фундамент, комунікації, фінансова модель, базовий маркетинг і супровід запуску. Склад комплектації фіксуємо в кошторисі.'],
  ['Скільки часу займає запуск?', 'У середньому близько п’яти місяців від затвердження рішення та кошторису до підготовки об’єкта до прийому перших гостей.'],
  ['Боюся, що після відкриття бази у мене не буде відвідувачів', 'Обираючи нас як підрядника, ви можете не турбуватися про те, що не зможете заповнити свою базу гостями.\n\n1) Наші будинки ідеально вписуються в будь-який ландшафт і приваблюють відвідувачів своїм зовнішнім виглядом. Вони відповідають усім критеріям місткості та зручності для розміщення гостей як на вихідні, так і на триваліший термін.\n\n2) Ми налаштуємо для вас рекламу, яка вже в перший місяць приведе щонайменше 50% завантаження вашої бази. Маємо багаторічну експертизу в маркетингу та знаємо, як налаштувати під вас агрегатори, зокрема Avito, «Яндекс», запустити сайт і зробити потужне SEO. Рекламні послуги оплачуються окремо та розраховуються відповідно до цілей завантаження і масштабу вашої бази.'],
  ['Що робити, якщо терміни будівництва бази затягнуться і я не отримаю вчасно готовий об’єкт?', 'У нас ретельно налагоджені всі процеси — від виробництва будинків до земельних робіт і запуску бази. Етапи будівництва ми прописуємо в договорі та несемо неустойку за кожен прострочений день з нашої вини.'],
  ['Що буде, якщо після запуску бази у мене виникнуть технічні несправності з будинками?', 'Перший рік за договором ми несемо повну відповідальність за всі виконані роботи та виправляємо всі недоліки й поломки, які будуть виявлені під час експлуатації. Після першого року роботи бази за потреби та за додаткову плату ви можете викликати нашого сервісного інженера, який оперативно вирішить будь-які ваші проблеми.']
] as const;
