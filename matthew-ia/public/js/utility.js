window.onload = () => {
  document.getElementById('dimensions').textContent =
    window.innerWidth + "x" + window.innerHeight;
};

window.onresize = () => {
  let dimensions = document.getElementById('dimensions');
  dimensions.textContent = window.innerWidth + "x" + window.innerHeight;
  console.log(dimensions);
};