import './App.css';
import AboutUs from './components/AboutUs';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('white');

  const [btnText, newBtnText] = useState ('Enable Dark Mode');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      typ : type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode ==='white'){
      setMode('black');
      document.body.style.backgroundColor = '#0F142E ';
      newBtnText('Disable Dark Mode');
      showAlert("Dark Mode has been Enabled!", "success");
      // npm
      // setInterval(() => {
      // document.title = "TextUtils - Finds Malware";
      // }, 3000);
      // setInterval(() => {
      //   document.title = "TextUtils - Update Now";
      // }, 2500);
    }
    else{
      setMode('white');
      document.body.style.backgroundColor = 'white';
      newBtnText('Enable Dark Mode');
      showAlert("Light Mode has been Enabled!", "success");
      // document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
    <BrowserRouter>
     <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} btnText={btnText}/>
     <Alerts alert={alert}/>
        <Routes>
          <Route exact path="/about" element={<AboutUs mode={mode}/>}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} textArea='Enter the text to analyze the changes' mode={mode}/>}>
          </Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;