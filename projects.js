

// = = = = = RANDOMIZER IMAGE LOGIC = = = = =
const randomizerImages = [
  './randomizer-login.png',
  './randomizer-dashboard.png',
  './randomizer-settings.png',
  './randomizer-winners.png',
]
let index = 0;
const randomizerElement = document.querySelector('.randomizer');
let intervalId;
function startInterval() {
  intervalId = setInterval(() => {
    if(index == randomizerImages.length) { index = 0;}
    randomizerElement.style.backgroundImage = `url(${randomizerImages[index]})`;
    index++
  }, 500);
}
function stopInterval() {
  clearInterval(intervalId);
  randomizerElement.style.backgroundImage = `url(${randomizerImages[1]})`;
}

randomizerElement.addEventListener('mouseenter', startInterval);
randomizerElement.addEventListener('mouseleave', stopInterval);


// = = = = = NIKE VIDEO AUTOPLAY LOGIC = = = = =

const nikeImage = document.querySelector('.nike-image');
const nikeContainer = document.querySelector('.nike');
nikeContainer.addEventListener('mouseenter', ()=>{
  nikeImage.src = './nike-gif.gif'
})
nikeContainer.addEventListener('mouseleave', ()=>{
  nikeImage.src = './nike-home-1.png'
})