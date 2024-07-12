const projectContainerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animationProjectContainer');
      }
      else
      {
          entry.target.classList.remove('animationProjectContainer');
      }
  });
});
const projectAnimationElements = document.querySelectorAll('.hiddenProjectContainer');
// console.log()
projectAnimationElements.forEach(eachProjectAnimation => projectContainerObserver.observe(eachProjectAnimation));