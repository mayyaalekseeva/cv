import "./css/style.scss";
import "@fortawesome/fontawesome-free/css/all.css";

//Header changes background on tablet width

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

//Tablet burger menu

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const body = document.body;

//Prevent scroll on iOS
let scrollPosition = 0;

if (
  burger &&
  nav &&
  window.getComputedStyle(burger).display !== "none" &&
  body.clientWidth < 1080
) {
  burger.onclick = () => {
    burger.classList.toggle("burger__active");
    nav.classList.toggle("nav__active");
    scrollPosition = window.pageYOffset;
    body.classList.toggle("overflow");
    body.style.top = `-${scrollPosition}px`;
  };

  document.querySelectorAll(".menu-list__item a").forEach((item) => {
    item.addEventListener("click", () => {
      burger.classList.toggle("burger__active");
      nav.classList.toggle("nav__active");
      body.classList.toggle("overflow");
      body.style.removeProperty("top");
      window.scrollTo(0, scrollPosition);
    });
  });
}

//Handle textarea

const textarea = document.querySelector("#message") as HTMLTextAreaElement;
if (textarea) {
  const autoResize = (el: HTMLTextAreaElement) => {
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  textarea.addEventListener("input", () => autoResize(textarea), false);
}

//Handle form

// const form: HTMLFormElement | null = document.querySelector("#form");

// if (form) {
//   const data = new FormData(form);
//   const name = data.get('name');
//   const email = data.get('email');
//   const message = data.get('message')

//   form.reset();
// }
