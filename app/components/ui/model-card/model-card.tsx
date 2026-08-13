'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './model-card.module.css';
import { RevealOnEnter } from '../reveal-on-enter/reveal-on-enter';

export type Model = {
  name: string;
  count: string;
  payback: string;
  profit: string;
  revenue: string;
  costs: string;
  price: string;
  rentalPrice?: string;
  title?: string;
  titlePrefix?: string;
  preserveTitleCase?: boolean;
  showEconomy?: boolean;
  revenueLabel?: string;
  revenueNote?: string;
  costsLabel?: string;
  costsNote?: string;
  rentalLabel?: string;
  paybackLabel?: string;
  profitLabel?: string;
  image: string;
};

export function ModelCard({ model }: { model: Model }) {
  const [packageOpen, setPackageOpen] = useState(false);
  const houseCount = model.count.replace('+', '');
  const houseWord = houseCount === '3' ? 'будинки' : 'будинків';

  return (
    <article className={styles.modelCard} id={`model-${model.name.toLowerCase()}`}>
      <div className={styles.modelBody}>
        <RevealOnEnter>
          <div className={styles.modelPicture}>
            <span className={styles.houseCountBadge}>{houseCount} {houseWord}</span>
            <Image
              src={model.image}
              alt={`База відпочинку «${model.name}»`}
              fill
              sizes="(max-width: 760px) 100vw, 54vw"
              loading="eager"
              quality={78}
            />
          </div>
        </RevealOnEnter>
          <div className={styles.modelDetails}>
            <div className={styles.modelTitle}>
            <h3 className={model.preserveTitleCase ? styles.modelTitleCustom : undefined}>
              {model.titlePrefix ?? model.title ?? model.name}
            </h3>
            </div>
          <p>{model.rentalLabel ?? 'Середня ціна за оренду будинку:'} <strong>{model.rentalPrice ?? '7 830 ₴'}</strong></p>
          <p className={model.revenueNote ? styles.modelDetailWithNote : undefined}>{model.revenueLabel ?? 'Дохідність на рік:'} <strong>{model.revenue}</strong></p>
          {model.revenueNote && <small className={styles.modelDetailNote}>{model.revenueNote}</small>}
          <p className={model.costsNote ? styles.modelDetailWithNote : undefined}>{model.costsLabel ?? 'Витрати на рік:'} <strong>{model.costs}</strong></p>
          {model.costsNote && (
            <>
              <button
                className={styles.modelDetailNote}
                type="button"
                aria-expanded={packageOpen}
                onClick={() => setPackageOpen((isOpen) => !isOpen)}
              >
                {model.costsNote}
              </button>
              {packageOpen && (
                <div className={styles.packageCard}>
                  <strong>Що входить у вартість</strong>
                  <ul>
                    <li>{houseCount} модульні будинки</li>
                    <li>{houseCount} купелі</li>
                    <li>Фундамент</li>
                    <li>Септик</li>
                  </ul>
                  <p>У вартість також входить підключення комунікацій, монтаж фундаменту і будинків на ділянці, розрахунок окупності та базовий маркетинг.</p>
                </div>
              )}
            </>
          )}
          {model.showEconomy !== false && (
            <div className={styles.modelEconomy}>
              <b>Бізнес-план:</b>
              <ul>
                <li>{model.count} будинків для бази відпочинку</li>
                <li>Підключення комунікацій</li>
                <li>Монтаж і благоустрій</li>
                <li>Базовий маркетинг і запуск</li>
              </ul>
            </div>
          )}
          <div className={styles.metricsBand}>
            <div className={styles.modelResult}>
              <div>
                <strong>{model.payback}</strong>
                <span>{model.paybackLabel ?? 'строк окупності'}</span>
              </div>
              <div>
                <strong>{model.profit}</strong>
                <span>{model.profitLabel ?? 'чистий прибуток на рік'}</span>
              </div>
            </div>
          </div>
          <div className={styles.modelPrice}>
            <span>Вартість бази під ключ:</span>
            <strong>{model.price}</strong>
          </div>
          <a className={styles.ctaLink} href="#contacts">Розрахувати фінансову модель мого комплексу</a>
        </div>
      </div>
    </article>
  );
}
