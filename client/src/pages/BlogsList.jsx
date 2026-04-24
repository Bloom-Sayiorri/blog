import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const BlogsList = () => {
	const [blogs, setBlogs] = useState([]);
	// const blogs =
	useEffect(() => {
		fetch("https://dev.to/api/articles?per_page=100")
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);

	return (
		<div className="h-full">
			<h3 className="">Blogs</h3>
			<Blog blogs={blogs} />
		</div>
	);
};


export default BlogsList;