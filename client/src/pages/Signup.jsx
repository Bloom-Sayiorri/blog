import React, { useState } from "react";

const Signup = () => {
	// add password confirmation field
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		passwordConfirmation: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch("/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: formData.username,
				email: formData.email,
				password: formData.password,
				password_confirmation: formData.passwordConfirmation,
			}),
		}).then((r) => r.json());
		// .then(onLogin);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
		console.log(formData);
	};

	return (
		<div className="">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col justify-center items-center"
			>
				<h2 className="text-4xl">Sign Up</h2>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					name="username"
					id="username"
					value={formData.username}
					onChange={handleChange}
					className="rounded-lg border-none py-2 px-4 max-w-80 w-48"
				/>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					value={formData.email}
					onChange={handleChange}
					className="rounded-lg border-none py-2 px-4 max-w-80 w-48"
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					value={formData.password}
					onChange={handleChange}
					className="rounded-lg border-none py-2 px-4 max-w-80 w-48"
				/>
				<label htmlFor="passwordConfirmation">
					Password Confirmation
				</label>
				<input
					type="password"
					name="passwordConfirmation"
					id="passwordConfirmation"
					value={formData.passwordConfirmation}
					onChange={handleChange}
					className="rounded-lg border-none py-2 px-4 max-w-80 w-48"
				/>
				<input
					type="button"
					value="Login"
					className="rounded-lg py-3 px-6 bg-blue-500 text-white"
				/>
			</form>
		</div>
	);
};

export default Signup;
