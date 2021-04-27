// import _ from 'lodash';
import './main.sass'
// import "./style.css";
import Logo from "./component/iamp-logo.svg";
import printMe from "./print";

const component = () => {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = "Hello webpack. HMR is not work";
  element.classList.add("hello");
  element.addEventListener('click', el => el.target.classList.toggle('hello'))

  const myLogo = new Image();
  myLogo.src = Logo;

  element.appendChild(myLogo);

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
};

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept("./print.js", function () {
    console.log("Accepting the updated printMe module!");
    printMe();
  });
}

