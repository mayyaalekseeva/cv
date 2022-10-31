import "./css/style.scss";
import "@fortawesome/fontawesome-free/css/all.css";

const header = document.getElementById("header")!;

window.onscroll = () => {
  "use strict";
  if (header) {
    if (
      document.body.scrollTop >= 280 ||
      document.documentElement.scrollTop >= 280
    ) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  }
};

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

if (burger && nav) {
  burger.onclick = () => {
    burger.classList.toggle("burger__active");

    nav.classList.toggle("nav__active");
  };

  document.querySelectorAll(".menu-list__item a").forEach((item) => {
    item.addEventListener("click", () => {
      burger.classList.toggle("burger__active");
      nav.classList.toggle("nav__active");
    });
  });
}

// document.querySelector<HTMLDivElement>("#app")!.innerHTML = `

// `;
