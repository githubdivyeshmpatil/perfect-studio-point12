import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes, Route } from "react-router-dom";
import About from './pages/About';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Bookung_contact from './pages/Bookung_contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './Footer/Footer';
import Wedding from './pages/Photos/Wedding';
import Preweding from './pages/Photos/Preweding';
import Bridal from './pages/Photos/Bridal';
import Couple from './pages/Photos/Couple';
import Outdor from './pages/Photos/Outdor';




function App() {
  return (
   <>
    <BrowserRouter>
        <Routes>
          <Route exact path="/"element={<Home/>}/>
          <Route path="/about-us" element={<About/>}/>
          <Route path="/gallery"  element={<Gallery/>}/>/
          <Route path="/services"  element={<Services/>}/>
          <Route path="/Blog"  element={<Blog/>}/>
          <Route path="/contact-booking"  element={<Bookung_contact/>}/>
          <Route path="/gallery/Wedding Gallery"  element={<Wedding/>}/>
          <Route path="/gallery/prewedding"  element={<Preweding/>}/>
          <Route path="/gallery/bridal"  element={<Bridal/>}/>
          <Route path="/gallery/Couple"  element={<Couple/>}/>
          <Route path="/gallery/Outdoor"  element={<Outdor/>}/>



        
        </Routes>
      </BrowserRouter>
      <Footer/>
   </>
  );
}

export default App;
