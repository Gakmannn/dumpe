<template>
  <header>
    <div id="main" class="container">
      <div class="flex jcsb">
        <img width="180" src="/img/logo.webp" />
        <div class="flex" style="gap:40px">
          <a href="/#about">О компании</a>
          <a href="/#equipment">Оборудование</a>
          <a href="/#contacts">Контакты</a>
        </div>
      </div>
    </div>
  </header>
  <main class="container">
    <div style="margin-top: 20px;" class="grid top">
      <NuxtImg class="i1" fit="cover" src="/img/robot-myths.webp" />
      <NuxtImg class="i2" fit="cover" src="/img/Table.webp" />
      <div class="te1">
        <p class="main">Инжиниринг и автоматизация</p>
        <p class="grey">Комплексные решение по автоматизации производств</p>
      </div>
      <div class="tt2">
        <p class="main">Промышленное оборудование</p>
        <p class="grey">Поставка промышленного оборудования</p>
      </div>
    </div>
    <div class="text">
      <h2 id="about">О компании</h2>
      <p class="h1">DAMPE</p>
      <p>Компания DAMPE — инжиниринговое предприятие, которое специализируется на поставках современного промышленного оборудования и внедрении комплексных автоматизированных и роботизированных решений.</p>
      <p>
        Наша миссия — помогать предприятиям повышать эффективность производства, сокращать издержки и обеспечивать стабильное качество продукции за счет внедрения передовых технологий.
      </p>
      <p>
        Мы предлагаем полный цикл услуг: от подбора и поставки оборудования до разработки и интеграции автоматизированных систем "под ключ". Благодаря опыту нашей команды инженеров и партнерству с ведущими мировыми производителями, мы реализуем проекты любой сложности — от модернизации отдельных участков до создания полностью роботизированных производственных линий.
      </p>
      <p>
        Мы ценим долгосрочные отношения и всегда стремимся быть надежным технологическим партнером для наших клиентов, обеспечивая высокий уровень сервиса, гибкий подход и гарантированный результат.</p>
      <!-- <h2 id="equipment">Оборудование</h2> -->
    </div>
    <div class="grid center" id="equipment">
      <div class="img1">
        <NuxtImg src="/img/Fronius.webp" />
        <div class="filter"></div>
        <p>Сварочное оборудование</p>
      </div>
      <div class="img5">
        <NuxtImg src="/img/Messer.webp" />
        <div class="filter"></div>
        <p>Станки термической резки</p>
      </div>
      <div class="img3">
        <NuxtImg src="/img/IPSEN.webp" />
        <div class="filter"></div>
        <p>Печи для ХТО</p>
      </div>
      <div class="img4">
        <NuxtImg src="/img/ABBRobotWelding.webp" />
        <div class="filter"></div>
        <p>Роботизация сварки</p>
      </div>
      <div class="img2">
        <NuxtImg src="/img/Froniusautomatization.webp" />
        <div class="filter"></div>
        <p>Автоматизация сварки</p>
      </div>
      <div class="img6">
        <NuxtImg src="/img/Table.webp" />
        <div class="filter"></div>
        <p>Сварочные столы</p>
      </div>
    </div>
  </main>
  <footer id="contacts">
    <div class="container">
      <div class="flex jcse">
        <a href="mailto:info@dampe.ru">
          <img src="/img/mail.png" alt="написать">
          <span class="upper">email</span>
          <span>info@dampe.ru</span>
        </a>
        <div class="line"></div>
        <a href="tel:+7(915)1069423">
          <img src="/img/call.png" alt="позвонить">
          <span class="upper">телефон</span>
          <span>+7 (915) 106-94-23</span>
        </a>
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
  font-family: Open Sans;
}
header, footer {
 padding: 0px;
}
header {
  background-color: rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid #999999;
  position: sticky;
  top: 0;
  padding: 0;
  z-index: 100;
}
header a {
  color: #999999;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 12px;
}
header a:visited {
  color: #999999;
}
header a:hover {
  color: #2a3780;
}
h2 {
  padding-top: 80px;
  font-size: 16px;
  margin: 0px 0;
  color: #2a3780;
  font-weight: 700;
  text-transform: uppercase;
}
.h1 {
  font-size: 36px;
  margin: 0px 0;
  font-weight: 700;
  margin: 20px 0;
  text-transform: uppercase;
}
.h1::after {
  border: #999999 solid 0;
  border-top-width: 10px;
  content: "";
  display: block;
  height:10px; 
  margin-top: 30px;
  margin-right: auto;
  width: 70px;
}
.text {
  font-size: 14px;
}
.text p {
  margin-bottom: 30px;
}
header p, footer p {
  font-size: 25px;
  margin: 10px 0;
}
.container {
  max-width: 1140px;
  padding: 15px;
  margin: 0 auto;
}
#equipment {
  padding-top: 80px;
}
.grid {
  display: grid;
}
.top {
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  column-gap: 50px;
  row-gap: 10px;
}
.top .main {
  text-transform: uppercase;
  font-weight: 700;
}
.top .grey {
  color: #999999;
}
.center {
  grid-template-columns: 30% 30% 30%;
  align-items: center;
  justify-items: center;
  column-gap: 50px;
  row-gap: 10px;
}
.center>div {
  position: relative;
  height: 100%;
}
.filter {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.center div p {
  position: absolute;
  bottom: 0px;
  left: 20px;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
}
.center img, .top img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.center p,
.top p {
  font-size: 16px;
  margin: 16px 0;
  text-align: center;
}
.flex {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.jcsb {
  justify-content: space-between;
}
.jcse {
  justify-content: space-evenly;
}
.line {
  height: 70px;
  border-right: 2px solid #2a3780;
}
footer {
  padding-top: 80px;
}
footer img {
  width: 50px;
}
footer a {
  display: flex;
  gap:10px;
  flex-direction: column;
  text-decoration: none;
  color: #2a3780;
  font-size: 17px;
  align-items: center;
}
.upper {
  text-transform: uppercase;
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
  h1 {
    font-size: 40px;
  }
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
