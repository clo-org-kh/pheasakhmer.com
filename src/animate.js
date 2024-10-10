import { focusTextArea, ta1 } from './text-area.js';

let animationInterval = null;
export function animateKeystrokes(items) {
  if(animationInterval) {
    window.clearInterval(animationInterval);
    animationInterval = null;
  }
  let n = 0;
  animationInterval = setInterval(function() {
    let isUp = n%2;
    let index = Math.trunc(n / 2);

    if(isUp) {
      releaseKey(items[index].key.key);
    }

    if(index >= items.length) {
      if(index > 0) items[index-1].element.className = '';
      window.clearInterval(animationInterval);
      animationInterval = null;
      return;
    }

    if(!isUp) {
      pressKey(items[index].key.key);
      items[index].element.className = 'animated-active';
      if(index > 0) items[index-1].element.className = '';
    }
    n++;
  }, 450);
  ta1.value = '';
  focusTextArea();
  // alert(JSON.stringify(items));
}

function pressKeyElement(id, down, longpress, popup) {
  const element = document.getElementById(id);
  if(!element) return;

  const x = keyman.util.getAbsoluteX(element);
  const y = keyman.util.getAbsoluteY(element);
  if(down) {
    element.style.background = 'green';
    if(popup) {
      element.dispatchEvent(new MouseEvent('mousemove', {clientX: x, clientY: y, bubbles: true, buttons: 1}));
    } else if(longpress) {
      element.dispatchEvent(new MouseEvent('mousedown', {clientX: x, clientY: y, buttons: 1}));
    } else {
      element.dispatchEvent(new MouseEvent('mousedown', {clientX: x, clientY: y, buttons: 1}));
      element.dispatchEvent(new MouseEvent('mouseup',{clientX: x, clientY: y, buttons: 1}));
    }
  } else {
    element.style.background = '';
    if(popup) {
      element.dispatchEvent(new MouseEvent('mouseup',{clientX: x, clientY: y, buttons: 1}));
    }
  }
}

let lastLongpress = null;

function pressKey(key) {
  if(Array.isArray(key)) {
    // modifier + key
    if(key[0] == 'longpress') {
      pressKeyElement(key[1]/*'default-K_'+key[1].toUpperCase()*/, true, true);
      lastLongpress = key;
    } else if(key[0] == 'popup') {
      pressKeyElement(/*'popup-default-'+*/key[1], true, false, true);
    } else {
      // TODO: assuming SHIFT only for now
      keyman.osk.vkbd.layerId='shift';
      pressKeyElement(/*'shift-K_'+*/key[1]/*.toUpperCase()*/, true);
    }
    // pressKeyElement('default-K_SHIFT', false);
  } else {
    // key only
    pressKeyElement(/*'default-K_'+*/key/*.toUpperCase()*/, true);
  }
}

function releaseKey(key) {
  if(Array.isArray(key)) {
    // modifier + key
    if(key[0] == 'popup') {
      pressKeyElement(key[1], false, false, true);
      if(lastLongpress) {
        pressKeyElement(lastLongpress[1], false, true);
        lastLongpress = null;
      }
    } else if(key[0] != 'longpress') {
      pressKeyElement(key[1], false);
      keyman.osk.vkbd.layerId='default';
    }
    // pressKeyElement('shift-K_SHIFT', true);
    // pressKeyElement('shift-K_SHIFT', false);
  } else {
    // key only
    pressKeyElement(key, false);
  }
}