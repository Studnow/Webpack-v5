// css

import "./styles/style.css";
// import "./styles/main.sass";
// import "tailwindcss/tailwind.css";

// js

import Alpine from "alpinejs";
import AOS from "aos";
import "aos/dist/aos.css";

// register Alpine extension code between import and start()

window.Alpine = Alpine;

Alpine.data("dropdown", () => ({
  open: false,

  toggle() {
    this.open = !this.open;
  },
}));

Alpine.start();

AOS.init({
  duration: 1200,
});
