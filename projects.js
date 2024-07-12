

// = = = = = RANDOMIZER IMAGE LOGIC = = = = =

const randomizerImage = document.querySelector('.randomizer-image');
const randomizerContainer = document.querySelector('.randomizer');
randomizerContainer.addEventListener('mouseenter', ()=>{
  randomizerImage.src = './randomizer-gif.gif'
})
randomizerContainer.addEventListener('mouseleave', ()=>{
  randomizerImage.src = './randomizer-dashboard.png'
})


// = = = = = NIKE VIDEO AUTOPLAY LOGIC = = = = =

const nikeImage = document.querySelector('.nike-image');
const nikeContainer = document.querySelector('.nike');
nikeContainer.addEventListener('mouseenter', ()=>{
  nikeImage.src = './nike-gif.gif'
})
nikeContainer.addEventListener('mouseleave', ()=>{
  nikeImage.src = './nike-home-1.png'
})