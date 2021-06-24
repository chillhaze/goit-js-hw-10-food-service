const toggle = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

toggle.addEventListener('change', onToggleChange);

function onToggleChange(e) {
  if (toggle.checked) {
    document.querySelector('body').classList.remove('light-theme');
    document.querySelector('body').classList.add('dark-theme');
    console.log(localstorage);
  } else {
    document.querySelector('body').classList.remove('dark-theme');
    document.querySelector('body').classList.add('light-theme');
  }
}

// let theme = 'light';
// function onToggleChange(e) {
//   if (theme === 'light') {
//     theme = 'dark';
//
//   } else {
//     theme === 'light';
//     document.querySelector('body').classList.add('light-theme');
//   }
// }

// function onToggleChange(e) {
//   console.log(e.target);
//
// }
