import './App.css';
import { BrowserRouter ,Routes, Route } from "react-router-dom"

import Navbar from './components/Navbar/Navbar';
import HomeOne from './pages/HomeOne';
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <HomeOne/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
