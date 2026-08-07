import './styles.css';
import _ from 'lodash';
import logo from './assets/images/logo.png';

function component() {
  const element = document.createElement('div');

  // Використання зовнішньої бібліотеки (lodash)
  element.innerHTML = _.join(['Created', 'with', 'Lodash'], ' ');
  element.classList.add('lodash-text');

  // Робота з зображенням через JS
  const myIcon = new Image();
  myIcon.src = logo;
  myIcon.width = 100;
  myIcon.style.marginBottom = '10px';

  element.prepend(myIcon);

  return element;
}

document.getElementById('content').appendChild(component());
