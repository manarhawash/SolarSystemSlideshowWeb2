const planets = [
  "sun","mercury","venus","earth",
  "mars","jupiter","saturn","uranus","neptune"
];
let currentIndex = 0;

const imgEl    = document.getElementById('planetImg');
const labelEl  = document.getElementById('lblPlanet');
const btnNext  = document.getElementById('btnNext');
const btnPrev  = document.getElementById('btnPrevious');

function showPlanet() {
  const name = planets[currentIndex];
  imgEl.src   = `images/${name}.jpg`;
  labelEl.textContent = name.toUpperCase();
  btnPrev.disabled = currentIndex === 0;
  btnNext.disabled = currentIndex === planets.length - 1;
}

btnNext.addEventListener('click', () => {
  if (currentIndex < planets.length - 1) {
    currentIndex++;
    showPlanet();
  }
});
btnPrev.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    showPlanet();
  }
});

showPlanet();
