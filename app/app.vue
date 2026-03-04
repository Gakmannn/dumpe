<template>
  <header>
    <div id="main" class="container">
      <div class="flex jssb">
        <h1>DAMPE</h1>
        <div class="flex" style="gap:10px">
          <a href="#main">Главная</a>
          <a href="#about">О компании</a>
          <a href="#equipment">Оборудование</a>
          <a href="#competencies">Компетенции</a>
        </div>
      </div>
      <p>промышленное оборудование и автоматизация</p>
    </div>
  </header>
  <main class="container">
    <div style="margin-top: 20px;" class="grid top">
      <NuxtImg class="i1" fit="cover" src="/img/Table.webp" />
      <NuxtImg class="i2" fit="cover" src="/img/robot-myths.webp" />
      <p class="te1">Промышленное оборудование</p>
      <p class="te2">Автоматизация и роботизация</p>
    </div>
    <div>
      <h2 id="about">О компании</h2>
      <p>DAMPE — инжиниринговое предприятие, которое помогает промышленным предприятиям выйти на новый уровень эффективности. Мы специализируемся на поставках современного промышленного оборудования и внедрении комплексных автоматизированных и роботизированных решений — в том числе для сварочных процессов.</p>
      <h2 id="equipment">Оборудование</h2>
    </div>
    <div class="grid center">
      <NuxtImg class="img1" fit="cover" src="/img/Fronius.webp" />
      <NuxtImg class="img5" fit="cover" src="/img/Messer.webp" />
      <NuxtImg class="img3" fit="cover" src="/img/IPSEN.webp" />
      <p class="t1">Сварочное оборудование</p>
      <p class="t5">Станки термической резки</p>
      <p class="t3">Печи для ХТО</p>
      <NuxtImg class="img4" fit="cover" src="/img/ABBRobotWelding.webp" />
      <NuxtImg class="img2" fit="cover" src="/img/Froniusautomatization.webp" />
      <NuxtImg class="img6" fit="cover" src="/img/Table.webp" />
      <p class="t4">Роботизация сварки</p>
      <p class="t2">Автоматизация сварки</p>
      <p class="t6">Сварочные столы и оснастка</p>
    </div>
    <div>
      <h2>Наша миссия</h2>
      <p>Мы стремимся помогать предприятиям:</p>
      <ul>
        <li>повышать производительность;</li>
        <li>сокращать производственные издержки;</li>
        <li>обеспечивать стабильно высокое качество продукции;</li>
        <li>внедрять передовые технологии для укрепления конкурентных позиций на рынке.</li>
      </ul>
      <h2 id="competencies">Компетенции</h2>
      <p>DAMPE реализует полный цикл услуг «под ключ» — от подбора оборудования до запуска интегрированных систем в эксплуатацию. В спектр наших компетенций входят:</p>
      <ol>
        <li>
          <h3>Поставка промышленного оборудования:</h3>
          <ul>
            <li>сварочные источники;</li>
            <li>сварочные столы и оснастка;</li>
            <li>станки для резки металла;</li>
            <li>печи для химико-термической обработки (ХТО);</li>
            <li>оборудование для автоматизации сварочных процессов и др.</li>
          </ul>
        </li>
        <li>
          <h3>Разработка и интеграция автоматизированных и роботизированных комплексов по сварке, включая:</h3>
          <ul>
            <li>проектирование технологических линий с учётом специфики производства заказчика;</li>
            <li>подбор промышленных роботов и сварочного оборудования;</li>
            <li>создание систем управления и контроля качества сварных соединений;</li>
            <li>внедрение систем машинного зрения и датчиков для мониторинга процесса сварки.</li>
          </ul>
        </li>
        <li>
          <h3>Комплексная модернизация производств:</h3>
          <ul>
            <li>автоматизация отдельных участков;</li>
            <li>создание полностью роботизированных сварочных линий;</li>
            <li>интеграция новых решений в существующие производственные цепочки.</li>
          </ul>
        </li>
        <li>
          <h3>Сервисное обслуживание и поддержка:</h3>
          <ul>
            <li>пусконаладочные работы;</li>
            <li>обучение персонала работе с новым оборудованием;</li>
            <li>гарантийное и постгарантийное обслуживание;</li>
            <li>техническая поддержка и консультации.</li>
          </ul>
        </li>
      </ol>
      <p>Выбирая DAMPE, вы получаете надёжного технологического партнёра, который поможет оптимизировать производство, внедрить современные роботизированные и автоматизированные решения и добиться устойчивого роста эффективности вашего бизнеса.
      </p>
    </div>
  </main>
  <footer>
    <div class="container">
      <div class="flex">
        <p>email:
          <a href="mailto:info@dampe.ru">info@dampe.ru</a>
        </p>
        <p>телефон:
          <a href="tel:+7(915)1069423">+7 (915) 106-94-23</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style>
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  padding: 0;
  font-size: 20px;
}
header, footer {
 background-color: #F4F4F3;
 padding: 20px;
}
header {
  color: rgb(177, 2, 2);
}
h1 {
  font-size: 60px;
  margin: 10px 0;
}
header p, footer p {
  font-size: 25px;
  margin: 10px 0;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.grid {
  display: grid;
}
.top {
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 10px;
}
.center {
  grid-template-columns: 33% 33% 33%;
  align-items: center;
  justify-items: center;
  gap: 10px;
}
.center img, .top img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.center p,
.top p {
  font-size: 26px;
  margin: 10px 0;
}
.text {
  max-width: 800px;
  margin: 0 auto;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
a, a:visited {
  color: rgb(177, 2, 2);
}
h2 {
  margin-top: 80px;
}
@media screen and (max-width: 1200px) {
  .container {
    padding: 10px;
  }
}
@media screen and (max-width: 900px) {
  .center {
    grid-template-columns: 49% 49%;
  }
  .img1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .img2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .img3 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .img4 {
    grid-area: 3 / 2 / 4 / 3;
  }
  .img5 {
    grid-area: 5 / 1 / 6 / 2;
  }
  .img6 {
    grid-area: 5 / 2 / 6 / 4;
  }
  .t1 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .t2 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .t3 {
    grid-area: 4 / 1 / 5 / 2;
  }
  .t4 {
    grid-area: 4 / 2 / 5 / 3;
  }
  .t5 {
    grid-area: 6 / 1 / 7 / 2;
  }
  .t6 {
    grid-area: 6 / 2 / 7 / 3;
  }
}
@media screen and (max-width: 600px) {
  .center p,
  .top p {
    font-size: 20px;
  }
  .top {
    grid-template-columns: 100%;
  }
  .i1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .i2 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .te1 {
    grid-area: 2 / 1 / 3 / 2;
  }

  .te2 {
    grid-area: 4 / 1 / 5 / 2;
  }
  .center {
    grid-template-columns: 100%;
  }
  .img1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .img2 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .img3 {
    grid-area: 5 / 1 / 6 / 2;
  }
  .img4 {
    grid-area: 7 / 1 / 8 / 2;
  }
  .img5 {
    grid-area: 9 / 1 / 10 / 2;
  }
  .img6 {
    grid-area: 11 / 1 / 12 / 2;
  }
  .t1 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .t2 {
    grid-area: 4 / 1 / 5 / 2;
  }
  .t3 {
    grid-area: 6 / 1 / 7 / 2;
  }
  .t4 {
    grid-area: 8 / 1 / 9 / 2;
  }
  .t5 {
    grid-area: 10 / 1 / 11 / 2;
  }
  .t6 {
    grid-area: 12 / 1 / 13 / 2;
  }
}
@media screen and (max-width: 550px) {
  ol, ul {
    padding-left: 20px;
  }
  header p,
  footer p {
    font-size: 20px;
  }
}
@media screen and (max-width: 500px) {
  .body {
    font-size: 16px;
  }
}
</style>
