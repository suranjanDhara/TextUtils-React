import React, { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light')
  const [textMode, setTextMode] = useState('dark')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      setTextMode('dark')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
    else {
      setMode('dark')
      setTextMode('light')
      document.body.style.backgroundColor = '#052047'
      showAlert("Dark mode has been enabled", "success")
    }
  }
  return (
    <>
      {/* <Router> */}
        <NavBar title="TextUtils" mode={mode} textMode={textMode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Routes> */}
          {/* <Route exact path="/about" element = {<About />}/> */}
          <div className="container mx-50">
              <TextForm heading="Try TextUtils - Counter " mode={mode} />
            </div>
        {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
