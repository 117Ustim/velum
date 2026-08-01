'use client';

import { FormEvent, useState } from 'react';
import styles from './lead-form.module.css';

export function LeadForm({ compact = false, onSent }: { compact?: boolean; onSent?: () => void }) {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    onSent?.();
  }

  if (sent) {
    return <p className={styles.formSuccess}>Дякуємо! Заявку надіслано, менеджер зв’яжеться з вами.</p>;
  }

  return (
    <form className={`${styles.leadForm} ${compact ? styles.compactForm : ''}`} onSubmit={submit}>
      <input name="name" placeholder="Ваше ім’я" required />
      <input name="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
      <label>
        <input type="checkbox" required />
        <span>Я погоджуюся з політикою конфіденційності</span>
      </label>
      <button className={styles.submitButton} type="submit">{compact ? 'Залишити заявку' : 'Отримати консультацію'}</button>
    </form>
  );
}
