import styles from './modal-contact.module.css';
import { LeadForm } from '../../ui/lead-form/lead-form';

export function ModalContact({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose}>×</button>
        <span className={styles.yellowLabel}>VELUM ДЛЯ БІЗНЕСУ</span>
        <h2>Отримайте розрахунок бази відпочинку</h2>
        <p>Розкажіть про завдання — підготуємо наступний крок і відповімо на запитання.</p>
        <LeadForm onSent={onClose} source="Модальне вікно консультації" />
      </div>
    </div>
  );
}
