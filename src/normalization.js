import { khnormal } from "khmer-normalizer";
import { ta1 } from './text-area.js';

function updateNormalizationState() {
  const content = document.getElementById('content');
  if(ta1.value == '') {
    content.className = '';
  } else {
    const s = khnormal(ta1.value);
    if(s != ta1.value) {
      content.className = 'error';
    } else {
      content.className = 'good';
    }
  }
}

window.setInterval(updateNormalizationState, 100);
