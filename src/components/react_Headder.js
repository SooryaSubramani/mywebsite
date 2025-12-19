import logo from './logo.svg';
import html from './html.svg';
import css from './css.svg';
import javascript from './javascript.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Badge from 'react-bootstrap/Badge';
// import Button from 'react-bootstrap/Button';
// import './App.css';
import { Link, Outlet } from 'react-router';




function Reactheadder() {
  return (

    
    <div class="bg-dark"> 
  <div class="container">
    
     <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
       {/* <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"> */}
         <img  width="40" height="32"  role="img" src={logo} className="App-logo" alt="logo" />
          <img  width="40" height="32"  src={html} alt="logo" />
          <img  width="40" height="32"  src={css} alt="logo" />
          <img  width="40" height="32"  src={javascript} alt="logo" />
          {/* </a>  */}
      
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        
        <Link to={'/signin'}  className='link-no-underline'><li class="nav-item nav-link">Home</li></Link>
        <Link to={'/signin'} className='link-no-underline'><li class="nav-item nav-link">About</li></Link>
         <Link to={'/signin'} className='link-no-underline'><li class="nav-item nav-link">Learn</li></Link>
         <Link to={'/signin'} className='link-no-underline'><li class="nav-item nav-link">Blog</li></Link>
         <Link to={'/signin'} className='link-no-underline'><li class="nav-item nav-link">Contact</li></Link>
      </ul>
    </header>
    </div>
    </div>
    </div>
   
  );
 
}
export default  Reactheadder;
