// import _ from 'lodash';
// import './style.css';
// import Logo from './iamp-logo.svg';
// import printMe from './print'

// function component() {
//   const element = document.createElement('div');
//   const btn = document.createElement('button');

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add('hello');

//   const myLogo = new Image();
//   myLogo.src = Logo;

//   element.appendChild(myLogo);

//   btn.innerHTML = 'Click me and check the console!';
//   btn.onclick = printMe;

//   element.appendChild(btn);

//   return element;
// }

// document.body.appendChild(component());

function getComponent() {
  return import('lodash').then(({ default: _ }) => {
    const element = document.createElement('div');

    element.innerHTML = _.join(["Hello", 'webpack'], " ");

    return element;
  })
    .catch((error) => 'An error occured while loading the component');
}

getComponent().then((component) => {
  document.body.appendChild(component);
})