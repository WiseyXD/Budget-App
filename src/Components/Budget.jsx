import { useContext } from "react";
import { AppContext } from "../AppContext";
export default function Budget() {
	const { budget } = useContext(AppContext);
	return (
		<div className="alert alert-success">
			<span>Budget: ₹ {budget}</span>
			{/* <button>Edit Budget</button> */}
		</div>
	);
}
