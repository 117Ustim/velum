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
  return (
    <section className={styles.modelsSection} id="models">
      <RevealOnEnter>
        <div className={styles.centerHeading}>
          <span className={styles.yellowLabel}>Готові рішення</span>
          <h2>
            <span className={styles.headingLineTop}>Бази відпочинку під ключ</span>
            <span className={styles.headingLineBottom}>
              <span className={styles.headingFromLeft}>під різний</span>{' '}
              <span className={styles.headingHighlight}>бюджет</span>{' '}
              <span className={styles.headingFromRight}>і масштаб</span>
            </span>
          </h2>
          <p>Оберіть готовий сценарій із прорахованою економікою проєкту.</p>
        </div>
      </RevealOnEnter>
      <div className={styles.modelsList}>
        {models.map((model) => <ModelCard key={model.name} model={model} />)}
      </div>
    </section>
  );
}
