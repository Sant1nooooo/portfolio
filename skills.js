const images=[
  { name: 'html', imageURL: './html.svg', position: 'top left'}, 
  { name: 'css', imageURL: './css.svg', position: 'top right'},
  { name: 'javascript', imageURL:'./javascript.svg', position: 'bottom right'},
  { name: 'react', imageURL: './react.svg',position: 'bottom left'},

  { name: 'nextjs', imageURL: './nextjs.svg', position: 'top left'},
  { name: 'tailwind', imageURL: './tailwind.svg', position: 'top right'},
  { name: 'c-sharp', imageURL: './c-sharp.svg', position: 'bottom right'},
  { name: 'asp-net', imageURL: './asp-net-core.svg', position: 'bottom left'},

  { name: 'python', imageURL:'./python.svg', position: 'top left'},
  { name: 'flask', imageURL: './flask.svg', position: 'top right'},
  { name: 'rest', imageURL:'./rest-api.svg', position: 'bottom right'},
  { name: 'git', imageURL: './git.svg', position: 'bottom left'},

  { name: 'github', imageURL: './github.svg', position: 'top left'},
  { name: 'redux', imageURL: './redux.svg', position: 'top right'},
  { name: 'react-router', imageURL: './react-router.svg', position: 'bottom right'},
  { name: 'ant-design', imageURL: './ant-design.svg', position: 'bottom left'},

  { name: 'postman', imageURL: './postman.svg', position: 'top left'},
  { name: 'material', imageURL: './mui.svg', position: 'top right'},
  { name: 'jest', imageURL: './jest.svg', position: 'bottom right'}, 
  { name: 'redux-devtools', imageURL: './redux-devtools.svg', position: 'bottom left'}
];
const skillList = document.querySelectorAll('.skill');
const skillContainer = document.querySelector('.skills-container');

//Functions
function handleChangeBackground(event, eachSkill)
{
  const currentImage = images.find(eachImage => eachImage.name === eachSkill.getAttribute('name'));
  skillContainer.style.backgroundImage = `url(${currentImage.imageURL})`;
  skillContainer.style.backgroundPosition = 'center center'
  skillContainer.style.backgroundSize = '30%';

  skillContainer.style.backgroundColor = 'rgb(30,27,30,0.5)';
  skillContainer.style.backgroundBlendMode = 'multiply';

}

// EventListener
skillList.forEach((eachSkill)=>{
  eachSkill.addEventListener('mouseover', (event)=>{ handleChangeBackground(event, eachSkill)})
});
skillList.forEach((eachSkill)=>{
  eachSkill.addEventListener('mouseleave', ()=>{ 
    skillContainer.style.backgroundColor = '#1e1b1e';
    skillContainer.style.backgroundBlendMode = 'normal';
  })
});


let imageIndex = 1;
let interval = setInterval(()=>{
  console.log(imageIndex);

  if(imageIndex == images.length) { imageIndex = 0;}

  if(images[imageIndex].position == 'top left' ){
    skillContainer.style.backgroundPosition = 'top left'
    skillContainer.style.backgroundSize = '20%'
  }
  else if (images[imageIndex].position == 'top right' )
  {
    skillContainer.style.backgroundPosition = 'top right'
        skillContainer.style.backgroundSize = '20%'
  }
  else if (images[imageIndex].position == 'bottom right' )
  {
    skillContainer.style.backgroundPosition = 'bottom right'
        skillContainer.style.backgroundSize = '20%'
  }
  else
  {
    skillContainer.style.backgroundPosition = 'bottom left'
        skillContainer.style.backgroundSize = '20%'
  }
  skillContainer.style.backgroundImage = `url(${images[imageIndex].imageURL})`;
  imageIndex++
},2000);