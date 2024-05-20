
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Contact from "./components/Contact";
import About from './components/About';
import Home from './Home';
function App() {
  return (
    <>
    
  <BrowserRouter>
  <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
  
  </Routes>
  <Navbar/> 

  </BrowserRouter>
    </>
  );
}

export default App;
