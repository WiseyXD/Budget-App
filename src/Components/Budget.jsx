import { useContext, useState } from "react";
import { AppContext } from "../AppContext";
export default function Budget() {
	const { budget, dispatch } = useContext(AppContext);
	let [newBudget, setNewBudget] = useState(false);
	let [getBudget, setGetBudget] = useState(null);
	function handleNewBudget() {
		setNewBudget(true);
		console.log("clicked");
	}
	function saveNewBudget() {
		setNewBudget(false);

		dispatch({
			type: "NEW_BUDGET",
			payload: getBudget,
		});
	}

	return (
		<div className="alert alert-success d-flex justify-content-between align-items-center">
			{newBudget ? (
				<>
					<input
						type="number"
						name=""
						id=""
						placeholder="Set Budget"
						onChange={(e) => setGetBudget(e.target.value)}
						min={1}
					/>
					<button
						className="btn btn-outline-primary btn-sm m-0"
						onClick={saveNewBudget}
					>
						Save
					</button>
				</>
			) : (
				<>
					<h5>Budget: ₹ {budget}</h5>
					<button
						className="btn btn-outline-primary btn-sm m-0"
						onClick={handleNewBudget}
					>
						Edit Budget
					</button>
				</>
			)}
		</div>
	);
}
