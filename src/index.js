import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Router, BrowserRouter, Routes, Outlet} from 'react-router';
import SigninPage from './components/SigninPage';
import react_Headder from './components/react_Headder';
import Reactheadder from './components/react_Headder';
import Home from './components/home';
import Body from './body';
import './components/Home.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Reactheadder/> 
<Body/>
    <Routes>
      <Route  path="/" element={<App />} />
      <Route  path="/mywebsite" element={<App />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/home" element={<Home />} />
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
 
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
