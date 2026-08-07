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
    capacity: '4 особи',
    price: 'від 2 030 000 ₴'
  },
  {
    image: assets.houses[1],
    area: '53 м²',
    name: 'Модульний будинок «Velum Next 31»',
    bedrooms: '1–2',
    capacity: '4–6 осіб',
    price: 'від 2 308 400 ₴'
  },
  {
    image: assets.houses[2],
    area: '74 м²',
    name: 'Модульний будинок «Velum 26»',
    bedrooms: '2',
    capacity: '6 осіб',
    price: 'від 2 030 000 ₴'
  },
  {
    image: assets.houses[3],
    area: '88 м²',
    name: 'Модульний будинок «Velum 65»',
    bedrooms: '2–3',
    capacity: '6–8 осіб',
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
          <article className={styles.houseCard} key={house.name}>
            <div className={styles.houseMedia}>
              <div className={styles.houseRail} aria-hidden="true">
                <span>VELUM</span>
                <i className={styles.railAccent} />
                <small>PROJECT</small>
              </div>
              <div className={styles.housePicture}>
                <Image src={house.image} alt={house.name} fill sizes="(max-width: 639px) 100vw, (max-width: 959px) 50vw, 25vw" />
                <span>{house.area}</span>
              </div>
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
        <div className={styles.consultContent}>
          <span className={styles.consultKicker}>Індивідуальний проєкт</span>
          <h3>Зберемо базу відпочинку під вашу локацію</h3>
          <p>Підкажемо, який формат будинків, бюджет і сценарій запуску найкраще підійдуть саме для вашої ділянки.</p>
        </div>
        <div className={styles.consultForm}>
          <span className={styles.formHint}>Отримайте перший розрахунок</span>
          <LeadForm compact accentButton />
        </div>
      </div>
    </section>
  );
}
