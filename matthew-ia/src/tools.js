export function getScrollBarSizes() { // call after document is finished loading
  let sizes = [];
  let el= document.createElement('div');
  el.style.visibility= 'hidden';
  el.style.overflow= 'scroll';
  document.body.appendChild(el);
  let w= el.offsetWidth-el.clientWidth;
  let h= el.offsetHeight-el.clientHeight;
  document.body.removeChild(el);
  sizes = [w, h];
  return sizes;
}

export function padNum(number) {
  if (number<=99) number = ("000"+number).slice(-2);
  return number;
}