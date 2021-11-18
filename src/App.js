import './App.css';
import {
  BrowserRouter, Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import ServicePackage from './components/Service&Package/ServicePackage';
import Gallery from './components/Gallery/Gallery';
import Faq from './components/Faq/Faq';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/servicePackage" element={<ServicePackage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
