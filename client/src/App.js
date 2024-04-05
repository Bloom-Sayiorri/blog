import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Profile from './pages/Profile';
import Blogs from './pages/Blogs';
import Signup from './pages/Signup';

function App() {
  const [isActive, setIsActive] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // THEMES
  const [isDark, setIsDark] = useState(false);

  const handleDark = () => {
    setIsDark(!isDark);
  }

  return (
    <BrowserRouter>
      <div className={`h-screen overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
      <Navbar
        isActive={isActive}
        isPending={isPending}
        isTransitioning={isTransitioning}
        isDark={isDark}
        handleDark={handleDark}
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
            path="/blogs"
            element={<Blogs />} 
            setIsActive={setIsActive}
            setIsPending={setIsPending}
            setIsTransitioning={setIsTransitioning}
          />
          <Route
            path="/profile"
            element={<Profile />} 
            setIsActive={setIsActive}
            setIsPending={setIsPending}
            setIsTransitioning={setIsTransitioning}
          />
          <Route
            path="/about"
            element={<About />} 
            setIsActive={setIsActive}
            setIsPending={setIsPending}
            setIsTransitioning={setIsTransitioning}
          />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  ) 
}

export default App;