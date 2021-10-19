import React, { useState } from "react";

//create your first component
const Traffic = () => {
	const [toggle, setToggle] = useState("off");
	let red = "bg-danger";
	let green = "bg-success d-flex";
	let yellow = "bg-warning";
	let off = "bg-dark";

	return (
		<div className="text-center mt-5">
			<div>
				<button onClick={() => setToggle("green")}>
					{toggle == "green" ? (
						<div className={green}>on</div>
					) : (
						<div className={off}>off</div>
					)}
				</button>
			</div>
			<div>
				<button className={yellow} onClick={() => setToggle("yellow")}>
					{toggle == "green" || toggle == "red" ? "off" : "on"}
				</button>
			</div>
			<div>
				<button className={red} onClick={() => setToggle("red")}>
					{toggle == "yellow" || toggle == "green" ? "off" : "on"}
				</button>
			</div>
		</div>
	);
};
export default Traffic;
