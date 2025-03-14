import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderInfo from './components/HeaderInfo';
import MainCarousel from './components/MainCarousel';
import MidInfo from './components/MidInfo';
import WorkGallery from './components/WorkGallery';
import JoinUs from './components/JoinUs';
import Reviews from './components/Reviews';
import Touch from './components/Touch';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact'; // Import the new Contact Us page
import Stats from './components/Stats';

function App() {
  return (
    <Router>
      <HeaderInfo />
      <Navbar />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <MainCarousel />
              <Services />
              <MidInfo />
              <WorkGallery />
              <AboutUs />
              <Stats />
              <JoinUs />
              <Reviews />
              <Touch />
            </>
          } 
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
