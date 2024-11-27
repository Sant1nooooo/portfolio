const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.fa-xmark');
const caseStudyButton = document.querySelector('.case-study-button');
const caseStudyDescription = document.querySelector('.case-study-description');
const caseStudyTitle = document.querySelector('.case-study-title');
var lineBreak = document.createElement('br');


const caseStudy = [
  { name:'Randomizer', description:'This is a in-house project of the company that I spent my internship, it is a raffle website provides an engaging platform dedicated to customer raffles. Users can create accounts and manage raffles effortlessly, making it simple to administer and participate in raffle events.<br><br> Key Features:<br> 1. User Account Management: Users can easily create accounts and manage their profile information.<br><br> 2. CSV Upload for Participant Names: Users have the convenience of uploading CSV files containing participant names, streamlining the entry process.<br><br> 3. Customizable Prize Selection: Each raffle allows the user to select the type of prize to be awarded in the current spin, enhancing flexibility and user engagement.<br><br> 4. Dashboard and Analytics:<br> - Dashboard Overview: Provides a comprehensive view of raffle activity, including the names of selected participants, dates, raffle IDs, and status (claimed or unclaimed prizes).<br> - Analytics Page: Offers insights into raffle performance, with filter features enabling users to track specific details such as winners and prize distributions.<br><br>5. Winners Page with Filtering: Users can easily navigate through a dedicated winners page that allows filtering by minor and major prize categories, providing transparency and clarity.'},
  { name:'Minimalist e-Commerce', description:`The “Nike Minimalist e-Commerce” personal project is a web application designed to enhance both customer and admin experiences in an online retail environment. The platform is built with two main web pages: a customer page and an admin page, each page is built to meet the specific needs of its target users. 
    <br><br>For customers, the application enables seamless account creation and login functionality, allowing users to browse a wide range of products easily. Key features include the ability to add and remove items from a shopping cart, as well as the option to mark products as favorites for easy access incase they need to find and buy these product in the future and can checkout the products.
    <br><br>On the admin side, the project provides a robust dashboard that displays essential analytics such as sales data and product popularity trends. The top 5 most purchased and most liked products are highlighted to give admin insights into customer preferences. A comprehensive user management system allows admins to view, edit, or delete customer records, providing full control over user accounts and access to their details when necessary. The Content Management System (CMS) integrated into the admin panel to be able to control by the administrators to manage the inventory displayed on the customer’s page. They can add new products, remove outdated items, and update stock levels, ensuring that the inventory remains accurate and up-to-date.
    <br><br>In developing this project, I applied the best practices such as Advanced Object-Oriented Programming (OOP) principles, design patterns, and programming principles in developing the backend business logic of this web application including the architectural styles such as RESTful API.  These practices allows me to ensure that the code base is scalable, maintainable, and efficient.
    <br><br>
    <i><b>NOTE:</b></i><br>
    The Minimalist eCommerce project is a combination of an academic project and a personal project. Initially developed using JavaScript, React, and MySQL for academic purposes, it has since enhanced into a full-stack web application as part of my portfolio. The backend is built with C# .NET Core, is fully developed and functional, while the frontend is currently being designed and developed. If you’d like to explore the backend code, feel free to visit the GitHub repository.
    <br><br>
    <b>Frontend:</b> HTML, TailwindCSS, JavaScript, React, Ant Design
    <br><b>Backend:</b> C#, .NET Core, ASP.NET Web API, LINQ
    <br><b>Database:</b> MS SQL, Entity Framework Core, Stored Procedure
    <br><b>Others:</b> CQRS, MediatR, Fluent Validation, JWT Authentication
    <br><b>Github:</b> https://github.com/Sant1nooooo/fullstack-ecommerce.git`
    
  },
  { name:'Mobile Grammar Correction', description:'The "Filipino Grammar Correction System" is an innovative application that combines advanced natural language processing (NLP) techniques with modern mobile technology to provide users with accurate and efficient grammar correction capabilities. Developed using Python, Conditional Random Fields (CRF) for part-of-speech tagging, Bidirectional Encoder Representations from Transformers (BERT), and React Native for the mobile interface, the system offers both voice-input and text-based input options, along with visual and text-to-speech output.<br> <br> The systems workflow begins with user input, which can be provided through voice commands or text entry. The input sentence, written or spoken in Filipino, undergoes processing by the CRF model. This model utilizes feature functions, objective functions, and decoding functions to predict the possible part-of-speech tags for each word in the sentence, thereby establishing the grammatical structure.<br><br> Next, the system leverages a BERT model that has been trained on a dataset comprising correct and incorrect sentences, annotated with various types of grammar errors such as verb form errors, subject-verb agreement errors, fragment errors, and word order errors. This fine-tuned BERT model specializes in recognizing and correcting specific grammar errors present in Filipino sentences.<br><br> The tagged sentence from the CRF model is then passed to the fine-tuned BERT-based model for error identification and correction. A binary error classification layer pinpoints the specific words or phrases that are incorrect, while a language model-based correction layer suggests appropriate corrections based on context and grammatical rules.'}
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
