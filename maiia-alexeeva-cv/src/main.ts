import "./css/style.css";
import "./css/header.scss";
import "./css/sections.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import maiiaPhoto from "./maiia.jpg";

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div class="container">
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<!-- Container -->
    <div class="container">
      <!-- Header -->
      <header class="header">
        <div class="header-name">
          <span>Maiia Alexeeva</span>
        </div>
        <!-- Burger Menu Button -->
        <a href="#" class="menu-btn"> </a>

        <!-- Side Menu -->
        <div class="menu">
          <nav class="menu-container">
            <ul class="menu-list">
              <li class="menu-list__item"><a href="/">Home</a></li>
              <li class="menu-list__item">
                <a href="/#section-about">About</a>
              </li>
              <li class="menu-list__item">
                <a href="/#section-skills">Coding Skills</a>
              </li>
              <li class="menu-list__item">
                <a href="/#section-exp">Experience</a>
              </li>
              <li class="menu-list__item">
                <a href="/#section-education">Education</a>
              </li>
              <li class="menu-list__item">
                <a href="/#section-portfolio">Portfolio</a>
              </li>
              <li class="menu-list__item">
                <a href="/#section-contacts">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Download CV Button -->
        <a href="#" class="header-download-btn" target="_blank">
          <span>Download CV</span>
          <i class="icon fas fa-download"></i>
        </a>
      </header>

      <!-- Content Wrapper -->
      <div class="content-wrp">
        <!-- Aside Photo -->
        <aside class="aside-photo">
          <div class="aside-photo__img"></div>
        </aside>

        <!-- Sections Wrapper -->
        <div class="sections-wrp">
          <!-- Home Section -->
          <section class="section home" id="section-home">
            <div class="home__title">
              <h3>Maiia Alexeeva</h3>
              <h4>Front-end Developer</h4>
            </div>
    
            <p class="home__greeting">
              Hello! I am Front-end Developer from Russia, Nizhny Novgorod. I have
              over 2 years of develpment experience and passion for new
              technologies in web
            </p>
            
          </section>
    
          <!-- About Section -->
          <section class="section about" id="section-about">
            <div class="content">
              <h3>About Me</h3>
    
              <p class="about-text">
                Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed
                cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor
                sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit
                non, turpis. Pellentesque posuere. Praesent turpis. Aenean posuere,
                tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin
                urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat
                a, suscipit non, turpis. Donec elit libero, sodales nec, volutpat a,
                suscipit non, turpis.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
`;
