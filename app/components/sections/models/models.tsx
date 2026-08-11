import styles from './models.module.css';
import { assets, modelCounts, modelNames, modelRows } from '../../velum-page-data';
import { ModelCard, type Model } from '../../ui/model-card/model-card';

const models: Model[] = modelRows.map((row, index) => ({
  ...row,
  name: modelNames[index],
  count: modelCounts[index],
  image: assets.models[index]
}));

export function Models() {
  return (
    <section className={styles.modelsSection} id="models">
      <div className={styles.centerHeading}>
        <span className={styles.yellowLabel}>Готові рішення</span>
        <h2>Бази відпочинку під ключ<br />під різний бюджет і масштаб</h2>
        <p>Оберіть готовий сценарій із прорахованою економікою проєкту.</p>
      </div>
      <div className={styles.modelsList}>
        {models.map((model) => <ModelCard key={model.name} model={model} />)}
      </div>
    </section>
  );
}
