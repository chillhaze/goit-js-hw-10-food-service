const { Theme } = require('./constants');

let newArr = [];

const funqAdd = function betterCodeMsg() {
  const newMenuTitle = document.querySelectorAll('.card__name');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === Theme.DARK) {
    newMenuTitle.forEach((title, index) => {
      localStorage.setItem(`h2-backups-${index + 1}`, title.innerHTML);

      const prevTitle = localStorage.getItem(`h2-backups-${index + 1}`);
      newArr.push(prevTitle);

      title.innerHTML = ' Подскажите, как сделать код лучше? ';
      title.style.color = '#f1e919';

      return newArr;
    });
  }
};

module.exports = funqAdd;
