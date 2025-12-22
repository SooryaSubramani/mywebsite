import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/Home.css';
import Myimage from './Myimage.png';
import css from './components/css.svg';
import html from './components/html.svg';
import javascript from './components/javascript.svg';
import { useState, useEffect } from 'react';

//const images = [logo, css, html, javascript];
var index = 0; // Start with the first image
var displayInterval = 3000; // Change image every 3 seconds (3000ms)


   

function App() {


const images = [logo, css, html, javascript];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // 1. Start the interval inside useEffect
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // 2. CLEANUP: This automatically clears the interval on navigation
    return () => clearInterval(interval);
  }, [images.length]);



  return (

    

  <div className='home' > 
    
       
       <div className="container1 App App-header z-2">
        
        <div>
        <img src={images[currentIndex]} id='myImage'  className="App-logo" alt="logo" />
        </div>
        <div>
          <h1>
            Frontend Develop-er
          </h1>
        </div>
        <div>
        <p  id='myImage1' className='text m-2'>
         Translating complex ideas into pixel-perfect digital reality with modern frontend tools.
        </p>
        </div>


        <a className="App-link"> Learn React  </a>        
 
    
    </div>
    <div className="container2"> <img src={Myimage}   className="my-image" alt="logo" /> </div>
    
    </div>  
    
  );

  
}

// const data=()=>{ 
   
//   document.getElementById('myImage').src = images[index];
//   index =index+1;
 
//   if (index==images.length){
//     index=0;
//   }  
// };
// const interval= setInterval(data, displayInterval);

// const 

export default App;
