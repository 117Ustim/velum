import Image from 'next/image';
import styles from './houses.module.css';
import { assets } from '../../velum-page-data';
import { LeadForm } from '../../ui/lead-form/lead-form';

export function Houses() {
  return (
    <section className={styles.housesSection} id="houses">
      <div className={styles.centerHeading}>
        <span className={styles.yellowLabel}>Модульні будинки</span>
        <h2>Не знайшли відповідне готове рішення?<br />Побудуємо базу за вашим сценарієм</h2>
      </div>
      <div className={styles.houseGrid}>
        {assets.houses.map((image, index) => (
          <article key={image}>
            <div className={styles.housePicture}>
              <Image src={image} alt={`Модульний будинок Velum ${index + 1}`} fill sizes="(max-width: 760px) 50vw, 33vw" />
              <span>V</span>
            </div>
            <h3>Модульний будинок «Velum {index === 0 ? '26' : index === 1 ? 'Next 31' : index === 2 ? '43' : index === 3 ? '65' : index === 4 ? '103' : 'Мікро'}»</h3>
            <p>Готове планування для бази відпочинку</p>
            <div>
              <b>від {index % 2 ? '3 980 000' : '3 500 000'} ₽</b>
              <a className={styles.cardLink} href="#contacts">Докладніше</a>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.consultPanel}>
        <div>
          <h3>Консультація з індивідуального проєкту бази відпочинку</h3>
          <p>Розкажемо, як адаптувати проєкт під вашу локацію та бюджет.</p>
        </div>
        <LeadForm compact />
      </div>
    </section>
  );
}
