import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = ({ blogs }) => {
	const navigate = useNavigate();
	const handleClick = () => {
	};

	return (
		<div className="">
			{blogs.map((blog) => (
				<div key={blog.id} onClick={handleClick}>
					{/* {
						blog.cover_image ?  */}
					<img
						src={blog.cover_image}
						alt={blog.title}
						height={150}
						width={100}
						className=""
					/>
					 {/* : ""
					} */}
					<section className="">
						<p>{blog.title}</p>
					</section>
				</div>
			))}
		</div>
	);
};

export default Blog;