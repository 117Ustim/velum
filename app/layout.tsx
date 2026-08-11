import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Завод модульних будинків| Velum',
  description:
    'Будівництво бази відпочинку під ключ: модульні будинки, комунікації, фінансова модель, запуск і перші гості.',
  keywords: [
    'база відпочинку під ключ',
    'будівництво бази відпочинку',
    'будинки для бази відпочинку',
    'готовий бізнес під ключ'
  ],
  openGraph: {
    title: 'Завод модульних будинків',
    description: 'Готове бізнес-рішення від Velum із зрозумілою економікою проєкту.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/icon.png'
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
