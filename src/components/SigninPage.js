
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import { Link, Outlet, useNavigate, Route, Routes } from "react-router";
import { Button } from 'bootstrap';
;
// import './App.css';



 

const SigninSubmit = ()=>{
    alert("Link clicked")
  
  }

function SigninPage() {

 
  return (

    
    
    <div className="App">

      
 <img src={logo} className="App-logo" alt="logo" />
       <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
 <Link to={'/home'}> <button type="submit" class="btn btn-primary" onClick={SigninSubmit}>Submit</button></Link>
</form>



 

    </div>
  );
  
}
export default SigninPage;
