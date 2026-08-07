'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './cases.module.css';
import { assets } from '../../velum-page-data';

export function Cases() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(assets.ecoGallery.length);
  const [isGalleryPaused, setIsGalleryPaused] = useState(false);
  const [isGalleryTransitionEnabled, setIsGalleryTransitionEnabled] = useState(true);
  const tabs = ['Кейс 1', 'Кейс 2', 'Кейс 3'];
  const galleryImages = [...assets.ecoGallery, ...assets.ecoGallery, ...assets.ecoGallery];

  useEffect(() => {
    if (isGalleryPaused) return;

    const interval = window.setInterval(() => {
      setActiveGalleryIndex((current) => current + 1);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [isGalleryPaused]);

  const showPreviousGalleryImage = () => {
    setActiveGalleryIndex((current) => current <= 0 ? assets.ecoGallery.length - 1 : current - 1);
  };

  const showNextGalleryImage = () => {
    setActiveGalleryIndex((current) => current + 1);
  };

  const resetGalleryLoop = () => {
    if (activeGalleryIndex < assets.ecoGallery.length * 2) return;

    setIsGalleryTransitionEnabled(false);
    setActiveGalleryIndex(activeGalleryIndex - assets.ecoGallery.length);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setIsGalleryTransitionEnabled(true));
    });
  };

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
              <span className={styles.cardEyebrow}>01 · Проєкт</span>
              <span className={styles.cardTitle}>Еко парк<br />Вереск</span>
              <p className={styles.cardIntro}>Заміський комплекс, створений як готове бізнес-рішення під ключ.</p>
              <div className={styles.projectMeta}>
                <div>
                  <span>Інвестиції</span>
                  <strong>69 524 000 ₴</strong>
                </div>
                <div>
                  <span>Локація</span>
                  <strong>Ільїчово, ЛО</strong>
                </div>
              </div>
              <div className={styles.projectTags}>
                <span>Під ключ</span>
                <span>3 будинки</span>
              </div>
              <a href="#contacts">Обговорити проєкт <span aria-hidden="true">→</span></a>
            </article>
            <article className={styles.reviewCard}>
              <span className={styles.cardEyebrow}>02 · Відгук гостя</span>
              <span className={styles.cardStars}>★★★★★</span>
              <p className={styles.reviewLead}>Враження гостя після першого візиту</p>
              <p>«Зупинявся в такому будинку. Із модульних, які бачив, мабуть, найкласніший. Найбільше сподобалися високі стелі — простір відчувається значно більшим».</p>
              <div className={styles.reviewFooter}>
                <div>
                  <strong>Віталій</strong>
                  <span>Гість еко-парку</span>
                </div>
                <span className={styles.reviewBadge}>Еко парк / гості</span>
              </div>
            </article>
            <article className={styles.timeCard}>
              <span className={styles.cardEyebrow}>03 · Реалізація</span>
              <strong>5 місяців</strong>
              <p>Від старту робіт до перших гостей</p>
              <div className={styles.timeline}>
                <span><i>01</i>Проєкт</span>
                <span><i>02</i>Виробництво</span>
                <span><i>03</i>Запуск</span>
              </div>
              <span className={styles.timeNote}>Під ключ · без зайвих затримок</span>
            </article>
          </div>
        </div>
      </div>
      <h3 className={styles.galleryTitle}>Фотографии Эко парка</h3>
      <div
        className={styles.galleryCarousel}
        onMouseEnter={() => setIsGalleryPaused(true)}
        onMouseLeave={() => setIsGalleryPaused(false)}
        onFocus={() => setIsGalleryPaused(true)}
        onBlur={() => setIsGalleryPaused(false)}
      >
        <div
          className={isGalleryTransitionEnabled ? styles.galleryTrack : styles.galleryTrackNoTransition}
          style={{ transform: `translateX(-${activeGalleryIndex * 50}%)` }}
          onTransitionEnd={resetGalleryLoop}
        >
          {galleryImages.map((image, index) => (
            <div className={styles.gallerySlide} key={`${image}-${index}`}>
              <div className={styles.galleryImageFrame}>
                <Image src={image} alt={`Еко парк Вереск, фото ${index % assets.ecoGallery.length + 1}`} fill sizes="50vw" loading="eager" unoptimized />
              </div>
            </div>
          ))}
        </div>
        <button className={`${styles.galleryButton} ${styles.galleryButtonPrevious}`} type="button" onClick={showPreviousGalleryImage} aria-label="Попереднє фото">
          ‹
        </button>
        <button className={`${styles.galleryButton} ${styles.galleryButtonNext}`} type="button" onClick={showNextGalleryImage} aria-label="Наступне фото">
          ›
        </button>
        <div className={styles.galleryDots} aria-label="Навігація по фото">
          {assets.ecoGallery.map((image, index) => (
            <button
              className={index === activeGalleryIndex % assets.ecoGallery.length ? styles.galleryDotActive : styles.galleryDot}
              key={image}
              type="button"
              onClick={() => setActiveGalleryIndex(index)}
              aria-label={`Показати фото ${index + 1}`}
              aria-current={index === activeGalleryIndex % assets.ecoGallery.length ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
