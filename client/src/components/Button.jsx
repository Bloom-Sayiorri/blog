import React from "react";

function Button() {
	const props = {
		buttonType: "",
		buttonText: "",
		buttonStyles: "",
	};

	const { buttonType, buttonText, buttonStyles } = props;

	return (
		<button type={buttonType} className={buttonStyles}>
			{buttonText}
		</button>
	);
}

export default Button;
