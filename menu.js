const menuDropdown = new DropdownMenu('menu');

menuDropdown.onclick = (value) => {
  menuDropdown.set('');
  if(value == '#install-keyboard') {
    location.href = 'https://keyman.com/keyboards/khmer_angkor';
  } else if(value == '#about') {
    let aboutModal = new bootstrap.Modal(document.getElementById('about-modal'));
    aboutModal.show();
  } else if(value == '#help') {
    let helpModal = new bootstrap.Modal(document.getElementById('help-modal'));
    helpModal.show();
  } else if(value.startsWith('#font-')) {
    selectFont(value.substring('#font-'.length));
    focusTextArea();
    menuDropdown.set(value);
  }
};

function fillDropdownMenu() {
  menuDropdown.removeAll();
  menuDropdown.add('#install-keyboard', 'Install Khmer Angkor keyboard on your device');
  menuDropdown.addDivider();
  addFontsToMenu();
  menuDropdown.addDivider();
  menuDropdown.add('#help', 'Help using this website');
  menuDropdown.add('#about', 'About this website');
}

fillDropdownMenu();