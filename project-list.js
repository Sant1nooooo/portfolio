/*
Randomizer: HTML, TailwindCSS, TypeScript, React, NextJS, Vercel, PostgreSQL, Prisma, Ant Design, NextAuth
Nike Minimalist e-Commerce: HTML, CSS, JavaScript, Ant Design
Grammar: React Native, Python, Flask
*/



const projects = [
  { title: 'RNDMZR',
    name: 'Randomizer',
    description: 'This is a in-house project of the company, it is a raffle website provides an engaging platform dedicated to customer raffles. Users can create accounts and manage raffles effortlessly, making it simple to administer and participate in raffle events.',
    video: './randomizer-gif.gif',
    tools: [
      './html.svg', './tailwind.svg', './typescript.svg', './react.svg', './nextjs.svg', 
      './vercel.svg', './postgresql.svg', './prisma.svg', './ant-design.svg'],
    hasDemo: false
  },
  { title: 'e-CMMRCE',
    name: 'Minimalist e-Commerce',
    video: './nike-gif.gif',
    description: `The 'Nike Minimalist' eCommerce project is a robust web application that integrates HTML, CSS, JavaScript, Python, Flask, and MySQL technologies to deliver a seamless user experience. Customers can register, log in, and navigate through a variety of Nike products. They can add items to their cart, mark favorites, and proceed to checkout, where transactions are securely processed and stored in a MySQL database.`,
    tools: ['./html.svg', './css.svg', './javascript.svg', './python.svg','./flask.svg','./mysql.svg'],
    hasDemo: true
  },
  { title: 'THESIS',
    name: 'Mobile Grammar Correction',
    video: './data-analytics.png',
    description: `The "Filipino Grammar Correction System" is a cutting-edge application merging advanced NLP techniques and mobile technology to offer precise grammar correction. Constructed using Python, CRF for part-of-speech tagging, BERT, and React Native, it provides voice and text input options with visual and voice-based output.`,
    tools: ['./react.svg', './python.svg','./flask.svg', './rest-api.svg'],
    hasDemo: false
  },

]

//Components
const projectTitle = document.querySelector('.project-title');
const detailsTitle = document.querySelector('.top-container-title');
const detailsDescription = document.querySelector('.details-description');
const demoButton = document.querySelector('.demo-button');
const projectList = document.querySelectorAll('.card');
const caseStudyBtn = document.querySelector('.case-study-button');

const toolsIconContainer = document.querySelector('.tools-icon');
const videoContainer = document.querySelector('.video-container');
projects[0].tools.forEach(eachTool => { createImages(eachTool)});   


//Functions

function createImages(eachTool){
  //Functions for creating 'img' HTML that will be put inside the 'toolsIconContainer' element.
  const imgContainer = document.createElement('div');
  const imageElement = document.createElement('img');
  imageElement.src = eachTool;


  imageElement.classList.add('tool-img')
  imgContainer.classList.add('img-container');
  imgContainer.append(imageElement);
  toolsIconContainer.append(imgContainer)
}

function handleShowProject(event, eachProject){
  let currentProject = eachProject.getAttribute('name');
  if(event.target.closest('.card'))
  {
    let projectObject = projects.find(project => project.name === currentProject);
    let existingTools = document.querySelectorAll('.img-container');
    
    //Changing the text
    projectTitle.innerHTML = `${projectObject.title}`;
    detailsTitle.innerHTML = `${projectObject.name}`;
    detailsDescription.innerHTML = `${projectObject.description}`;
    videoContainer.src = `${projectObject.video}`

    //Changing the 'name' attribute of the case-study-button
    caseStudyBtn.setAttribute('name', `${projectObject.name}`)

    //Removing the existing tools or images before appending or putting the new ones.
    existingTools.forEach(eachExistingTool => { toolsIconContainer.removeChild(eachExistingTool) });
    projectObject.tools.forEach(eachTool => { createImages(eachTool)});

    if(projectObject.hasDemo)
    {
      demoButton.style.display = 'flex';
    }
    else
    {
      demoButton.style.display = 'none';
    }
  }
}

//Event Listener
projectList.forEach(eachProject => eachProject.addEventListener('click', (event)=>{ handleShowProject(event,eachProject) }));