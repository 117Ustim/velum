'use client';

import { FormEvent, useState } from 'react';
import styles from './lead-form.module.css';
import { RevealOnEnter } from '../reveal-on-enter/reveal-on-enter';

type LeadFormProps = {
  compact?: boolean;
  onSent?: () => void;
  showConsent?: boolean;
  variant?: 'default' | 'land';
  accentButton?: boolean;
};

export function LeadForm({ compact = false, onSent, showConsent = true, variant = 'default', accentButton = false }: LeadFormProps) {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [hasLand, setHasLand] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    
    val = val.replace(/[^а-яА-ЯіІєЄїЇґҐёЁ\s-]/g, '');

    if (val.length > 0) {
      val = val.charAt(0).toUpperCase() + val.slice(1);
    }
    
    setName(val);
  };

  const handleNameBlur = () => {
    setName(prev => prev.trim());
  };

  const handlePhoneFocus = () => {
    if (!phone) {
      setPhone('+38');
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    
    if (!val.startsWith('+38')) {
      if (val.length < 3) {
        val = '+38';
      } else {
        val = '+38' + val.replace(/^\+?3?8?/, '');
      }
    }
    
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
    <form className={`${styles.leadForm} ${compact ? styles.compactForm : ''} ${variant === 'land' ? styles.landForm : ''} ${accentButton ? styles.accentButtonForm : ''}`} onSubmit={submit}>
      <div className={styles.fieldGroup}>
        <label className={styles.fieldLabel} htmlFor="lead-name">Ім’я</label>
        <input id="lead-name" name="name" value={name} onChange={handleNameChange} onBlur={handleNameBlur} placeholder="Ваше ім’я" required />
      </div>
      <div className={styles.fieldGroup}>
        <label className={styles.fieldLabel} htmlFor="lead-phone">Телефон</label>
        <input id="lead-phone" name="phone" type="tel" value={phone} onFocus={handlePhoneFocus} onChange={handlePhoneChange} placeholder="+38 (___) ___-__-__" required />
      </div>
      {variant === 'land' && (
        <>
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel} htmlFor="lead-location">Населений пункт / область</label>
            <input id="lead-location" name="location" value={location} onChange={event => setLocation(event.target.value)} placeholder="Наприклад, Київська область" required />
          </div>
          <fieldset className={styles.landChoice}>
            <legend className={styles.fieldLabel}>Чи є у вас земельна ділянка?</legend>
            <div className={styles.choiceGrid}>
              <label className={hasLand === 'Так' ? styles.choiceActive : styles.choice}>
                <input type="radio" name="hasLand" value="Так" checked={hasLand === 'Так'} onChange={event => setHasLand(event.target.value)} required />
                <span>Так</span>
              </label>
              <label className={hasLand === 'Ні' ? styles.choiceActive : styles.choice}>
                <input type="radio" name="hasLand" value="Ні" checked={hasLand === 'Ні'} onChange={event => setHasLand(event.target.value)} required />
                <span>Ні</span>
              </label>
            </div>
          </fieldset>
          <div className={styles.formColumns}>
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel} htmlFor="lead-area">Площа ділянки</label>
              <input id="lead-area" name="area" placeholder="Наприклад, 1,5 га" required />
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel} htmlFor="lead-budget">Орієнтовний бюджет</label>
              <input id="lead-budget" name="budget" placeholder="Наприклад, 5 млн ₴" required />
            </div>
          </div>
        </>
      )}
      {showConsent && (
        <label className={styles.consent}>
          <input type="checkbox" required />
          <span>Я погоджуюся з політикою конфіденційності</span>
        </label>
      )}
      <RevealOnEnter>
        <button className={`${styles.submitButton} ${compact ? styles.compactSubmitButton : ''} ${variant === 'land' ? styles.landSubmitButton : ''} ${variant === 'default' ? styles.defaultSubmitButton : ''}`} type="submit">{variant === 'land' ? 'Отримати розрахунок' : compact ? 'Залишити заявку' : 'Отримати консультацію'}</button>
      </RevealOnEnter>
    </form>
  );
}
