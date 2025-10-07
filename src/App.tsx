import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css";

import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
