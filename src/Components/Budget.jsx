import { useContext } from "react";
import { AppContext } from "../AppContext";
export default function Budget() {
	const { budget, dispatch } = useContext(AppContext);
	function handleNewBudget() {
		// 	dispatch({
		// 		type:"NEW_BUDGET",
		// 		payload:
		// 	})
	}
	return (
		<div className="alert alert-success d-flex justify-content-between align-items-center">
			<h5>Budget: ₹ {budget}</h5>
			<button
				className="btn btn-outline-primary btn-sm m-0"
				onClick={() => handleNewBudget}
			>
				Edit Budget
			</button>
		</div>
	);
}
