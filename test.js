/* Global Variables */

let helpUrl = ''; // Will be updated when we retrieve the server API version
let versionMajor = '16.0'; // will be updated from the server when we retrieve the server API version

const ta1 = document.getElementById('ta1');

const devices = {
  Windows:         { name: 'Windows',           browser: 'chrome', formFactor: 'desktop', OS: 'windows', touchable: false, dimensions: [640, 300] },
  macOS:           { name: 'macOS',             browser: 'chrome', formFactor: 'desktop', OS: 'macosx',  touchable: false, dimensions: [640, 300] },
  Linux:           { name: 'Linux',             browser: 'chrome', formFactor: 'desktop', OS: 'linux',   touchable: false, dimensions: [640, 300] },
  iPhone:          { name: 'iPhone',            browser: 'chrome', formFactor: 'phone',   OS: 'ios',     touchable: true,  dimensions: [527, 280] },
  iPadMini:        { name: 'iPad Mini',         browser: 'chrome', formFactor: 'tablet',  OS: 'ios',     touchable: true,  dimensions: [829, 300] },
  Pixel5:          { name: 'Google Pixel 5',    browser: 'chrome', formFactor: 'phone',   OS: 'android', touchable: true,  dimensions: [551, 290] },
  Nexus9:          { name: 'Google Nexus 9',    browser: 'chrome', formFactor: 'tablet',  OS: 'android', touchable: true,  dimensions: [763, 300] },
};

function enableControls(enable) {
  ['ta1', 'btn-menu', 'btn-device'].forEach(btn => {
    if(enable) {
      document.getElementById(btn).removeAttribute('disabled');
    } else {
      document.getElementById(btn).setAttribute('disabled', '');
    }
  });
}

function focusTextArea() {
  ta1.focus();
}

let keymanInitialized = false;
enableControls(false);

if(!isTouchDevice()) {
  document.body.className = 'osk-always-visible';
}

keyman.init({
  ui:'button',
  resources:'/resource/',
  keyboards:'/keyboards/',
  attachType:'manual',
  setActiveOnRegister:false
}).then(function() {
  keyman.attachToControl(ta1);
  enableControls(true);
  keymanInitialized = true;
});

/* Initialization */

/* Dropdown menus */

class DropdownMenu {
  constructor(id) {
    this.id = id;
    this.container = document.getElementById('dropdown-'+id);
    this.container.querySelectorAll('ul li button').forEach(item => this.attach(item));
  }

  /*private*/ attach(item) {
    item.addEventListener('click', () => {
      this.removeActive();
      item.classList.add('active');
      if(this.onclick) {
        this.onclick(item.dataset[this.id]);
      }
    });
  }

  /*private*/ removeActive() {
    this.container.querySelectorAll('ul li button.active').forEach(item => item.classList.remove('active'));
  }

  /*private*/ getItem(value) {
    return this.container.querySelector('ul li button[data-'+this.id+'="'+value+'"]');
  }

  get() {
    let item = this.container.querySelector('ul li button.active');
    return item ? item.dataset[this.id] : null;
  }

  set(value) {
    this.removeActive();
    let item = this.getItem(value);
    if(item) item.classList.add('active');
  }

  add(value, text) {
    let li = document.createElement('li');
    let button = document.createElement('button');
    button.className="dropdown-item";
    button.type="button";
    button.dataset[this.id] = value;
    button.innerText = text;
    li.appendChild(button);
    this.container.querySelector('ul').appendChild(li);
    this.attach(button);
  }

  addDivider() {
    let li = document.createElement('li');
    let hr = document.createElement('hr');
    hr.className = 'dropdown-divider';
    li.appendChild(hr);
    this.container.querySelector('ul').appendChild(li);
  }

  remove(value) {
    let item = this.getItem(value);
    if(item) {
      item.parentElement.parentNode.removeChild(item.parentElement);
    }
  }

  removeAll() {
    this.container.querySelector('ul').innerHTML = '';
  }
}

/*
document.getElementById('btn-dd-khmer-angkor').addEventListener('click', () => {
  setKeyboard('Keyboard_khmer_angkor', 'km');
  document.getElementById('')
});
document.getElementById('btn-dd-khmer-nida').addEventListener('click', () => setKeyboard('Keyboard_basic_kbdkni', 'km'));
document.getElementById('btn-dd-system-keyboard').addEventListener('click', () => setKeyboard('', 'km'));
*/

window.onload = function() {
  window.setTimeout(
    function () {
      focusTextArea();
    }, 10
  );

  let newOSK = null;
  let deviceDropdown = null;
  let currentDevice = null;

  if(!isTouchDevice()) {
    deviceDropdown = new DropdownMenu('device');
    currentDevice = window.sessionStorage.getItem('current-device');
    if(!devices[currentDevice]) currentDevice = 'Windows';
    deviceDropdown.set(currentDevice);
    deviceDropdown.onclick = (value) => {
      currentDevice = value;
      setOSK();
      focusTextArea();
      window.sessionStorage.setItem('current-device', currentDevice);
    };
  } else {
    document.body.classList.add('touch-device');
  }

  function setOSK() {
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

  setOSK();

  function setActiveButton(activeId) {
    const keyboardButtons = [
      'btn-khmer-angkor', 'btn-khmer-nida', 'btn-system-keyboard'
    ];
    keyboardButtons.forEach(id => {
      const btn = document.getElementById(id);
      if(id == activeId) {
        btn.classList.remove('bg-light');
        btn.classList.add('btn-primary');
      } else {
        btn.classList.add('bg-light');
        btn.classList.remove('btn-primary');
      }
    });
  }

  keyman.addEventListener('keyboardchange', function(keyboardProperties) {
    if(newOSK) {
      keyman.osk = newOSK;  // Note: undocumented KeymanWeb API
      newOSK.activeKeyboard = keyman.contextManager.activeKeyboard;  // Note: undocumented KeymanWeb API refs on both sides
    }
    switch(keyboardProperties.internalName) {
      case 'Keyboard_khmer_angkor': setActiveButton('btn-khmer-angkor'); break;
      case 'Keyboard_basic_kbdkni': setActiveButton('btn-khmer-nida'); break;
      default: setActiveButton('btn-system-keyboard');
    }
  });
}

/* Load keyboards */

keyman.addKeyboards(/*{
  id: 'khmer_angkor',
  name: 'Khmer Angkor',
  language: {
    id: 'km',
    name: 'Khmer',
    region: 'Asia',
  },
  filename: '/keyboards/khmer_angkor.js'
},

{
  id: 'basic_kbdkni',
  name: 'Khmer NIDA',
  language: {
    id: 'km',
    name: 'Khmer',
    region: 'Asia',
  },
  filename: '/keyboards/basic_kbdkni.js'
}*/
'khmer_angkor', 'basic_kbdkni').then(() => {
  setKeyboard('Keyboard_khmer_angkor', 'km');
});

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

function isTouchDevice() {
  return keyman.util.isTouchDevice();
}