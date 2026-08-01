const assetRoot = '/assets/velum';

export const assets = {
  logo: '/logo.svg',
  hero: `${assetRoot}/hero/hero.jpg`,
  process: [
    `${assetRoot}/process/step-1-finmodel.png`,
    `${assetRoot}/process/step-2-construction.png`,
    `${assetRoot}/process/step-3-production.png`,
    `${assetRoot}/process/step-4-communications.png`,
    `${assetRoot}/process/step-5-support.png`,
    `${assetRoot}/process/step-6-growth.png`
  ],
  models: [
    `${assetRoot}/models/hutir/photo.png`,
    `${assetRoot}/models/sadiba/photo.png`,
    `${assetRoot}/models/majetok/photo.jpg`,
    `${assetRoot}/models/pomistya/photo.png`,
    `${assetRoot}/models/ugiddya/photo.png`,
    `${assetRoot}/models/otchina/photo.png`,
    `${assetRoot}/models/rezidentsiya/photo.jpg`,
    `${assetRoot}/models/volodinnya/photo.png`,
    `${assetRoot}/models/derzhava/photo.jpeg`,
    `${assetRoot}/models/grand/photo.jpeg`,
    `${assetRoot}/models/flagman/photo.png`
  ],
  houses: [
    `${assetRoot}/houses/hutir-43/photo.jpg`,
    `${assetRoot}/houses/sadiba-31/photo.png`,
    `${assetRoot}/houses/hutir-26/photo.jpg`,
    `${assetRoot}/houses/majetok-43/photo.png`,
    `${assetRoot}/houses/ugiddya-10/photo.webp`,
    `${assetRoot}/houses/otchina-88/photo.png`
  ],
  ecoPark: `${assetRoot}/cases/eco-park/main.jpeg`,
  ecoGallery: [
    `${assetRoot}/cases/eco-park/gallery-1.jpg`,
    `${assetRoot}/cases/eco-park/gallery-2.jpg`,
    `${assetRoot}/cases/eco-park/gallery-3.jpg`
  ]
};

export const navigation = [
  ['Головна', 'top'],
  ['Готові рішення', 'about'],
  ['Етапи роботи', 'process'],
  ['Готові рішення', 'models'],
] as const;

export const processSteps = [
  ['1 етап', 'Фінансова модель бази відпочинку', 'Рахуємо дохідність, бюджет і строк окупності проєкту.', 0],
  ['2 етап', 'Розробка генплану бази', 'Продумуємо ділянку, розміщення будинків та інфраструктуру.', 1],
  ['3 етап', 'Виробництво та монтаж будинків', 'Виготовляємо модульні будинки та встановлюємо їх на ділянці.', 2],
  ['4 етап', 'Підготовка землі та комунікацій', 'Фундамент, електрика, вода, каналізація та благоустрій.', 3],
  ['5 етап', 'Запуск і перші продажі', 'Налаштовуємо базовий маркетинг і допомагаємо залучити перших гостей.', 4],
  ['Сервіс', 'Сервісна підтримка', 'Залишаємося на зв’язку після запуску та супроводжуємо проєкт.', 5]
] as const;

export const modelNames = ['Хутір', 'Садиба', 'Маєток', 'Помістя', 'Угіддя', 'Отчина', 'Резиденція', 'Володіння', 'Держава', 'Гранд', 'Флагман'] as const;
export const modelCounts = [3, 6, 9, 12, 15, 18, 21, 15, 9, 15, 20] as const;

export const modelRows = [
  ['34 міс.', '4 587 745 ₽', '7 546 500 ₽', '2 958 755 ₽', '12 835 000 ₽'],
  ['28 міс.', '11 325 355 ₽', '15 673 500 ₽', '4 348 145 ₽', '26 780 000 ₽'],
  ['29 міс.', '18 164 789 ₽', '24 555 150 ₽', '6 390 360 ₽', '43 607 903 ₽'],
  ['37 міс.', '22 100 440 ₽', '32 508 000 ₽', '10 407 560 ₽', '55 833 800 ₽'],
  ['35 міс.', '25 838 590 ₽', '38 313 000 ₽', '12 474 410 ₽', '75 895 700 ₽'],
  ['33 міс.', '32 164 308 ₽', '45 975 600 ₽', '13 811 292 ₽', '87 601 000 ₽'],
  ['32 міс.', '36 874 215 ₽', '52 825 500 ₽', '15 951 285 ₽', '99 908 400 ₽'],
  ['29 міс.', '17 200 750 ₽', '29 025 000 ₽', '11 824 250 ₽', '42 979 400 ₽'],
  ['30 міс.', '22 051 817 ₽', '28 734 750 ₽', '6 682 932 ₽', '55 715 903 ₽'],
  ['36 міс.', '34 746 362 ₽', '47 891 250 ₽', '13 144 887 ₽', '104 484 500 ₽'],
  ['34 міс.', '47 325 150 ₽', '63 855 000 ₽', '16 529 850 ₽', '134 800 000 ₽']
] as const;

export const faqItems = [
  ['Чи можна побудувати базу відпочинку в будь-якій локації?', 'Так, але спочатку потрібно перевірити ділянку: під’їзд, електрику, воду, каналізацію, рельєф та обмеження. Ми допомагаємо оцінити локацію до старту проєкту.'],
  ['Що входить у вартість запуску бази відпочинку?', 'Виробництво та монтаж будинків, фундамент, комунікації, фінансова модель, базовий маркетинг і супровід запуску. Склад комплектації фіксуємо в кошторисі.'],
  ['Що буде, якщо власної суми недостатньо?', 'Розглянемо кредитні кошти, лізинг та інші варіанти фінансування, щоб підібрати навантаження під економіку майбутнього бізнесу.'],
  ['Скільки часу займає запуск?', 'У середньому близько п’яти місяців від затвердження рішення та кошторису до підготовки об’єкта до прийому перших гостей.']
] as const;
