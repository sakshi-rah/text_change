import './App.css';
import React, { useState } from 'react';
import Navbar from './component/Navbar';
import Textbox from './component/Textbox';
import Alert from './component/Alert';

function App() {

  const [mode, setMode] = useState('success');
  const [alert, setAlert] = useState('');

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}

  const toggleMode = ()=>{
    if(mode === 'success'){
      setMode('dark');
      document.body.style.backgroundColor = '#0a1910';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('success');
      document.body.style.backgroundColor = '#ffffff';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Navbar title='Text Change' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-5'>
        <Textbox heading="Write Text Here...!"/>
      </div>

    </>
  );
}

export default App;
