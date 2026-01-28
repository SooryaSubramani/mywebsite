import logo from './logo.svg';
import css from './css.svg'
import html from './html.svg';
import javascript from './javascript.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import './components/Home.css';
// import './components/Home'
// import Myimage from './Myimage.png';
// import css from './components/css.svg';
// import html from './components/html.svg';
// import javascript from './components/javascript.svg';
import { useState, useEffect } from 'react';

//const images = [logo, css, html, javascript];
var index = 0; // Start with the first image
var displayInterval = 3000; // Change image every 3 seconds (3000ms)


   

function Learn() {
const inputData = ["First Name", "Last Name", "Email"];

const images = [
  {
    Name: 'React',
    image: logo,
    discription: 'React is an open-source JavaScript library for building user interfaces (UIs) with a focus on a declarative, component-based approach. It allows developers to create efficient, dynamic, and interactive web applications, particularly single-page applications (SPAs). ',
    Link: 'https://react.dev/learn' ,
  }, 
  { 
    Name: 'CSS' ,
    image: css,
    discription: 'CSS (Cascading Style Sheets) is the language used to describe the presentation and visual formatting of a document written in a markup language, most commonly HTML. It controls how elements are displayed on screen, on paper, or in other media, separating the contents structure from its visual design. ',
    Link:'https://www.w3schools.com/cssref/index.php' ,
  }, 
  {
    Name: 'Html',
    image: html,
    discription: 'HTML, or HyperText Markup Language, is the standard markup language used to create and structure content on the World Wide Web. It serves as the foundational "skeleton" for all webpages, telling web browsers how to display text, images, and other multimedia. ',
    Link: 'https://www.w3schools.com/TAGS/default.asp',
  }, 
  { 
    Name: 'Javascript',
    image: javascript,
    discription: 'JavaScript (JS) is a versatile, high-level programming language for the web that allows developers to create dynamic and interactive content. It is a core technology alongside HTML (structure) and CSS (visual styling), enabling features like animated graphics, interactive forms, and real-time content updates that do not require a full page reload. ',
    Link: 'https://www.w3schools.com/js/',
  }
];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // 1. Start the interval inside useEffect
   
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  return (

    

  <div className='home' > 
       <div className="container1 App App-header z-2" id='myImage'> 

          <div>
          <h1>
            Frontend Develop-er
            
          </h1>
        </div>
        
       {images.map((label, index)=>(<div key={index}>
        <img src={label.image}  className="App-logo" alt="logo" />
        <div>
        <p  id='myImage1' className='text m-2'>
         {label.discription} 
        </p>
        </div>
        <a className="App-link" href={label.Link} target='_blank'> Learn {label.Name} </a>
          </div>))}     
    </div>
    </div>  
     
  );

  
}

export default Learn;
