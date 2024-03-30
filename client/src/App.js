import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Profile from './pages/Profile';
import Blogs from './pages/Blogs';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/blogs" element={<Blogs/>} />
        <Route exact path="/profile" element={<Profile/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  ) 
}

export default App;