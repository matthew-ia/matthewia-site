export function getScrollBarSizes() { // call after document is finished loading
  let el= document.createElement('div');
  el.style.visibility= 'hidden';
  el.style.overflow= 'scroll';
  document.body.appendChild(el);
  let w= el.offsetWidth-el.clientWidth;
  let h= el.offsetHeight-el.clientHeight;
  document.body.removeChild(el);
  return new Array(w, h);
}