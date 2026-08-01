import Image from 'next/image';
import styles from './footer.module.css';
import { assets } from '../../velum-page-data';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumns}>
        <div>
          <Image src={assets.logo} alt="Velum" width={125} height={56} />
          <p>© 2015–2026 Velum<br />ІПН 7804591042 ОГРН 1177847073535</p>
        </div>
        <div>
          <b>Velum у Москві</b>
          <p>+7 (499) 677-16-22<br />Щодня 10:00–18:00</p>
        </div>
        <div>
          <b>Velum у Санкт-Петербурзі</b>
          <p>+7 (812) 953-66-12<br />Щодня 10:00–20:00</p>
        </div>
        <div>
          <b>Корисне</b>
          <p>Будинки для баз відпочинку<br />Готові модульні будинки<br />Проєкти та відгуки</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span>Політика конфіденційності</span>
        <span>Виробництво модульних будинків і запуск баз відпочинку</span>
      </div>
    </footer>
  );
}

