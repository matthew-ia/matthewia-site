/**
 * Creates an invisible div just to detect the size of the scrollbar(s)
 * @returns {*[]} – array of sizes, width and height (horizontal and vertical)
 */
export function getScrollBarSizes() { // call after document is finished loading
  let el = document.createElement('div');
  el.style.visibility = 'hidden';
  el.style.overflow = 'scroll';
  document.body.appendChild(el);
  let w = el.offsetWidth-el.clientWidth;
  let h = el.offsetHeight-el.clientHeight;
  document.body.removeChild(el);
  let sizes = [w, h];
  return sizes;
}

/**
 * Pads a number with zeroes so its at least 2 digits in width
 * @param number – the number to pad
 * @returns {*} – the number as a string, padded with 0s if applicable
 */
export function padNum(number) {
  if (number<=99) number = ("000"+number).slice(-2);
  return number;
}

/**
 * FIXME: [DEPRECATED]
 * @param e – wheel event
 */
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

/**
 * Dynamically sets the column container div's width to be the same width as the
 * first image in the column if there is one.
 * This allows the other children to utilize the max-width style and not have to
 * hardcode a width on the .col class before runtime.
 */
export function setDynamicColumnWidth() {
  let columns = document.getElementsByClassName('col');
  if (columns) { // exists
    for (let col of columns) {
      let firstImage;
      for (let child of col.childNodes) {
        if (child.tagName === 'IMG') {
          firstImage = child;
          break;
        }
      }
      // If no images in column, check for p tag.
      let text;
      for (let child of col.childNodes) {
        if (child.tagName === 'P') {
          text = child;
        }
      }
      if (firstImage) { // exists
        col.style.width = window.getComputedStyle(firstImage).getPropertyValue('width');;
      } else if (text) { // if text exists, a p tag was found, so set a max-width value.
        col.style.maxWidth = "25vw";
      }
    }
  }
}

export function loadPage() {
  let pageContent = document.getElementById('main-content');
  pageContent.classList.remove('load');
  pageContent.classList.remove('load-done');
  // https://css-tricks.com/restart-css-animation/
  void pageContent.offsetWidth; // for some reason very necessary
  pageContent.classList.add('load');
  pageContent.classList.add('load-done');
  console.log("yeah!");
}
