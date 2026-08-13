'use client';

import { useEffect, useState } from 'react';
import styles from './interactive-page.module.css';
import { Header } from './layout/header/header';
import { Ticker } from './layout/ticker/ticker';
import { About } from './sections/about/about';
import { Cases } from './sections/cases/cases';
import { Faq } from './sections/faq/faq';
import { Footer } from './sections/footer/footer';
import { FloatingButtons } from './sections/floating-buttons/floating-buttons';
import { Hero } from './sections/hero/hero';
import { Houses } from './sections/houses/houses';
import { Models } from './sections/models/models';
import { Process } from './sections/process/process';
import { Visit } from './sections/visit/visit';
import { Location } from './sections/location/location';
import { ModalContact } from './sections/modal-contact/modal-contact';

export default function InteractivePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!window.location.hash) {
      return;
    }

    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section'));

    if (!sections.length) {
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    sections.forEach((section, index) => {
      section.dataset.pageMotion = reducedMotion || index === 0 ? 'visible' : 'hidden';
    });

    if (reducedMotion || !('IntersectionObserver' in window)) {
      sections.forEach((section) => {
        section.dataset.pageMotion = 'visible';
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.setAttribute('data-page-motion', entry.isIntersecting ? 'visible' : 'hidden');
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.page}>
      <Header
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen(!menuOpen)}
        onOpenModal={() => setModalOpen(true)}
      />
      <Ticker />
      <Hero />
      <About />
      <Process />
      <Models />
      <Houses />
      <Cases />
      <Faq />
      <Visit />
      <Location />
      <Footer />
      <FloatingButtons onOpenModal={() => setModalOpen(true)} />
      {modalOpen && <ModalContact onClose={() => setModalOpen(false)} />}
    </main>
  );
}
