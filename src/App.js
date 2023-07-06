import './App.css';
import Navbar from './component/Navbar';
import Textbox from './component/Textbox';

function App() {
  return (
    <>
      <Navbar/>
      <div className='container my-5'>
        <Textbox heading="Write Text Here...!"/>
      </div>

    </>
  );
}

export default App;
