import './App.css';
import React, { useState } from 'react';
import Navbar from './component/Navbar';
import Textbox from './component/Textbox';
import Alert from './component/Alert';

function App() {

  const [mode, setMode] = useState('success');
  const [alert, setAlert] = useState(null);

  const toggleMode = ()=>{
    if(mode === 'success'){
      setMode('dark');
      
    }
    else{
      setMode('success');
    }
  }

  return (
    <>
      <Navbar title='Text Change' mode={mode} toggleMode={toggleMode}/>
      <Alert alert='success : dark mode'/>
      <div className='container my-5'>
        <Textbox heading="Write Text Here...!"/>
      </div>

    </>
  );
}

export default App;
