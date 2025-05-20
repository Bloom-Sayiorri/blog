import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = () => {
	const navigate = useNavigate();

	const handleClick = () => {};

	return (
		<div className="">
			<img src="" alt="blog_image" height={50} width={50} className="" />
			<section className="">
				<span className="">{/*author*/}</span>
				<h5 className="">{/*title*/}</h5>
				<span className="">{/*category*/}</span>
				<p className="">{/*content*/}</p>
			</section>
			<section>
				<section>
					<span className="">{/*likes*/}</span>
					<span className="">{/*comments*/}</span>
					<span className="">{/*likes*/}</span>
				</section>
				<button onClick={handleClick} className="">
					Read more
				</button>
			</section>
		</div>
	);
};

export default BlogCard;
