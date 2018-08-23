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

export function horizontalScroll(e) {
  if(e.type !== 'wheel')
  {
    return;
  }
  let delta = ((e.deltaY || -e.wheelDelta || e.detail) >> 10) || 1;
  delta = delta * (-300);
  document.documentElement.scrollLeft -= delta;
  e.preventDefault();
}

// Credit:  https://davidwalsh.name/javascript-debounce-function
//          Underscore.js – https://underscorejs.org/
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
export function debounce(func, wait, immediate) {
  console.log("debouncing...");
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
