
//Personal Details
const detailsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // console.log('Element has appeared on the screen.');
            entry.target.classList.add('personalAnimation');
        }
        else
        {
            entry.target.classList.remove('personalAnimation');
        }
    });
  });
const animationElements = document.querySelectorAll('.hiddenPersonalAnimation');
animationElements.forEach((eachElement) => detailsObserver.observe(eachElement));






//Personal Image
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animationImage');
      } else {
        entry.target.classList.remove('animationImage');
      }
    });
  });
const imageElement = document.querySelector('.hiddenImage');
imageObserver.observe(imageElement);


//Skills Divider
const skillsDividerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('animationSkillsDivider');
        } 
        else {
            entry.target.classList.remove('animationSkillsDivider');
        }
    });
});

const skillsDividerElement = document.querySelector('.hiddenSkillsDivider');
skillsDividerObserver.observe(skillsDividerElement);

//Skills Description
const skillsDescriptionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('animationSkillsDescription');
        } 
        else {
            entry.target.classList.remove('animationSkillsDescription');
        }
    });
});
const skillsDescriptionElement = document.querySelector('.hiddenSkillsDescription');
skillsDescriptionObserver.observe(skillsDescriptionElement);

//SkillsContainer
const skillsContainerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('animationSkillsContainer');
        } 
        else {
            entry.target.classList.remove('animationSkillsContainer');
        }
    });
});
const skillsContainerElement = document.querySelector('.hiddenSkillsContainer');
skillsContainerObserver.observe(skillsContainerElement);