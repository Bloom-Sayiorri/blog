import React from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
// import logo from '../assets/blog.jpg';
import { FaMoon } from "react-icons/fa";
import { LuSunDim, LuAlignJustify } from "react-icons/lu";

const Navbar = ({ isDark, handleDark }) => {
	const navigate = useNavigate();

	return (
		<header className="flex justify-between items-center py-2 px-4">
			{/* <img src={logo} alt='Logo' height={40} width={40} className='bg-transparent' /> */}
			<nav className="flex items-center gap-5">
				<NavLink to="/" className="" activeClassName="active">
					Home
				</NavLink>
				<NavLink to="/categories" className="">
					Categories
				</NavLink>
				<NavLink to="/favorites" className="">
					Favorites
				</NavLink>
				<NavLink to="/about" className="">
					About
				</NavLink>
			</nav>

			<NavLink to="/" className="">
				<h1 className="font-semibold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500/40 text-transparent bg-clip-text text-xl z-3">
					Blogz
				</h1>
			</NavLink>

			<section className="flex items-center justify-center gap-2">
				<button type="button" onClick={handleDark}>
					{isDark ? (
						<LuSunDim
							role="button"
							className={`text-2xl ${isDark ? "text-white" : ""}`}
						/>
					) : (
						<FaMoon className={`${isDark ? "" : "text-black"}`} />
					)}
				</button>
				{/*<NavLink to='/profile' className=''>Profile</NavLink> */}
				<button
					type="button"
					onClick={() => {
						navigate("/profile");
					}}
				>
					<LuAlignJustify role="button" className="text-xl" />
				</button>
			</section>
		</header>
	);
};

export default Navbar;
