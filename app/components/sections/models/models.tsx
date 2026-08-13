'use client';

import { useState } from 'react';
import styles from './models.module.css';
import { assets, modelCounts, modelNames, modelRows } from '../../velum-page-data';
import { ModelCard, type Model } from '../../ui/model-card/model-card';
import { RevealOnEnter } from '../../ui/reveal-on-enter/reveal-on-enter';

const models: Model[] = modelRows.map((row, index) => ({
  ...row,
  name: modelNames[index],
  count: modelCounts[index],
  image: assets.models[index]
}));

export function Models() {
  const [activeModelIndex, setActiveModelIndex] = useState(0);
  const activeModel = models[activeModelIndex];

  return (
    <section className={styles.modelsSection} id="models">
      <RevealOnEnter>
        <div className={styles.centerHeading}>
          <span className={styles.yellowLabel}>ГОТОВІ РІШЕННЯ</span>
          <h2>
            <span className={styles.headingLineTop}>Бази відпочинку <span className={styles.headingBadge}>під ключ</span></span>
            <span className={styles.headingLineBottom}>
              <span className={styles.headingFromLeft}>під різний</span>{' '}
              <span className={styles.headingHighlight}>бюджет</span>{' '}
              <span className={styles.headingFromRight}>і масштаб</span>
            </span>
          </h2>
          <p>Оберіть готовий сценарій із прорахованою економікою проєкту.</p>
        </div>
      </RevealOnEnter>
      <RevealOnEnter>
        <div className={styles.modelTabs} role="tablist" aria-label="Моделі баз відпочинку">
          {models.map((model, index) => (
            <button
              key={model.name}
              className={index === activeModelIndex ? styles.selectedTab : undefined}
              type="button"
              role="tab"
              aria-selected={index === activeModelIndex}
              onClick={() => setActiveModelIndex(index)}
            >
              {model.name} - {model.count.replace('+', '')}
            </button>
          ))}
        </div>
      </RevealOnEnter>
      <div className={styles.modelsList}>
        <ModelCard key={activeModel.name} model={activeModel} />
      </div>
    </section>
  );
}
