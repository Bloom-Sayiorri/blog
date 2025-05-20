import React from "react";
import BlogsList from "./BlogsList";
import Search from "../components/Search";

const Home = () => {
	return (
		<div className="">
			<section className="">
				<h4 className="">Latest Articles</h4>
				<select></select>
				<Search />
			</section>
			<BlogsList />
		</div>
	);
};

export default Home;
