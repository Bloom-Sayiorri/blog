import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Blogs from "./pages/Blogs";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
	// THEMES
	const [isDark, setIsDark] = useState(false);

	const handleDark = () => {
		setIsDark(!isDark);
	};

	// use useEffect to autologin the user and setUser(user) by fetching /me route

	return (
		<BrowserRouter>
			<div
				className={`h-screen overflow-hidden ${
					isDark ? "bg-bg text-white" : "bg-white"
				}`}
			>
				<Navbar isDark={isDark} handleDark={handleDark} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/blogs" element={<Blogs />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/about" element={<About />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
