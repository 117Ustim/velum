import styles from './ticker.module.css';

export function Ticker() {
  const items = [
    'VELUM ДЛЯ БІЗНЕСУ: ГОТОВЕ БІЗНЕС-РІШЕННЯ «ПІД КЛЮЧ»',
    'VELUM ДЛЯ БІЗНЕСУ: ГОТОВЕ БІЗНЕС-РІШЕННЯ «ПІД КЛЮЧ»',
    'VELUM ДЛЯ БІЗНЕСУ: ГОТОВЕ БІЗНЕС-РІШЕННЯ «ПІД КЛЮЧ»',
    'VELUM ДЛЯ БІЗНЕСУ: ГОТОВЕ БІЗНЕС-РІШЕННЯ «ПІД КЛЮЧ»',
  ];

  return (
    <div className={styles.ticker}>
      <div className={styles.tickerTrack}>
        {items.map((text, i) => (
          <span key={`t1-${i}`} className={styles.item}>
            {text}
          </span>
        ))}
      </div>
      <div className={styles.tickerTrack} aria-hidden="true">
        {items.map((text, i) => (
          <span key={`t2-${i}`} className={styles.item}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
