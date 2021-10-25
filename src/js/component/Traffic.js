import React, { useState } from "react";

//create your first component
const Traffic = () => {
	const [toggle, setToggle] = useState("off");
	let red = "bg-danger";
	let green = "bg-success d-flex";
	let yellow = "bg-warning";
	let off = "bg-dark";
	let divStyle = "col rounded-circles";

	return (
		<div className="text-center mx-auto w-50 mt-5 row">
			<div className={divStyle}>
				<button onClick={() => setToggle("green")}>
					{toggle == "green" ? (
						<div className={green}>on</div>
					) : (
						<div className={off}>off</div>
					)}
				</button>
			</div>
			<div className={divStyle}>
				<button className={yellow} onClick={() => setToggle("yellow")}>
					{toggle == "green" || toggle == "red" ? "off" : "on"}
				</button>
			</div>
			<div className={divStyle}>
				<button className={red} onClick={() => setToggle("red")}>
					{toggle == "yellow" || toggle == "green" ? "off" : "on"}
				</button>
			</div>
		</div>
	);
};
export default Traffic;
