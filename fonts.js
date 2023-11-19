function selectFont(id) {
  ta1.classList.remove('font-khmer-busra-test');
  ta1.classList.remove('font-khmer-mondulkiri');
  ta1.classList.remove('font-noto-sans-khmer');
  ta1.classList.remove('font-system');
  ta1.classList.add('font-'+id);
}

function addFontsToMenu() {
  menuDropdown.add('#font-khmer-busra-test', 'Use Khmer Busra Test font (new structure)');
  menuDropdown.add('#font-khmer-mondulkiri', 'Use Khmer Mondulkiri font (old structure)');
  menuDropdown.add('#font-noto-sans-khmer', 'Use Noto Sans Khmer font (old structure)');
  menuDropdown.add('#font-system', 'Use system font (old structure)');
  menuDropdown.set('#font-khmer-busra-test');
}