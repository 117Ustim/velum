'use client';

import { useState } from 'react';
import styles from './interactive-page.module.css';
import { Header } from './layout/header/header';
import { Ticker } from './layout/ticker/ticker';
import { About } from './sections/about/about';
import { Cases } from './sections/cases/cases';
import { Faq } from './sections/faq/faq';
import { Footer } from './sections/footer/footer';
import { FloatingButtons } from './sections/floating-buttons/floating-buttons';
import { Finance } from './sections/finance/finance';
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
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  function jumpTo(id: string) {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

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
      <Finance />
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
