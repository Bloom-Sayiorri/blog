import React from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
// import logo from '../assets/blog.jpg';
import { FaMoon } from "react-icons/fa";
import { LuSunDim } from "react-icons/lu";
import { RxAvatar } from "react-icons/rx";

const Navbar = ({ isDark, handleDark }) => {
	const navigate = useNavigate();

	return (
		<header className="flex justify-between items-center py-2 px-4">
			{/* <img src={logo} alt='Logo' height={40} width={40} className='bg-transparent' /> */}
			<NavLink to="/" className="">
				<h1 className="font-semibold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500/40 text-transparent bg-clip-text text-xl z-3">
					Blogz
				</h1>
			</NavLink>
			<nav className="flex items-center gap-5">
				<NavLink to="/" className="">
					Home
				</NavLink>
				<NavLink to="/favorites" className="">
					Favorites
				</NavLink>
				<NavLink to="/about" className="">
					About
				</NavLink>
			</nav>
			<section className="flex items-center justify-center gap-2">
				<button type="button" onClick={handleDark}>
					{isDark ? (
						<LuSunDim
							role="button"
							className={`text-2xl ${isDark ? "text-white" : ""}`}
						/>
					) : (
						<FaMoon className={`text-xl ${isDark ? "" : "text-black"}`} />
					)}
				</button>
				{/*<NavLink to='/profile' className=''>Profile</NavLink> */}
				<button
					type="button"
					onClick={() => {
						navigate("/profile");
					}}>
					<RxAvatar role="button" className="text-2xl" />
				</button>
			</section>
		</header>
	);
};

export default Navbar;