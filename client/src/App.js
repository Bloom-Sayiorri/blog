import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Profile from './pages/Profile';
import Blogs from './pages/Blogs';

function App() {
  const [isActive, setIsActive] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  return (
    <BrowserRouter>
      <div className='h-screen overflow-hidden'>
      <Navbar
        isActive={isActive}
        isPending={isPending}
        isTransitioning={isTransitioning}
      />
        <Routes>
          <Route
            exact path="/"
            element={<Home />} 
            setIsActive={setIsActive}
            setIsPending={setIsPending}
            setIsTransitioning={setIsTransitioning}
          />
          <Route
            exact path="/blogs"
            element={<Blogs />} 
            setIsActive={setIsActive}
            setIsPending={setIsPending}
            setIsTransitioning={setIsTransitioning}
          />
          <Route
            exact path="/profile"
            element={<Profile />} 
            setIsActive={setIsActive}
            setIsPending={setIsPending}
            setIsTransitioning={setIsTransitioning}
          />
          <Route
            exact path="/about"
            element={<About />} 
            setIsActive={setIsActive}
            setIsPending={setIsPending}
            setIsTransitioning={setIsTransitioning}
          />
          
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  ) 
}

export default App;