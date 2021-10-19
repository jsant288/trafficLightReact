import React, { useState } from "react";

//create your first component
const Traffic = () => {
	const [toggle, setToggle] = useState(true);

	return (
		<div className="text-center mt-5">
			<button onClick={() => setToggle(!toggle)}>
				{toggle ? "red" : "off"}
			</button>

			<div> Green Light </div>
			<div> Yellow Light </div>
		</div>
	);
};

export default Traffic;
