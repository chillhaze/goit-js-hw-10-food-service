import { Theme } from './constants';

const body = document.querySelector('body');
const toggle = document.querySelector('#theme-switch-toggle');
toggle.addEventListener('change', onToggleChange);

// установка темы при загрузке страницы
window.onload = () => {
  const actualUserTheme = localStorage.getItem('theme');

  if (actualUserTheme === Theme.DARK) {
    body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    toggle.checked = localStorage.getItem('chkbx-active');
  } else {
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
};

// переключение темы через чекбокс
function onToggleChange() {
  const userTheme = localStorage.getItem('theme');
  let chkbxValue = toggle.checked;
  console.log(chkbxValue);

  if (userTheme === Theme.LIGHT) {
    localStorage.setItem('chkbx-active', chkbxValue);
    localStorage.removeItem(userTheme);
    localStorage.setItem('theme', Theme.DARK);

    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    // console.log(localStorage.getItem('theme'));
  } else {
    localStorage.setItem('chkbx-active', chkbxValue);
    localStorage.removeItem(userTheme);
    localStorage.setItem('theme', Theme.LIGHT);

    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    // console.log(localStorage.getItem('theme'));
  }
}
