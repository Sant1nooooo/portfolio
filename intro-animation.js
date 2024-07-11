//Quote Container
const quoteContainerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animationQuoteContainer');
      }
      else
      {
          entry.target.classList.remove('animationQuoteContainer');
      }
  });
});
const quoteContainerElement = document.querySelector('.hiddenQuoteContainer');
quoteContainerObserver.observe(quoteContainerElement);



//Service Title
const serviceTitleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animationServiceTitle');
      }
      else
      {
          entry.target.classList.remove('animationServiceTitle');
      }
  });
});
const serviceTitleElement = document.querySelector('.hiddenServiceTitle');
serviceTitleObserver.observe(serviceTitleElement);

//Services (Front,Back,Web Security)

const servicesObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animationServices');
      }
      else
      {
          entry.target.classList.remove('animationServices');
      }
  });
});
const servicesElements = document.querySelectorAll('.hiddenServices');
servicesElements.forEach(eachServiceElement => servicesObserver.observe(eachServiceElement))

//Right Elements

const rightObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animationRight');
      }
      else
      {
          entry.target.classList.remove('animationRight');
      }
  });
});
const rightElements = document.querySelectorAll('.hiddenRight');
rightElements.forEach(eachRightElement => rightObserver.observe(eachRightElement))


// Graduation Picture Container

const pictureContainerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animationPictureContainer');
      }
      else
      {
          entry.target.classList.remove('animationPictureContainer');
      }
  });
});
const pictureContainerElement = document.querySelector('.hiddenPictureContainer');
pictureContainerObserver.observe(pictureContainerElement);



// Graduation Picture Container
const bottomLeftObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animationBottomLeft');
      }
      else
      {
          entry.target.classList.remove('animationBottomLeft');
      }
  });
});
const bottomLeftElement = document.querySelector('.hiddenBottomLeft');

bottomLeftObserver.observe(bottomLeftElement);
// Graduation Picture Container
const bottomRightObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animationBottomRight');
      }
      else
      {
          entry.target.classList.remove('animationBottomRight');
      }
  });
});
const bottomRightElement = document.querySelector('.hiddebBottomRight');
bottomRightObserver.observe(bottomRightElement);