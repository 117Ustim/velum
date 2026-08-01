import styles from './models.module.css';
import { assets, modelRows } from '../../velum-page-data';
import { ModelCard, type Model } from '../../ui/model-card/model-card';

const modelNames = ['Хутір', 'Садиба', 'Маєток', 'Помістя', 'Угіддя', 'Отчина', 'Резиденція', 'Володіння', 'Держава', 'Гранд', 'Флагман'] as const;
const modelCounts = [3, 6, 9, 12, 15, 18, 21, 15, 9, 15, 20] as const;

const models: Model[] = modelRows.map(([payback, profit, revenue, costs, price], index) => ({
  name: modelNames[index],
  count: modelCounts[index],
  payback,
  profit,
  revenue,
  costs,
  price,
  image: assets.models[index]
}));

export function Models() {
  return (
    <section className={styles.modelsSection} id="models">
      <div className={styles.centerHeading}>
        <span className={styles.yellowLabel}>Готові рішення</span>
        <h2>Бази відпочинку <mark>під ключ</mark><br />під різний бюджет і масштаб</h2>
        <p>Оберіть готовий сценарій із прорахованою економікою проєкту.</p>
      </div>
      <div className={styles.modelsList}>
        {models.map((model) => <ModelCard key={model.name} model={model} />)}
      </div>
    </section>
  );
}
