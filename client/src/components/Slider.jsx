import React from "react";

const Slider = () => {
	const handleClick = () => {
		console.log("clicked");
	};
	return (
		<div onClick={handleClick} className="cursor-pointer">
			<section className="">
				<h3 className="">Tech.</h3>
				<span className="">
					{/*author*/} - {/*time*/}
				</span>
				<h4 className="">{/*title*/}</h4>
				<p className="">{/*summary*/}</p>
			</section>
			<img src="" alt="img" height={50} width={50} className="" />
		</div>
	);
};

export default Slider;
