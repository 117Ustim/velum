'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './cases.module.css';
import { assets } from '../../velum-page-data';

export function Cases() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Кейс 1', 'Кейс 2', 'Кейс 3', 'Кейс 4', 'Кейс 5', 'Кейс 6', 'Кейс 7'];

  return (
    <section className={styles.casesSection} id="cases">
      <div className={styles.centerHeading}>
        <span className={styles.yellowLabel}>Наші кейси</span>
        <h2>Ми збудували вже<br /><strong>понад 20 баз відпочинку</strong></h2>
        <p>Підбираємо економіку та інфраструктуру під ваш проєкт.</p>
      </div>
      <div className={styles.caseTabs}>
        {tabs.map((tab, index) => (
          <button
            key={tab}
            type="button"
            className={index === activeTab ? styles.activeCase : undefined}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={styles.caseHero}>
        <Image src={assets.ecoPark} alt="Еко парк Вереск" fill sizes="100vw" />
        <div className={styles.caseShade} />
        <div className={styles.caseOverlay}>
          <h2>Еко парк Вереск</h2>
          <div className={styles.caseStats}>
            <article className={styles.projectCard}>
              <span className={styles.cardTitle}>О проекте</span>
              <ul>
                <li>Сумма инвестиций: 69 524 000 ₽</li>
                <li>Адрес: ЛО, пос. Ильичево</li>
              </ul>
              <a href="#contacts">Сайт базы отдыха</a>
            </article>
            <article className={styles.reviewCard}>
              <span className={styles.cardStars}>★★★★★</span>
              <p>«Останавливался в таком доме. Из модульных которые видел, наверное самый классный. Самый кайф это высокие стены, что делает пространство ощутимо больше»</p>
              <div>
                <strong>Виталий</strong>
                <span>Гость эко-парка</span>
              </div>
            </article>
            <article className={styles.timeCard}>
              <strong>5 месяцев</strong>
              <p>Срок строительства</p>
            </article>
          </div>
        </div>
      </div>
      <h3 className={styles.galleryTitle}>Фотографии Эко парка</h3>
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
