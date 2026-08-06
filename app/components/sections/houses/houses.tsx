import Image from 'next/image';
import styles from './houses.module.css';
import { assets } from '../../velum-page-data';
import { LeadForm } from '../../ui/lead-form/lead-form';

const houseCards = [
  {
    image: assets.houses[0],
    area: '44 м²',
    name: 'Модульний будинок «Velum 43»',
    bedrooms: '1',
    capacity: '4 чел.',
    price: 'від 2 030 000 ₴'
  },
  {
    image: assets.houses[1],
    area: '53 м²',
    name: 'Модульний будинок «Velum Next 31»',
    bedrooms: '1–2',
    capacity: '4–6 чел.',
    price: 'від 2 308 400 ₴'
  },
  {
    image: assets.houses[2],
    area: '74 м²',
    name: 'Модульний будинок «Velum 26»',
    bedrooms: '2',
    capacity: '6 чел.',
    price: 'від 2 030 000 ₴'
  },
  {
    image: assets.houses[3],
    area: '88 м²',
    name: 'Модульний будинок «Velum 65»',
    bedrooms: '2–3',
    capacity: '6–8 чел.',
    price: 'від 3 480 000 ₴'
  }
] as const;

export function Houses() {
  return (
    <section className={styles.housesSection} id="houses">
      <div className={styles.centerHeading}>
        <span className={styles.yellowLabel}>Модульні будинки</span>
        <h2>Не знайшли відповідне готове рішення?<br />Побудуємо базу за вашим сценарієм</h2>
      </div>
      <div className={styles.houseGrid}>
        {houseCards.map((house) => (
          <article key={house.name}>
            <div className={styles.housePicture}>
              <Image src={house.image} alt={house.name} fill sizes="(max-width: 639px) 100vw, (max-width: 959px) 50vw, 25vw" />
              <span>{house.area}</span>
            </div>
            <div className={styles.houseDetails}>
              <h3>{house.name}</h3>
              <div className={styles.houseFeatures}>
                <p><span>Спальні</span><strong>{house.bedrooms}</strong></p>
                <p><span>Місткість</span><strong>{house.capacity}</strong></p>
              </div>
              <div className={styles.houseFooter}>
                <b>{house.price}</b>
                <a className={styles.cardLink} href="#contacts">Докладніше</a>
              </div>
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
