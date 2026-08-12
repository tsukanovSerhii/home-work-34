import './styles/styles.css';
import './styles/feature-card.less';
import './styles/button.scss';
import _ from 'lodash';
import bgImage from './assets/images/bg.png';
import { featuresData } from './data/data';

function initApp() {
  const container = document.getElementById('app-container');
  
  const title = document.createElement('h1');
  title.textContent = 'Webpack in Action';
  
  const desc = document.createElement('p');
  desc.className = 'description';
  desc.textContent = 'This modern UI is bundled entirely through Webpack. It demonstrates dynamic CSS styling, glassmorphism, background images and vendor splitting in real-time.';
  
  const featuresBox = document.createElement('div');
  featuresBox.className = 'features';
  
  // Використовуємо Lodash (винесений в окремий чанк)
  _.forEach(featuresData, (feature) => {
    const card = document.createElement('div');
    card.className = 'feature-card';
    card.innerHTML = `<h3>${feature.title}</h3><p>${feature.desc}</p>`;
    featuresBox.appendChild(card);
  });
  
  const btn = document.createElement('button');
  btn.className = 'interactive-btn';
  btn.textContent = 'Click to test Lodash logic';
  
  btn.addEventListener('click', () => {
    const randomFeature = _.sample(featuresData);
    btn.textContent = `Random: ${randomFeature.title}!`;
    setTimeout(() => { btn.textContent = 'Click to test Lodash logic'; }, 2000);
  });
  
  const fontTest = document.createElement('div');
  fontTest.className = 'local-font-test';
  fontTest.textContent = 'Local font bundled successfully by Webpack asset modules.';

  container.append(title, desc, featuresBox, btn, fontTest);
}

// Запускаємо рендер
document.addEventListener('DOMContentLoaded', initApp);
