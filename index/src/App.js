
//import './App.css';
import React from 'react';

import { Browser, BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import About from './Pages/About';
import Not_Found from './Pages/PageNotFound';
import "./Styles/main.css"
import Navbar from './Components/Navbar';

function App() {
  return (
  <BrowserRouter>
  <Navbar />
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contacts" element={<Contacts />} />
      <Route path="/Abouts" element={<About />} />
      <Route path="*" element={<Not_Found />} />
    </Routes>
    
  </BrowserRouter>
  );
}

export default App;
