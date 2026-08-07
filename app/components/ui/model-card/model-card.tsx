import Image from 'next/image';
import styles from './model-card.module.css';
import { modelCounts, modelNames } from '../../velum-page-data';

export type Model = {
  name: string;
  count: string;
  payback: string;
  profit: string;
  revenue: string;
  costs: string;
  price: string;
  image: string;
};

export function ModelCard({ model }: { model: Model }) {
  return (
    <article className={styles.modelCard} id={`model-${model.name.toLowerCase()}`}>
      <div className={styles.modelTabs}>
        {modelNames.map((name, index) => (
          <a href={`#model-${name.toLowerCase()}`} className={name === model.name ? styles.selectedTab : ''} key={name}>
            {name} - {modelCounts[index]}
          </a>
        ))}
      </div>
      <div className={styles.modelBody}>
        <div className={styles.modelPicture}>
          <div className={styles.pictureRail} aria-hidden="true">
            <span>Velum</span>
            <small>Проєкт</small>
            <b>{model.count.length === 1 ? `0${model.count}` : model.count}</b>
          </div>
          <Image src={model.image} alt={`База відпочинку «${model.name}»`} fill sizes="(max-width: 760px) 100vw, 54vw" />
        </div>
        <div className={styles.modelDetails}>
          <div className={styles.modelTitle}>
            <h3>{model.name}</h3>
            <span>Готове рішення</span>
          </div>
          <p>Дохідність на рік: <strong>{model.revenue}</strong></p>
          <p>Витрати на рік: <strong>{model.costs}</strong></p>
          <p>Середня ціна за оренду будинку: <strong>7 830 ₴</strong></p>
          <div className={styles.modelEconomy}>
            <b>Бізнес-план:</b>
            <ul>
              <li>{model.count} будинків для бази відпочинку</li>
              <li>Підключення комунікацій</li>
              <li>Монтаж і благоустрій</li>
              <li>Базовий маркетинг і запуск</li>
            </ul>
          </div>
          <div className={styles.metricsBand}>
            <div className={styles.modelResult}>
              <div>
                <strong>{model.payback}</strong>
                <span>строк окупності</span>
              </div>
              <div>
                <strong>{model.profit}</strong>
                <span>чистий прибуток на рік</span>
              </div>
            </div>
            <div className={styles.modelPrice}>
              <strong>{model.price}</strong>
              <span>Вартість бази під ключ:</span>
            </div>
          </div>
          <a className={styles.ctaLink} href="#contacts">Обрати</a>
        </div>
      </div>
    </article>
  );
}
