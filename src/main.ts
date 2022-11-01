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

//Handle form

// const form: HTMLFormElement | null = document.querySelector("#form");

// if (form) {
//   const data = new FormData(form);
//   const name = data.get('name');
//   const email = data.get('email');
//   const message = data.get('message')

//   form.reset();
// }
