import { focusTextArea, ta1 } from './text-area.js';
import { register, translate } from './i18n.js';
import { DropdownMenu } from './dropdown-menu.js';
import { isTouchDevice } from './device.js';

let activeSystem = null;

const SystemNames = {
  today: { prefix: '', full: '' },
  future: { prefix: '', full: '' },
}

const systemDropdown = new DropdownMenu('system');

function fillSystemDropdown(t) {
  systemDropdown.removeAll();
  systemDropdown.add('#btn-dd-today', t('system-today-long'));
  systemDropdown.add('#btn-dd-future', t('system-future-long'));

  const currentSystem = window.sessionStorage.getItem('current-system') ?? 'today';
  document.getElementById('selected-system').innerText = translate('system-'+currentSystem);
  systemDropdown.set('#btn-dd-' + currentSystem);
}

register(fillSystemDropdown);

systemDropdown.onclick = (value) => {
  switch(value) {
    case '#btn-dd-today': selectSystem('today'); break;
    case '#btn-dd-future': selectSystem('future'); break;
  }
  focusTextArea();
};


function selectFont(id) {
  ta1.classList.remove('font-khmer-busra-test');
  ta1.classList.remove('font-khmer-mondulkiri');
  ta1.classList.remove('font-noto-sans-khmer');
  ta1.classList.remove('font-khmer-os-battambang');
  ta1.classList.remove('font-system');
  ta1.classList.add('font-'+id);
}


export function selectSystem(system) {
  let text = '';
  activeSystem = system;
  if(system == 'today') {
    text = translate('system-today');
    setKeyboard('Keyboard_basic_kbdkni', 'km');
    selectFont('noto-sans-khmer');
  } else {
    text = translate('system-future');
    setKeyboard('Keyboard_khmer_angkor', 'km');
    selectFont('khmer-busra-test');
  }
  document.getElementById('selected-system').innerText = text;
  window.sessionStorage.setItem('current-system', system);
}

function setKeyboard(name, lang) {
  console.log('setting keyboard to '+name);
  if(name == '') {
    if(isTouchDevice()) {
      keyman.detachFromControl(ta1);
    }
  } else {
    if(isTouchDevice()) {
      keyman.attachToControl(ta1);
    }
  }
  keyman.setActiveKeyboard(name, lang);
  focusTextArea();
};
