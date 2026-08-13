'use client';

import Image from 'next/image';
import styles from './header.module.css';
import { navigation } from '../../velum-page-data';
import { AnimatedLogo } from '../../ui/animated-logo/animated-logo';

export function Header({
  menuOpen,
  onToggleMenu,
  onOpenModal
}: {
  menuOpen: boolean;
  onToggleMenu: () => void;
  onOpenModal: () => void;
}) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={styles.header}>
        <a className={styles.headerBrand} href="#top" onClick={(e) => handleNavClick(e, 'top')}>
          <AnimatedLogo className={styles.headerLogo} />
          <b>Завод модульних будинків</b>
        </a>
        <nav className={styles.mainNav} aria-label="Основна навігація">
          <span className={styles.navLabel} aria-hidden="true">
            <span className={styles.navLabelDot} />
          </span>
          {navigation.map(([label, id], index) => (
            <a
              key={`${id}-${index}`}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className={styles.headerActions}>
          <a className={styles.telegramLink} href="https://t.me/melnik_volodymyr" title="Telegram" aria-label="Telegram" target="_blank" rel="noreferrer">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="12" fill="url(#tgGrad)"/>
              <path d="M28.4 12.3c.5-.2 1 .2.8.7l-4.7 15.6c-.2.7-1 .9-1.5.5l-4.5-3.3-2.2 2.1c-.4.4-1.1.2-1.2-.4l-.8-5.3-4.5-1.5c-.7-.2-.7-1.2 0-1.4l18.6-7z" fill="white"/>
              <path d="M15.1 20.7l1.7 5.7.4-4-2.1-1.7z" fill="#c3e0fe"/>
              <path d="M28.4 12.3l-13.3 8.4 3.7 2.7 9.6-11.1z" fill="#edf5fe" opacity="0.9"/>
              <defs>
                <linearGradient id="tgGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#37bdf8"/>
                  <stop offset="1" stopColor="#1d9bf0"/>
                </linearGradient>
              </defs>
            </svg>
          </a>
          <a className={styles.viberLink} href="viber://chat?number=%2B380976655306" title="Viber" aria-label="Viber" target="_blank" rel="noreferrer">
            <Image
              className={`${styles.socialIcon} ${styles.viberIcon}`}
              src="/assets/velum/icons/viber-square.png?v=2"
              alt="Viber"
              width={46}
              height={46}
            />
          </a>
          <a className={styles.callbackButton} href="tel:+380976655306" title="Зателефонувати" aria-label="Зателефонувати">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="12" fill="url(#callGrad)"/>
              <g transform="translate(0, 2)">
                <path d="M25.5 28.5C22 28.5 17 25 14.5 22.5C12 20 8.5 15 8.5 11.5C8.5 9.2 10.2 7.5 12.1 7.5C12.8 7.5 13.5 7.9 13.8 8.6L15.7 12.8C16 13.5 15.8 14.3 15.2 14.8L13.8 16C15 18.5 17.5 21 20 22.2L21.2 20.8C21.7 20.2 22.5 20 23.2 20.3L27.4 22.2C28.1 22.5 28.5 23.2 28.5 23.9C28.5 25.8 26.8 28.5 25.5 28.5Z" fill="white"/>
                <path d="M21 12C22.8 12.4 24.1 13.7 24.5 15.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M22 8.5C25.5 9.2 28.3 12 29 15.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </g>
              <defs>
                <linearGradient id="callGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#34c759"/>
                  <stop offset="1" stopColor="#1e9638"/>
                </linearGradient>
              </defs>
            </svg>
          </a>
          <div className={styles.headerPhone}>
            <a href="tel:+380976655306">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.phoneIconInline}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>+380976655306</span>
            </a>
          </div>
        </div>
        <button
          className={styles.menuButton}
          onClick={onToggleMenu}
          aria-label="Меню"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </header>
      {menuOpen && (
        <nav className={styles.mobileNav} id="mobile-navigation" aria-label="Мобільна навігація">
          <div className={styles.mobileNavTop}>
            <span className={styles.mobileNavKicker}>
              <span className={styles.mobileNavDot} aria-hidden="true" />
              Меню
            </span>
            <span className={styles.mobileNavMeta}>VELUM</span>
          </div>
          <div className={styles.mobileNavList}>
            {navigation.map(([label, id], index) => (
              <a
                key={`${id}-${index}`}
                href={`#${id}`}
                onClick={(e) => {
                  onToggleMenu();
                  handleNavClick(e, id);
                }}
              >
                <span className={styles.mobileNavIndex}>{String(index + 1).padStart(2, '0')}</span>
                <span className={styles.mobileNavLabel}>{label}</span>
                <span className={styles.mobileNavRule} aria-hidden="true" />
              </a>
            ))}
          </div>
          <a className={styles.mobileNavCall} href="tel:+380976655306">
            <span className={styles.mobileNavCallLabel}>Зателефонувати нам</span>
            <span className={styles.mobileNavCallNumber}>+380 97 665 53 06</span>
          </a>
        </nav>
      )}
    </>
  );
}
