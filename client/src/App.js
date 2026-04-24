import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import BlogForm from "./pages/BlogForm";

function App() {
	// THEMES
	const [isDark, setIsDark] = useState(false);

	const handleDark = () => {
		setIsDark(prevState => !prevState);
	};

	// use useEffect to autologin the user and setUser(user) by fetching /me route

	return (
		<BrowserRouter>
			<main
				className={`h-screen ${
					isDark ? "dark" : ""
				}`}
			>
				<Navbar isDark={isDark} handleDark={handleDark} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/form" element={<BlogForm />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/about" element={<About />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
				</Routes>
				<Footer />
			</main>
		</BrowserRouter>
	);
}

export default App;