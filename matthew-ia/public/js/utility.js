window.onload = () => {
  document.getElementById('dimensions').textContent =
    window.innerWidth + "x" + window.innerHeight;

  // Scroll to specific values
  // scrollTo is the same
  window.scroll({
    top: 2500,
    left: 0,
    behavior: 'smooth'
  });
  
  // Horizontal Scrolling
  document.addEventListener('wheel', function(e)
  {
    if(e.type !== 'wheel')
    {
      return;
    }
    let delta = ((e.deltaY || -e.wheelDelta || e.detail) >> 10) || 1;
    delta = delta * (-300);
    document.documentElement.scrollLeft -= delta;
    e.preventDefault();
  });
};

window.onresize = () => {
  let dimensions = document.getElementById('dimensions');
  dimensions.textContent = window.innerWidth + "x" + window.innerHeight;
  console.log(dimensions);
};