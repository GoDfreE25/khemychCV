let nightModButton = document.getElementById('nightModButton');
let nightModSelector = false;

nightModButton.onclick = function() {
  let colorMod = document.getElementById('colorMod');

  if (nightModSelector === false) {
    colorMod.href = 'css/darkMod.css';
    nightModSelector = true;
  } else {
    colorMod.href = 'css/lightMod.css';
    nightModSelector = false;
  }
}
