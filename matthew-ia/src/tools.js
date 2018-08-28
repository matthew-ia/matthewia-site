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

/**
 * Adjust the white space between the bottom navbar and the scrollbar. This prevents
 * the content from visually shifting upwards on load when the page has a scrollbar.
 * @param defaultMargin (optional)
 * @returns {string} – the margin value to set
 */
export function adjustNavbar(defaultMargin) {
  // Adjust the white space between the bottom navbar and the scrollbar. This prevents
  // the content from visually shifting upwards on load when the page has a scrollbar.
  //

  if (defaultMargin !== undefined) {
    console.log("state: ", defaultMargin);
    document.getElementById('bottom-nav').style.marginBottom = defaultMargin + "px";
    return; // Return nothing, ignore rest of code.
  }

  // Get scroll bar height using tools.getScrollBarSizes (works for all browsers).
  let scrollBarHeight = getScrollBarSizes()[0];
  console.log("scrollBarHeight: ", scrollBarHeight);
  if (scrollBarHeight === 0) return; // Return nothing, ignore rest of code.
  // Store navbar element.
  let navbar = document.querySelector('#bottom-nav');
  // Get resolved value for bottom margin (excluding units, i.e. 'px').
  let computedMarginBottom = window.getComputedStyle(navbar)
    .getPropertyValue('margin-bottom').slice(0, -2);
  // Calculate and store the new margin-bottom value.
  let newMarginBottom = computedMarginBottom - scrollBarHeight;
  // Set the new margin-bottom value on the navbar element.
  navbar.style.marginBottom = newMarginBottom +  "px";

  // Return the original margin-bottom value to be set as a state for unmounting in component
  return computedMarginBottom;
}

/**
 * FIXME: [DEPRECATED]
 * Adjust the white space between the bottom of the Floating List of projects
 * and the scrollbar. This prevents the list from from visually shifting upwards
 * on load when the page has a scrollbar.
 * @param defaultTop
 */
export function adjustFloatingList(defaultTop) {
  // Adjust the white space between the bottom of the Floating List of projects
  // and the scrollbar. This prevents the list from from visually shifting upwards
  // on load when the page has a scrollbar.
  let floatingList = document.querySelector('#floating-list'); // Get element.
  let top = window.getComputedStyle(floatingList).top; // Get current style value.
  let newTop = parseFloat(top.slice(0, -2)) + 6; // Calculate new value.
  floatingList.style.top = newTop + "px"; // Set style to new value.
}
