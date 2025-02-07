import { showCurrentExample } from './examples-controller.js';
import { focusTextArea } from './text-area.js';
import { setOSK } from './test.js'; //note: circular dependency
import { DropdownMenu } from './dropdown-menu.js';

export const devices = {
  Windows: { name: 'Windows', browser: 'chrome', formFactor: 'desktop', OS: 'windows', touchable: false, dimensions: [640, 300] },
  macOS: { name: 'macOS', browser: 'chrome', formFactor: 'desktop', OS: 'macosx', touchable: false, dimensions: [640, 300] },
  Linux: { name: 'Linux', browser: 'chrome', formFactor: 'desktop', OS: 'linux', touchable: false, dimensions: [640, 300] },
  iPhone: { name: 'iPhone', browser: 'chrome', formFactor: 'phone', OS: 'ios', touchable: true, dimensions: [527, 280] },
  iPadMini: { name: 'iPad Mini', browser: 'chrome', formFactor: 'tablet', OS: 'ios', touchable: true, dimensions: [829, 300] },
  Pixel5: { name: 'Google Pixel 5', browser: 'chrome', formFactor: 'phone', OS: 'android', touchable: true, dimensions: [551, 290] },
  Nexus9: { name: 'Google Nexus 9', browser: 'chrome', formFactor: 'tablet', OS: 'android', touchable: true, dimensions: [763, 300] },
};

export let currentDevice = null;

let deviceDropdown = null;

if (document.readyState === 'complete') {
  loadDevices();
} else {
  window.addEventListener('load', loadDevices);
}

function loadDevices() {
  if(!isTouchDevice()) {
    document.body.classList.add('desktop-device');
    deviceDropdown = new DropdownMenu('device');
    currentDevice = window.sessionStorage.getItem('current-device');
    if(!devices[currentDevice]) currentDevice = 'Windows';
    deviceDropdown.set(currentDevice);
    deviceDropdown.onclick = (value) => {
      currentDevice = value;
      setOSK();
      focusTextArea();
      window.sessionStorage.setItem('current-device', currentDevice);
      showCurrentExample();
    };
  } else {
    document.body.classList.add('touch-device');
  }
}

export function isTouchDevice() {
  return keyman.util.isTouchDevice();
}

export function isTablet() {
  return keyman.util?.config?.hostDevice?.formFactor == 'tablet';
}
