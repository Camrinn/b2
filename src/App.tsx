import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/HeroSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Gallery from './pages/Gallery';
import Menu from './pages/Menu';


const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/menu" element={<Menu />} />


    </Routes>
    <Footer />
  </Router>
);

export default App;
