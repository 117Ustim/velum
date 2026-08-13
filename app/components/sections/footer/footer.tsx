import styles from './footer.module.css';
import Image from 'next/image';
import { AnimatedLogo } from '../../ui/animated-logo/animated-logo';

export function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.footerShell}>
        <div className={styles.footerTop}>
          <a className={styles.footerBrand} href="#top" aria-label="Velum — на головну">
            <AnimatedLogo className={styles.footerLogo} />
            <span>Завод модульних будинків</span>
          </a>
          <a className={styles.backToTop} href="#top" aria-label="Повернутися нагору">
            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 19V5" />
              <path d="m6 11 6-6 6 6" />
            </svg>
          </a>
        </div>

        <div className={styles.footerInfo}>
          <div className={styles.infoItem}>
            <span>Режим роботи</span>
            <strong>Пн–Пт з 10:00 до 18:00</strong>
          </div>
          <div className={styles.infoItem}>
            <span>Телефон</span>
            <a href="tel:+380976655306">0976655306</a>
          </div>
          <div className={`${styles.infoItem} ${styles.addressItem}`}>
            <span>Адреса</span>
            <strong>м. Львів, вул. Промислова, 60</strong>
          </div>
          <div className={styles.infoItem}>
            <span>Пошта для пропозицій</span>
            <a href="mailto:info@zavod-modul.com.ua">info@zavod-modul.com.ua</a>
          </div>
          <div className={styles.footerSocials}>
            <a className={styles.socialButton} href="https://t.me/melnik_volodymyr" target="_blank" rel="noreferrer" aria-label="Telegram">
              <svg width="23" height="23" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <rect width="40" height="40" rx="12" fill="#239BD7" />
                <path d="M28.4 12.3c.5-.2 1 .2.8.7l-4.7 15.6c-.2.7-1 .9-1.5.5l-4.5-3.3-2.2 2.1c-.4.4-1.1.2-1.2-.4l-.8-5.3-4.5-1.5c-.7-.2-.7-1.2 0-1.4l18.6-7z" fill="white" />
                <path d="M15.1 20.7l1.7 5.7.4-4-2.1-1.7z" fill="#c3e0fe" />
                <path d="M28.4 12.3l-13.3 8.4 3.7 2.7 9.6-11.1z" fill="#edf5fe" opacity=".9" />
              </svg>
            </a>
            <a className={styles.socialButton} href="viber://chat?number=%2B380976655306" aria-label="Viber">
              <Image src="/assets/velum/icons/viber-square.png?v=2" alt="" width={44} height={44} />
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>Політика конфіденційності</span>
          <span>Velum · Виробництво модульних будинків і запуск баз відпочинку</span>
        </div>
      </div>
    </footer>
  );
}
