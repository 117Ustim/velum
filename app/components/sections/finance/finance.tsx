import Image from 'next/image';
import type { CSSProperties } from 'react';
import styles from './finance.module.css';
import { LeadForm } from '../../ui/lead-form/lead-form';
import { RevealOnEnter } from '../../ui/reveal-on-enter/reveal-on-enter';

const advisorLeadStart = 'Залиште заявку';
const advisorLeadEnd = ' — і ми підберемо умови, які дозволять вам зосередитися на відкритті бізнесу, а не на пошуку коштів.';
const advisorManager = 'Ваш персональний менеджер';
const advisorRole = 'Фінансовий консультант Velum';
const advisorLeadLength = Array.from(advisorLeadStart + advisorLeadEnd).length;
const advisorManagerStart = advisorLeadLength;
const advisorRoleStart = advisorManagerStart + Array.from(advisorManager).length;

function AnimatedAdvisorText({ text, startIndex }: { text: string; startIndex: number }) {
  let characterIndex = startIndex;

  return (
    <span className={styles.advisorAnimatedText} aria-label={text}>
      {text.split(/(\s+)/).filter(Boolean).map((token, tokenIndex) => {
        if (/^\s+$/.test(token)) {
          characterIndex += token.length;
          return token;
        }

        const wordStartIndex = characterIndex;
        characterIndex += Array.from(token).length;

        return (
          <span className={styles.advisorWord} key={`${token}-${tokenIndex}`}>
            {Array.from(token).map((character, index) => {
              const indexInText = wordStartIndex + index;
              const style = {
                '--advisor-delay': `${indexInText * 18}ms`
              } as CSSProperties;

              return <span className={styles.advisorCharacter} aria-hidden="true" style={style} key={`${character}-${indexInText}`}>{character}</span>;
            })}
          </span>
        );
      })}
    </span>
  );
}

export function Finance() {
  return (
    <section className={styles.financeSection} id="finance">
      <RevealOnEnter>
        <div className={styles.centerHeading}>
          <span className={styles.yellowLabel}>Фінанси</span>
          <h2>Якщо власної суми недостатньо<br />для будівництва бази відпочинку, ми<br />допоможемо отримати позикові кошти в банку!</h2>
        </div>
      </RevealOnEnter>
      <div className={styles.financeCards}>
        <RevealOnEnter>
          <article className={styles.financeCard}>
            <span className={styles.cardNumber}>01</span>
            <h3>Кредитні кошти</h3>
            <p>Кредитування під заставу житлової та комерційної нерухомості підберемо під ваш проєкт.</p>
            <ul>
              <li>Низькі відсоткові ставки порівняно з незабезпеченими кредитами</li>
              <li>Великі суми кредиту на доступній основі</li>
              <li>Гнучкість у строках погашення</li>
              <li>Можливість зниження ставки через рефінансування</li>
              <li>Розрахунок платежу та повного навантаження</li>
              <li>Підготовка документів і супровід погодження</li>
            </ul>
          </article>
        </RevealOnEnter>
        <RevealOnEnter>
          <article className={styles.financeCard}>
            <span className={styles.cardNumber}>02</span>
            <h3>Лізинг</h3>
            <p>Інструмент фінансування, що дає змогу придбати будинки та обладнання з мінімальними стартовими витратами.</p>
            <ul>
              <li>Гнучкий графік платежів</li>
              <li>Гнучкі вимоги до позичальника</li>
              <li>Економія на податках та капітальних витратах</li>
              <li>Можливість відшкодування ПДВ за лізинговими платежами</li>
              <li>Зрозуміла фінансова модель</li>
              <li>Підтримка менеджера проєкту</li>
              <li>Підбір строку та першого внеску</li>
            </ul>
          </article>
        </RevealOnEnter>
      </div>
      <div className={styles.financeForm}>
        <div className={styles.financeFormTopline}>
          <span className={styles.financeFormBadge}>Фінансова підтримка</span>
          <span className={styles.financeFormMeta}>VELUM / ФІНАНСИ</span>
        </div>
        <div className={styles.financeFormContent}>
          <h3>Вирішуємо питання<br /><mark>фінансів за вас</mark></h3>
          <p>Ми беремо на себе переговори з банками та підбір оптимальних умов, щоб ви отримали схвалення без зайвих турбот.</p>
          <LeadForm compact showConsent={false} />
        </div>
        <div className={styles.financeAdvisor}>
          <RevealOnEnter>
            <div className={styles.advisorNote}>
              <p><strong><AnimatedAdvisorText text={advisorLeadStart} startIndex={0} /></strong><AnimatedAdvisorText text={advisorLeadEnd} startIndex={advisorLeadStart.length} /></p>
              <strong><AnimatedAdvisorText text={advisorManager} startIndex={advisorManagerStart} /></strong>
              <span><AnimatedAdvisorText text={advisorRole} startIndex={advisorRoleStart} /></span>
            </div>
          </RevealOnEnter>
          <div className={styles.advisorPhotoFrame}>
            <Image className={styles.advisorPhoto} src="/assets/velum/portraits/finance-advisor.png" alt="Фінансова консультантка Velum" width={832} height={1248} />
          </div>
        </div>
      </div>
    </section>
  );
}
