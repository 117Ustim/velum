import styles from './finance.module.css';
import { LeadForm } from '../../ui/lead-form/lead-form';

export function Finance() {
  return (
    <section className={styles.financeSection} id="finance">
      <div className={styles.centerHeading}>
        <span className={styles.yellowLabel}>Фінанси</span>
        <h2>Якщо власної суми недостатньо<br />для будівництва бази <mark>відпочинку</mark>, ми<br />допоможемо отримати позикові кошти в банку!</h2>
      </div>
      <div className={styles.financeCards}>
        <article>
          <h3>Кредитні кошти</h3>
          <p>Підберемо банківське рішення під ваш проєкт.</p>
          <ul>
            <li>Розрахуємо платіж і навантаження</li>
            <li>Допоможемо підготувати документи</li>
            <li>Підтримаємо на етапі погодження</li>
            <li>Покажемо економіку бази банку</li>
          </ul>
        </article>
        <article>
          <h3>Лізинг</h3>
          <p>Розглянемо лізинг обладнання та будинків.</p>
          <ul>
            <li>Гнучкий графік платежів</li>
            <li>Мінімум капітальних витрат</li>
            <li>Зрозуміла фінансова модель</li>
            <li>Підтримка менеджера проєкту</li>
          </ul>
        </article>
      </div>
      <div className={styles.financeForm}>
        <div>
          <h3>Вирішуємо питання<br /><mark>фінансів за вас</mark></h3>
          <p>Залиште заявку, і ми підберемо відповідний варіант.</p>
        </div>
        <LeadForm compact />
      </div>
    </section>
  );
}

