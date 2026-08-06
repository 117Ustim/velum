'use client';

import { FormEvent, useState } from 'react';
import styles from './lead-form.module.css';

export function LeadForm({ compact = false, onSent }: { compact?: boolean; onSent?: () => void }) {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    
    // Only allow Cyrillic letters, spaces, and hyphens (remove numbers and Latin characters)
    val = val.replace(/[^а-яА-ЯіІєЄїЇґҐёЁ\s-]/g, '');
    
    // Capitalize first letter
    if (val.length > 0) {
      val = val.charAt(0).toUpperCase() + val.slice(1);
    }
    
    setName(val);
  };

  const handleNameBlur = () => {
    // Trim leading/trailing spaces when leaving input
    setName(prev => prev.trim());
  };

  const handlePhoneFocus = () => {
    // Auto insert +38 prefix on focus if empty
    if (!phone) {
      setPhone('+38');
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    
    // Prevent removing the +38 prefix
    if (!val.startsWith('+38')) {
      if (val.length < 3) {
        val = '+38';
      } else {
        val = '+38' + val.replace(/^\+?3?8?/, '');
      }
    }
    
    // Only allow digits, spaces, parentheses and hyphens after the prefix
    const prefix = '+38';
    const rest = val.slice(3).replace(/[^\d\s()-]/g, '');
    setPhone(prefix + rest);
  };

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
      <input 
        name="name" 
        value={name}
        onChange={handleNameChange}
        onBlur={handleNameBlur}
        placeholder="Ваше ім’я" 
        required 
      />
      <input 
        name="phone" 
        type="tel" 
        value={phone}
        onFocus={handlePhoneFocus}
        onChange={handlePhoneChange}
        placeholder="+38 (___) ___-__-__" 
        required 
      />
      <label>
        <input type="checkbox" required />
        <span>Я погоджуюся з політикою конфіденційності</span>
      </label>
      <button className={styles.submitButton} type="submit">{compact ? 'Залишити заявку' : 'Отримати консультацію'}</button>
    </form>
  );
}
