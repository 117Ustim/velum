import Image from 'next/image';
import styles from './cases.module.css';
import { assets } from '../../velum-page-data';

export function Cases() {
  return (
    <section className={styles.casesSection} id="cases">
      <div className={styles.centerHeading}>
        <span className={styles.yellowLabel}>Наші кейси</span>
        <h2>Ми збудували вже<br /><strong>понад 20 баз відпочинку</strong></h2>
        <p>Підбираємо економіку та інфраструктуру під ваш проєкт.</p>
      </div>
      <div className={styles.caseTabs}>
        <span className={styles.activeCase}>Кейс 1</span>
        <span>Кейс 2</span>
        <span>Кейс 3</span>
        <span>Кейс 4</span>
        <span>Кейс 5</span>
        <span>Кейс 6</span>
      </div>
      <div className={styles.caseHero}>
        <Image src={assets.ecoPark} alt="Еко парк Вереск" fill sizes="100vw" />
        <div className={styles.caseOverlay}>
          <h2>Еко парк Вереск</h2>
          <div className={styles.caseStats}>
            <div><b>Проєкт</b><span>Сума інвестицій 54 000 000 ₽</span><a href="#contacts">Дивитися кейс</a></div>
            <div><b>★★★★★</b><span>Завантаження бази та відгуки гостей</span><strong>Високий попит</strong></div>
            <div className={styles.yellowStat}><b>13 будинків</b><span>Збудовано для бази</span><strong>Моделі Velum</strong></div>
            <div><b>5 місяців</b><span>Строк будівництва</span></div>
          </div>
        </div>
      </div>
      <h3 className={styles.galleryTitle}>Фотографії Еко парку</h3>
      <div className={styles.ecoGallery}>
        {assets.ecoGallery.map((image) => (
          <div key={image}>
            <Image src={image} alt="Еко парк Вереск" fill sizes="(max-width: 760px) 100vw, 33vw" />
          </div>
        ))}
      </div>
      <h3 className={styles.galleryTitle}>Відеоогляд Еко парку</h3>
      <div className={styles.videoPlaceholder}>Відеоогляд проєкту</div>
    </section>
  );
}
