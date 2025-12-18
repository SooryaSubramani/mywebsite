import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Badge from 'react-bootstrap/Badge';
// import Button from 'react-bootstrap/Button';
// import './App.css';
import { Link, Outlet } from 'react-router';




function Reactheadder() {
  return (

    
    
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <Link to={'/signin'}><li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li></Link>
        <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      </ul>
    </header>


    </div>
   
  );
 
}
export default  Reactheadder;
