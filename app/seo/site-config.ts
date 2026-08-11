const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

// Домен по умолчанию совпадает с доменом корпоративной почты проекта.
export const siteUrl = new URL(configuredSiteUrl || 'https://zavod-modul.com.ua');
export const siteUrlString = siteUrl.toString().replace(/\/$/, '');

export const siteName = 'Velum';
export const siteDescription =
  'Будівництво бази відпочинку під ключ: модульні будинки, комунікації, фінансова модель, запуск і перші гості.';
