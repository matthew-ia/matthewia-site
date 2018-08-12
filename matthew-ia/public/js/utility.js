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
};

window.onresize = () => {
  let dimensions = document.getElementById('dimensions');
  dimensions.textContent = window.innerWidth + "x" + window.innerHeight;
  console.log(dimensions);
};