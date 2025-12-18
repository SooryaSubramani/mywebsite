import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Reactheadder from './components/react_Headder';
import { Route, Routes, Outlet } from 'react-router';
import SigninPage from './components/SigninPage';




function App() {
  return (

  <div>
    
    <div className="App">

      <header className="App-header">



      

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

  

    </div>
    </div>  
    
  );
}
export default App;
