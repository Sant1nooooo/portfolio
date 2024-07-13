const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.fa-xmark');
const caseStudyButton = document.querySelector('.case-study-button');
const caseStudyDescription = document.querySelector('.case-study-description');
const caseStudyTitle = document.querySelector('.case-study-title');
var lineBreak = document.createElement('br');


const caseStudy = [
  {name:'Randomizer', description:'This is a in-house project of the company that I spent my internship, it is a raffle website provides an engaging platform dedicated to customer raffles. Users can create accounts and manage raffles effortlessly, making it simple to administer and participate in raffle events.<br><br> Key Features:<br> 1. User Account Management: Users can easily create accounts and manage their profile information.<br><br> 2. CSV Upload for Participant Names: Users have the convenience of uploading CSV files containing participant names, streamlining the entry process.<br><br> 3. Customizable Prize Selection: Each raffle allows the user to select the type of prize to be awarded in the current spin, enhancing flexibility and user engagement.<br><br> 4. Dashboard and Analytics:<br> - Dashboard Overview: Provides a comprehensive view of raffle activity, including the names of selected participants, dates, raffle IDs, and status (claimed or unclaimed prizes).<br> - Analytics Page: Offers insights into raffle performance, with filter features enabling users to track specific details such as winners and prize distributions.<br><br>5. Winners Page with Filtering: Users can easily navigate through a dedicated winners page that allows filtering by minor and major prize categories, providing transparency and clarity.'},
  {name:'Minimalist e-Commerce', description:`The 'Nike Minimalist' eCommerce project is a web application. It utilizes different technologies in programming such as HTML, CSS, JavaScript, Python, Flask, and MySQL to create a compatible platform. On the customer side, the application enables users to register new accounts and log in using existing credentials. Once logged in, customers can browse through products, add items to their cart, and remove them as needed. They also have the option to mark products as favorites for easy access in the future. When ready to complete their purchases, customers can proceed to checkout, where their transaction details are handled and stored in a MySQL database.`},
  {name:'Mobile Grammar Correction', description:'The "Filipino Grammar Correction System" is an innovative application that combines advanced natural language processing (NLP) techniques with modern mobile technology to provide users with accurate and efficient grammar correction capabilities. Developed using Python, Conditional Random Fields (CRF) for part-of-speech tagging, Bidirectional Encoder Representations from Transformers (BERT), and React Native for the mobile interface, the system offers both voice-input and text-based input options, along with visual and text-to-speech output.<br> <br> The systems workflow begins with user input, which can be provided through voice commands or text entry. The input sentence, written or spoken in Filipino, undergoes processing by the CRF model. This model utilizes feature functions, objective functions, and decoding functions to predict the possible part-of-speech tags for each word in the sentence, thereby establishing the grammatical structure.<br><br> Next, the system leverages a BERT model that has been trained on a dataset comprising correct and incorrect sentences, annotated with various types of grammar errors such as verb form errors, subject-verb agreement errors, fragment errors, and word order errors. This fine-tuned BERT model specializes in recognizing and correcting specific grammar errors present in Filipino sentences.<br><br> The tagged sentence from the CRF model is then passed to the fine-tuned BERT-based model for error identification and correction. A binary error classification layer pinpoints the specific words or phrases that are incorrect, while a language model-based correction layer suggests appropriate corrections based on context and grammatical rules.'}
];

function handleCaseStudy(event)
{
  console.log(caseStudyButton.getAttribute('name'));
  let currentCaseStudy = caseStudy.find(eachCaseStudy => eachCaseStudy.name == caseStudyButton.getAttribute('name'));
  console.log(currentCaseStudy);
  caseStudyDescription.innerHTML = `${currentCaseStudy.description}`
  caseStudyTitle.innerHTML = `${currentCaseStudy.name}`
}
caseStudyButton.addEventListener('click', (event)=>{
  overlay.style.display = 'flex';
  handleCaseStudy(event);
});
closeButton.addEventListener('click', ()=>{
  overlay.style.display = 'none';
  
});
