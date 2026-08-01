import styles from './floating-buttons.module.css';

export function FloatingButtons({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div className={styles.floatButtons}>
      <a href="tel:+74996771622">☎</a>
      <button onClick={onOpenModal}>✦</button>
    </div>
  );
}

