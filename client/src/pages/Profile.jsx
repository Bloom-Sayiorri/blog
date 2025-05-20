import React from "react";
import Sidebar from "../components/Sidebar";

const Profile = () => {
	return (
		<div className="">
			<Sidebar />
			<section className="">
				<section>
					<h5 className="">Your profile</h5>
					<section>
						<button type="button" className="">
							Change password
						</button>
						<button type="button" className="">
							Edit profile
						</button>
					</section>
				</section>
				<div className="">
					{/* pic and details */}
					<section className=""></section>
					{/* Name and details */}
					<section className="">
						<section>
							<span className="text-slate-400 text-xs">
								FULL NAME
							</span>
							<h4 className="">Jessica James</h4>
						</section>
						<section>{/* Blog views */}</section>
						<section>{/* Analytics */}</section>
					</section>
				</div>
			</section>
		</div>
	);
};

export default Profile;
