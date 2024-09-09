/* Global Variables */

import { currentDevice, devices, isTouchDevice } from './device.js';
import { showCurrentExample } from './examples-controller.js';
import { showHelp } from './menu.js';
import { selectSystem } from './keyboards.js';
import { ta1, focusTextArea } from './text-area.js';

function enableControls(enable) {
  ['ta1', 'btn-menu', 'btn-device'].forEach(btn => {
    if(enable) {
      document.getElementById(btn).removeAttribute('disabled');
    } else {
      document.getElementById(btn).setAttribute('disabled', '');
    }
  });
}

let keymanInitialized = false;
enableControls(false);

if(!isTouchDevice()) {
  document.body.className = 'osk-always-visible';
}

keyman.init({
  ui:'button',
  resources:'.',
  keyboards:'../keyboards/',
  attachType:'manual',
  setActiveOnRegister:false
}).then(function() {
  keyman.attachToControl(ta1);
  enableControls(true);
  keymanInitialized = true;
});

/* Initialization */

window.addEventListener('load', function() {
  window.setTimeout(
    function () {
      focusTextArea();
    }, 10
  );



  setOSK();

  keyman.addEventListener('keyboardchange', function(keyboardProperties) {
    if(newOSK) {
      keyman.osk = newOSK;  // Note: undocumented KeymanWeb API
      newOSK.activeKeyboard = keyman.contextManager.activeKeyboard;  // Note: undocumented KeymanWeb API refs on both sides
    }
    showCurrentExample();
  });

  if(window.sessionStorage.getItem('show-help-on-startup') ?? true) {
    showHelp();
  }

  const showHelpOnStartup = document.getElementById('check-show-help-on-startup');
  showHelpOnStartup.checked = window.sessionStorage.getItem('show-help-on-startup') ?? true;
  showHelpOnStartup.addEventListener('click', function() {
    window.sessionStorage.setItem('show-help-on-startup', showHelpOnStartup.checked ? '1' : '');
  });
});

/* Load keyboards */

keyman.addKeyboards(
  'khmer_angkor', 'basic_kbdkni').then(() => {
  selectSystem(window.sessionStorage.getItem('current-system') ?? 'today');
});

/* OSK */

let newOSK = null;

export function setOSK() {
  if(isTouchDevice()) {
    return;
  }

  const targetDevice = devices[currentDevice] || devices.Windows;

  document.getElementById('osk-host-frame').className = currentDevice || 'Windows';

  if(newOSK) {
    document.getElementById('osk-host').removeChild(newOSK.element);
    keyman.osk = null;  // Note: undocumented KeymanWeb API
  }

  // Create a new on screen keyboard view and tell KeymanWeb that
  // we are using the targetDevice for context input.
  newOSK = new keyman.views.InlinedOSKView(keyman, { device: targetDevice });  // Note: KeymanWeb internal API
  keyman.core.contextDevice = targetDevice;  // Note: KeymanWeb internal API
  keyman.osk = newOSK;  // Note: undocumented KeymanWeb API

  if(document.body.offsetWidth < targetDevice.dimensions[0]) {
    newOSK.setSize('320px', '200px');
  } else {
    newOSK.setSize(targetDevice.dimensions[0]+'px', targetDevice.dimensions[1]+'px');
  }
  document.getElementById('osk-host').appendChild(newOSK.element);
}
