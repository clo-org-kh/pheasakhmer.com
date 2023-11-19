/* Keyboard Buttons */

document.getElementById('btn-khmer-angkor').addEventListener('click', () => setKeyboard('Keyboard_khmer_angkor', 'km'));
document.getElementById('btn-khmer-nida').addEventListener('click', () => setKeyboard('Keyboard_basic_kbdkni', 'km'));
document.getElementById('btn-system-keyboard').addEventListener('click', () => setKeyboard('', 'km'));

const keyboardDropdown = new DropdownMenu('keyboards');
keyboardDropdown.onclick = (value) => {
  let text = '';
  switch(value) {
    case '#btn-dd-khmer-angkor': setKeyboard('Keyboard_khmer_angkor', 'km'); text = 'Khmer Angkor'; break;
    case '#btn-dd-khmer-nida': setKeyboard('Keyboard_basic_kbdkni', 'km'); text = 'Khmer NIDA'; break;
    default: setKeyboard('', 'km'); text = 'System Keyboard'; break;
  }
  document.getElementById('selected-keyboard').innerText = text;
  focusTextArea();
};

keyboardDropdown.add('#btn-dd-khmer-angkor', 'Khmer Angkor');
keyboardDropdown.add('#btn-dd-khmer-nida', 'Khmer NIDA');
keyboardDropdown.add('#btn-dd-system-keyboard', 'System Keyboard');
keyboardDropdown.set('#btn-dd-khmer-angkor');