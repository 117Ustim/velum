import Image from 'next/image';
import styles from './about.module.css';
import { RevealOnEnter } from '../../ui/reveal-on-enter/reveal-on-enter';

export function About() {
  const ProblemIcon = () => (
    <span className={styles.problemIcon}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="m12 2 2.45 7.55L22 12l-7.55 2.45L12 22l-2.45-7.55L2 12l7.55-2.45L12 2Z" />
      </svg>
    </span>
  );

  return (
    <section className={styles.aboutSection} id="about">
      <RevealOnEnter>
        <div className={styles.centerHeading}>
        <span className={styles.yellowLabel}>Готові рішення</span>
        <h2>
          <span className={styles.headingLine}>Для кого підійде</span>
          <span className={styles.headingLine}>наша <span className={styles.headingHighlight}>пропозиція</span></span>
        </h2>
        <p className={styles.headingLead}>Ми перетворюємо складні земельні та інвестиційні задачі на зрозумілий план запуску бази відпочинку.</p>
        </div>
      </RevealOnEnter>

      <div className={styles.audienceGrid}>
        {/* Card 1 */}
        <RevealOnEnter>
          <div className={styles.card}>
          <div className={styles.cardTopline}>
            <span>01</span>
            <em>Монетизація землі</em>
          </div>
          <div className={styles.cardHeader}>
            <div className={styles.avatar}>
              <Image src="/assets/velum/portraits/manager.png" alt="Для власників земельних ділянок" fill sizes="56px" priority />
            </div>
            <h3>Для власників земельних ділянок</h3>
          </div>

          <ul className={styles.problemsList}>
            <li className={styles.problemItem}>
              <ProblemIcon />
              <span className={styles.problemText}>Маєте ділянку біля лісу, озера, річки або в горах, але вона просто стоїть і не приносить доходу</span>
            </li>
            <li className={styles.problemItem}>
              <ProblemIcon />
              <span className={styles.problemText}>Не знаєте, з чого почати монетизацію землі та як правильно оцінити її потенціал</span>
            </li>
            <li className={styles.problemItem}>
              <ProblemIcon />
              <span className={styles.problemText}>Побоюєтеся складнощів із підведенням комунікацій, будівництвом та інфраструктурою</span>
            </li>
            <li className={styles.problemItem}>
              <ProblemIcon />
              <span className={styles.problemText}>Не маєте досвіду в заміському готельному бізнесі та побоюєтеся ризикованих інвестицій</span>
            </li>
          </ul>

          <div className={styles.solutionBox}>
            <span className={styles.solutionBadge}>Рішення</span>
            <h4 className={styles.solutionTitle}>Покажемо, як монетизувати вашу ділянку та перетворити її на прибуткову базу:</h4>
            <ul className={styles.solutionsList}>
              <li className={styles.solutionItem}>
                <span className={styles.checkIcon}>✔</span>
                <span className={styles.solutionText}>Проведемо аудит ділянки та розробимо оптимальний генплан забудови</span>
              </li>
              <li className={styles.solutionItem}>
                <span className={styles.checkIcon}>✔</span>
                <span className={styles.solutionText}>Прорахуємо фінансову модель із конкретними цифрами дохідності та окупності</span>
              </li>
              <li className={styles.solutionItem}>
                <span className={styles.checkIcon}>✔</span>
                <span className={styles.solutionText}>Виготовимо й встановимо сучасні модульні будинки та підключимо всі комунікації</span>
              </li>
              <li className={styles.solutionItem}>
                <span className={styles.checkIcon}>✔</span>
                <span className={styles.solutionText}>Запускаємо маркетинг і забезпечимо потік перших гостей вже в перший місяць</span>
              </li>
            </ul>
            <p className={styles.solutionFooterText}>
              Ви перетворюєте порожню ділянку на працюючий та високорентабельний бізнес без зайвого клопоту
            </p>
          </div>

          <div className={styles.actionArea}>
            <div className={styles.buttonRow}>
              <a href="#contacts" className={styles.primaryBtn}>Отримати консультацію</a>
              <a className={styles.socialBtn} href="https://t.me/melnik_volodymyr" title="Telegram" target="_blank" rel="noreferrer">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="12" fill="url(#tgGrad1)"/>
                  <path d="M28.4 12.3c.5-.2 1 .2.8.7l-4.7 15.6c-.2.7-1 .9-1.5.5l-4.5-3.3-2.2 2.1c-.4.4-1.1.2-1.2-.4l-.8-5.3-4.5-1.5c-.7-.2-.7-1.2 0-1.4l18.6-7z" fill="white"/>
                  <path d="M15.1 20.7l1.7 5.7.4-4-2.1-1.7z" fill="#c3e0fe"/>
                  <path d="M28.4 12.3l-13.3 8.4 3.7 2.7 9.6-11.1z" fill="#edf5fe" opacity="0.9"/>
                  <defs>
                    <linearGradient id="tgGrad1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#37bdf8"/>
                      <stop offset="1" stopColor="#1d9bf0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </a>
              <a className={styles.socialBtn} href="viber://chat?number=%2B380976655306" title="Viber" target="_blank" rel="noreferrer">
                <Image src="/assets/velum/icons/viber-square.png?v=2" alt="Viber" width={40} height={40} />
              </a>
            </div>
            <p className={styles.actionNotice}>
              Отримайте розрахунок дохідності та консультацію. <b>Безкоштовно і без зобов&apos;язань.</b>
            </p>
          </div>
          </div>
        </RevealOnEnter>

        {/* Card 2 */}
        <RevealOnEnter>
          <div className={styles.card}>
          <div className={styles.cardTopline}>
            <span>02</span>
            <em>Інвестиційний запуск</em>
          </div>
          <div className={styles.cardHeader}>
            <div className={styles.avatar}>
              <Image src="/assets/velum/portraits/owner.png" alt="Для інвесторів" fill sizes="56px" priority />
            </div>
            <h3>Для інвесторів</h3>
          </div>

          <ul className={styles.problemsList}>
            <li className={styles.problemItem}>
              <ProblemIcon />
              <span className={styles.problemText}>Класичне будівництво триває роками, капітал заморожується, а строки окупності розмиваються</span>
            </li>
            <li className={styles.problemItem}>
              <ProblemIcon />
              <span className={styles.problemText}>Побоюєтеся затримок термінів здачі, постійного зростання кошторису та недобросовісних підрядників</span>
            </li>
            <li className={styles.problemItem}>
              <ProblemIcon />
              <span className={styles.problemText}>Шукаєте стабільну нішу з прозорою економікою, яка генеруватиме регулярний щомісячний дохід</span>
            </li>
            <li className={styles.problemItem}>
              <ProblemIcon />
              <span className={styles.problemText}>Не маєте часу самостійно керувати будівництвом, підключати комунікації та налаштовувати операційку</span>
            </li>
          </ul>

          <div className={styles.solutionBox}>
            <span className={styles.solutionBadge}>Рішення</span>
            <h4 className={styles.solutionTitle}>Запуск бізнесу значно швидше за капітальне будівництво з прогнозованим доходом:</h4>
            <ul className={styles.solutionsList}>
              <li className={styles.solutionItem}>
                <span className={styles.checkIcon}>✔</span>
                <span className={styles.solutionText}>Швидкий запуск об&apos;єкта всього за 5 місяців під ключ — ваш капітал починає працювати без затримок</span>
              </li>
              <li className={styles.solutionItem}>
                <span className={styles.checkIcon}>✔</span>
                <span className={styles.solutionText}>Прозора фінансова модель із точним розрахунком окупності та щомісячного прибутку</span>
              </li>
              <li className={styles.solutionItem}>
                <span className={styles.checkIcon}>✔</span>
                <span className={styles.solutionText}>Повний цикл супроводу: від виготовлення будинків до маркетингу та перших бронювань</span>
              </li>
              <li className={styles.solutionItem}>
                <span className={styles.checkIcon}>✔</span>
                <span className={styles.solutionText}>Фіксований кошторис і строки за договором + гарантійне обслуговування об&apos;єкта</span>
              </li>
            </ul>
            <p className={styles.solutionFooterText}>
              Ви отримуєте високоприбутковий інвестиційний актив із регулярним пасивним доходом та високою ліквідністю
            </p>
          </div>

          <div className={styles.actionArea}>
            <div className={styles.buttonRow}>
              <a href="#contacts" className={styles.primaryBtn}>Отримати консультацію</a>
              <a className={styles.socialBtn} href="https://t.me/melnik_volodymyr" title="Telegram" target="_blank" rel="noreferrer">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="12" fill="url(#tgGrad2)"/>
                  <path d="M28.4 12.3c.5-.2 1 .2.8.7l-4.7 15.6c-.2.7-1 .9-1.5.5l-4.5-3.3-2.2 2.1c-.4.4-1.1.2-1.2-.4l-.8-5.3-4.5-1.5c-.7-.2-.7-1.2 0-1.4l18.6-7z" fill="white"/>
                  <path d="M15.1 20.7l1.7 5.7.4-4-2.1-1.7z" fill="#c3e0fe"/>
                  <path d="M28.4 12.3l-13.3 8.4 3.7 2.7 9.6-11.1z" fill="#edf5fe" opacity="0.9"/>
                  <defs>
                    <linearGradient id="tgGrad2" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#37bdf8"/>
                      <stop offset="1" stopColor="#1d9bf0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </a>
              <a className={styles.socialBtn} href="viber://chat?number=%2B380976655306" title="Viber" target="_blank" rel="noreferrer">
                <Image src="/assets/velum/icons/viber-square.png?v=2" alt="Viber" width={40} height={40} />
              </a>
            </div>
            <p className={styles.actionNotice}>
              Отримайте розрахунок дохідності та консультацію. <b>Безкоштовно і без зобов&apos;язань.</b>
            </p>
          </div>
          </div>
        </RevealOnEnter>
      </div>
    </section>
  );
}
