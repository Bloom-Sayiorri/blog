import React from "react";

function Button() {
	const props = {
		buttonType: "",
		buttonRole: "",
		buttonText: "",
		buttonStyles: ""
	};

	const { buttonType, buttonRole, buttonText, buttonStyles } = props;

	return (
		<button type={buttonType} role={buttonRole} className={buttonStyles}>
			{buttonText}
		</button>
	);
}

export default Button;
