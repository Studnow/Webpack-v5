import _ from 'lodash';
import './main.sass'
// import "./style.css";
import Logo from "./components/iamp-logo.svg";
// import printMe from "./component/print";
import './components/button/button';
import button from './components/button/button';
import Vue from 'vue';

const component = () => {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = "Hello webpack. HMR is not working";
  element.classList.add("hello");
  element.addEventListener('click', el => el.target.classList.toggle('hello'))

  const myLogo = new Image();
  myLogo.src = Logo;

  element.appendChild(myLogo);

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = () => console.log('buttonOnclick');

  /* Lazy load and split chunk */
  // btn.onclick = e => import(/* webpackChunkName: 'print' */ './components/print').then(module => {
  //   const print = module.default;
  //   print();
  // })
  /* LL end */

  element.appendChild(btn);

  return element;
};

document.body.appendChild(component());

button()

window.Vue = require('vue')

Vue.component('example-component', require('./components/Example.vue').default)
Vue.component("aside-component", require("./components/aside.vue").default);

const app = new Vue({
  el: '#app'
})

// const aside = new Vue({
//   el: '#aside'
// })