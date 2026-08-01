import styles from './visit.module.css';
import { LeadForm } from '../../ui/lead-form/lead-form';

export function Visit() {
  return (
    <section className={styles.visitSection} id="contacts">
      <div className={styles.visitVideo}>Відео</div>
      <div className={styles.visitCopy}>
        <span className={styles.yellowLabel}>Екскурсія</span>
        <h2>Записатися на огляд виставкових будинків</h2>
        <p>Під час екскурсії ви зможете оцінити якість будинків і поставити запитання менеджеру проєкту.</p>
        <span>Адреса: Санкт-Петербург, Лісна вулиця, 25А</span>
        <LeadForm compact />
      </div>
    </section>
  );
}

