import cardsTemplate from './templates/cards-template.hbs';
import menuCards from './menu.json';
// import './node_modules/modern-normalize/modern-normalize.css';
import '../node_modules/modern-normalize/modern-normalize.css';
import './sass/main.scss';
import './js/color-theme.js';
import './js/better-code.js';

cardsTemplate(menuCards);

const list = document.querySelector('ul.js-menu');
const cardsMarkup = createCardsMarkup(menuCards);

list.insertAdjacentHTML('beforeEnd', cardsMarkup);

// Функция создания разметки по шаблону
function createCardsMarkup(menuCards) {
  // return menuCards.map(card => cardsTemplate(card)).join('');
  return menuCards.map(cardsTemplate).join('');
}
