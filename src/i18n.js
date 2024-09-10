import i18next from '../lib/i18next/i18next.js';

import { localizedElements, resources } from './translations.js';

const startupLanguage = window.sessionStorage.getItem('current-language') ?? 'km';

await i18next.init({
  lng: startupLanguage,
  // debug: true,
  resources
});

const callbacks = [];

// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function

function localizeElement(id) {
  document.getElementById(id).innerHTML = i18next.t(id, {interpolation:{escapeValue: false}});
}

function localize() {
  localizedElements.forEach(element => localizeElement(element));
  callbacks.forEach(callback => callback(i18next.t));

  document.title = i18next.t('title');
  document.getElementById('ta1').placeholder = i18next.t('text-placeholder');
}

export function translate(id, params) { return i18next.t(id, params) }

const btnKhmer = document.getElementById('btn-language-khmer');
const btnEnglish = document.getElementById('btn-language-english');

btnKhmer.addEventListener('click', () => selectLanguage('km'));
btnEnglish.addEventListener('click', () => selectLanguage('en'));

export function currentLanguage() {
  return i18next.language;
}

export function selectLanguage(id) {
  window.sessionStorage.setItem('current-language', id);
  i18next.changeLanguage(id).then(localize);

  if(id == 'km') {
    btnKhmer.checked = true;
  } else {
    btnEnglish.checked = true;
  }
  const menuKhmer = document.querySelector('button[data-menu="#menu-khmer"]');
  const menuEnglish = document.querySelector('button[data-menu="#menu-english"]');

  if(menuKhmer) menuKhmer.checked = id == 'km';
  if(menuEnglish) menuEnglish.checked = id == 'en';
}

window.addEventListener('load', () => selectLanguage(startupLanguage));

export function register(callback) {
  callbacks.push(callback);
  callback(i18next.t);
}