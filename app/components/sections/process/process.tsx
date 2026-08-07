import Image from 'next/image';
import styles from './process.module.css';

export function Process() {
  return (
    <section className={styles.processSection} id="process">
      <div className={styles.centerHeading}>
        <span className={styles.yellowLabel}>Етапи роботи</span>
        <h2>
          Не просто будуємо будинки,<br />
          <mark>запускаємо бізнес</mark> — який<br />
          принесе вам прибуток
        </h2>
      </div>

      <div className={styles.processShell}>
        <div className={styles.processGrid}>
        {/* Step 1 */}
        <article className={styles.stepCard} data-step="01">
          <div className={styles.stepIcon}>
            <Image src="/assets/velum/process/icon-1.png" alt="1 етап" fill sizes="72px" />
          </div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>
              <mark>1 етап:</mark> фінансова модель і економіка проєкту
            </h3>
            <p className={styles.subIntro}>Прораховуємо:</p>
            <ul className={styles.checkList}>
              <li className={styles.checkItem}>
                <span className={styles.checkMark}>✔</span>
                <span>витрати</span>
              </li>
              <li className={styles.checkItem}>
                <span className={styles.checkMark}>✔</span>
                <span>чистий прибуток</span>
              </li>
              <li className={styles.checkItem}>
                <span className={styles.checkMark}>✔</span>
                <span>строк окупності та точку беззбитковості</span>
              </li>
            </ul>
          </div>
          <span className={styles.connectionNode} aria-hidden="true" />
        </article>

        {/* Step 2 */}
        <article className={styles.stepCard} data-step="02">
          <div className={styles.stepIcon}>
            <Image src="/assets/velum/process/icon-2.png" alt="2 етап" fill sizes="72px" />
          </div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>
              <mark>2 етап:</mark> розробка ген. плану бази відпочинку
            </h3>
            <ul className={styles.checkList}>
              <li className={styles.checkItem}>
                <span className={styles.checkMark}>✔</span>
                <span>Проводимо аналіз території, зонування, проектуємо інфраструктуру та комунікації</span>
              </li>
              <li className={styles.checkItem}>
                <span className={styles.checkMark}>✔</span>
                <span>Створюємо продуману концепцію, яка забезпечить комфорт гостей та економічну ефективність об&apos;єкта на роки вперед</span>
              </li>
            </ul>
          </div>
        </article>

        {/* Step 3 */}
        <article className={styles.stepCard} data-step="03">
          <div className={styles.stepIcon}>
            <Image src="/assets/velum/process/icon-3.png" alt="3 етап" fill sizes="72px" />
          </div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>
              <mark>3 етап:</mark> виробництво та монтаж модульних будинків
            </h3>
            <ul className={styles.checkList}>
              <li className={styles.checkItem}>
                <span className={styles.checkMark}>✔</span>
                <span>Виготовляємо модульні будинки на власному сухому виробництві</span>
              </li>
              <li className={styles.checkItem}>
                <span className={styles.checkMark}>✔</span>
                <span>Гарантуємо відповідність усім будівельним нормам та довговічність конструкції</span>
              </li>
            </ul>
          </div>
          <span className={styles.connectionNode} aria-hidden="true" />
        </article>

        {/* Step 4 */}
        <article className={styles.stepCard} data-step="04">
          <div className={styles.stepIcon}>
            <Image src="/assets/velum/process/icon-4.png" alt="4 етап" fill sizes="72px" />
          </div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>
              <mark>4 етап:</mark> підготовка землі та підключення комунікацій
            </h3>
            <ul className={styles.checkList}>
              <li className={styles.checkItem}>
                <span className={styles.checkMark}>✔</span>
                <span>Беремо на себе всі земельні роботи</span>
              </li>
              <li className={styles.checkItem}>
                <span className={styles.checkMark}>✔</span>
                <span>Підключаємо електрику, воду, каналізацію</span>
              </li>
            </ul>
          </div>
        </article>

        {/* Step 5 */}
        <article className={styles.stepCard} data-step="05">
          <div className={styles.stepIcon}>
            <Image src="/assets/velum/process/icon-5.png" alt="5 етап" fill sizes="72px" />
          </div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>
              <mark>5 етап:</mark> запуск і перші продажі
            </h3>
            <ul className={styles.checkList}>
              <li className={styles.checkItem}>
                <span className={styles.checkMark}>✔</span>
                <span>Вводимо об&apos;єкт в експлуатацію</span>
              </li>
              <li className={styles.checkItem}>
                <span className={styles.checkMark}>✔</span>
                <span>Налаштовуємо маркетинг і отримуємо перші бронювання вже в перші тижні роботи</span>
              </li>
            </ul>
          </div>
          <span className={styles.connectionNode} aria-hidden="true" />
        </article>

        {/* Step 6 */}
        <article className={styles.stepCard} data-step="06">
          <div className={styles.stepIcon}>
            <Image src="/assets/velum/process/icon-6.png" alt="Сервісна підтримка" fill sizes="72px" />
          </div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>
              <mark>Сервісна підтримка</mark> та договірна гарантія
            </h3>
            <ul className={styles.checkList}>
              <li className={styles.checkItem}>
                <span className={styles.checkMark}>✔</span>
                <span>Залишаємося на зв&apos;язку після запуску</span>
              </li>
              <li className={styles.checkItem}>
                <span className={styles.checkMark}>✔</span>
                <span>Гарантійне обслуговування: усуваємо поломки за свій рахунок</span>
              </li>
            </ul>
          </div>
        </article>
        </div>
      </div>
    </section>
  );
}
