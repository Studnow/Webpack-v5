// css

import "./styles/style.css";
import "./styles/utils/dropdowns/profileDropdown.css";
// import "./styles/main.sass";
// import "tailwindcss/tailwind.css";

// js

import Alpine from "alpinejs";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { json, response } from "express";

// register Alpine extension code between import and start()

window.Alpine = Alpine;

Alpine.data("dropdown", () => ({
  open: false,

  toggle() {
    this.open = !this.open;
  },
}));

Alpine.start();

// AOS.init({
//   duration: 1200,
// });

// let doc = document.getElementById("main");
// doc.style.backgroundColor = "lightblue";

// fetch("http://wp.uiamp/wp-json/wp/v2/posts")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch("http://localhost:8000/wp-json/wp/v2/posts")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
