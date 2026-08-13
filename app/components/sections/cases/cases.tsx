'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './cases.module.css';
import { assets } from '../../velum-page-data';

type CaseProject = {
  tab: string;
  title: string;
  image: string;
  alt: string;
  link?: string;
  linkLabel?: string;
};

const caseProjects: CaseProject[] = [
  {
    tab: 'Кейс 1',
    title: 'Tysha Cottages',
    image: assets.tyshaCottages,
    alt: 'Tysha Cottages',
    link: 'https://www.instagram.com/tysha.cottages/',
    linkLabel: 'Перейти в Instagram'
  },
  {
    tab: 'Кейс 2',
    title: 'Chudodievo',
    image: assets.chudodievo,
    alt: 'Chudodievo',
    link: 'https://chudodievo.com/',
    linkLabel: 'Перейти на сайт'
  },
  {
    tab: 'Кейс 3',
    title: 'Ostriv Camp',
    image: assets.ostrivCamp,
    alt: 'Ostriv Camp',
    link: 'https://ostriv.camp/',
    linkLabel: 'Перейти на сайт'
  },
  {
    tab: 'Кейс 4',
    title: 'Spokiy',
    image: assets.spokiy,
    alt: 'Spokiy',
    link: 'https://www.instagram.com/spokiy.ck/',
    linkLabel: 'Перейти в Instagram'
  }
];

export function Cases() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCase = caseProjects[activeTab];
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(assets.ecoGallery.length);
  const [isGalleryPaused, setIsGalleryPaused] = useState(false);
  const [isGalleryTransitionEnabled, setIsGalleryTransitionEnabled] = useState(true);
  const [isMobileGallery, setIsMobileGallery] = useState(false);
  const galleryImages = [...assets.ecoGallery, ...assets.ecoGallery, ...assets.ecoGallery];

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 639px)');
    const updateGalleryLayout = () => setIsMobileGallery(mediaQuery.matches);

    updateGalleryLayout();
    mediaQuery.addEventListener('change', updateGalleryLayout);

    return () => mediaQuery.removeEventListener('change', updateGalleryLayout);
  }, []);

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
        <h2>Ми побудували<br /><strong>декілька баз відпочинку</strong></h2>
        <p>Пропонуємо ознайомитися з деякими із них</p>
      </div>
      <div className={styles.caseTabs}>
        {caseProjects.map((project, index) => (
          <button
            key={project.tab}
            type="button"
            className={index === activeTab ? styles.activeCase : undefined}
            onClick={() => setActiveTab(index)}
          >
            {project.tab}
          </button>
        ))}
      </div>
      <div className={styles.caseHero}>
        <Image src={assets.ecoPark} alt="Еко парк Вереск" fill sizes="100vw" />
        <div className={styles.caseShade} />
        <div className={styles.caseOverlay}>
          <h2>{activeCase.title}</h2>
          <div className={styles.caseStats}>
            <article className={styles.caseCard} key={activeCase.tab}>
              <div className={styles.caseCardImage}>
                <Image src={activeCase.image} alt={activeCase.alt} fill sizes="(max-width: 639px) 100vw, 900px" />
              </div>
              <h3>{activeCase.title}</h3>
              <a
                className={styles.caseCardLink}
                href={activeCase.link ?? '#contacts'}
                target={activeCase.link ? '_blank' : undefined}
                rel={activeCase.link ? 'noreferrer' : undefined}
              >
                {activeCase.linkLabel ?? 'Обговорити проєкт'}
              </a>
            </article>
          </div>
        </div>
      </div>
      <h3 className={styles.galleryTitle}>Фотогалерея</h3>
      <div
        className={styles.galleryCarousel}
        onMouseEnter={() => setIsGalleryPaused(true)}
        onMouseLeave={() => setIsGalleryPaused(false)}
        onFocus={() => setIsGalleryPaused(true)}
        onBlur={() => setIsGalleryPaused(false)}
      >
        <div
          className={isGalleryTransitionEnabled ? styles.galleryTrack : styles.galleryTrackNoTransition}
          style={{ transform: `translateX(-${activeGalleryIndex * (isMobileGallery ? 100 : 50)}%)` }}
          onTransitionEnd={resetGalleryLoop}
        >
          {galleryImages.map((image, index) => (
            <div className={styles.gallerySlide} key={`${image}-${index}`}>
              <div className={styles.galleryImageFrame}>
                <Image src={image} alt={`Еко парк Вереск, фото ${index % assets.ecoGallery.length + 1}`} fill sizes={isMobileGallery ? '100vw' : '50vw'} loading="eager" unoptimized />
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
