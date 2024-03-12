import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import { useState } from 'react';
// import About from './components/About';
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');//whether drak mode is enable or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode'
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title='TextUtils' mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<About />}>
            </Route> */}
            {/* <Route exact path="/" element= */}
            {<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}>
            {/* </Route>
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
