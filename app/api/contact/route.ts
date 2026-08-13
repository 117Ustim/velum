import { NextResponse } from 'next/server';

const recipient = process.env.CONTACT_EMAIL ?? 'info@zavod-modul.com.ua';

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;

  if (!apiKey || !from) {
    return NextResponse.json(
      { message: 'Поштовий сервіс ще не налаштований на сервері.' },
      { status: 503 }
    );
  }

  const body = await request.json() as Record<string, unknown>;
  const name = String(body.name ?? '').trim();
  const phone = String(body.phone ?? '').trim();

  if (!name || !phone) {
    return NextResponse.json({ message: 'Заповніть ім’я та телефон.' }, { status: 400 });
  }

  const fields = [
    ['Ім’я', name],
    ['Телефон', phone],
    ['Джерело заявки', String(body.source ?? '').trim()],
    ['Населений пункт / область', String(body.location ?? '').trim()],
    ['Чи є земельна ділянка', String(body.hasLand ?? '').trim()],
    ['Площа ділянки', String(body.area ?? '').trim()],
    ['Орієнтовний бюджет', String(body.budget ?? '').trim()]
  ].filter(([, value]) => value);

  const text = fields.map(([label, value]) => `${label}: ${value}`).join('\n');
  const html = fields.map(([label, value]) => `<p><strong>${escapeHtml(label)}</strong>: ${escapeHtml(String(value))}</p>`).join('');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from,
      to: [recipient],
      subject: `Нова заявка з сайту Velum — ${name}`,
      text,
      html
    })
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: 'Не вдалося надіслати заявку. Спробуйте ще раз.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
