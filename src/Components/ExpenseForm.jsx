import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import { v4 as uuidv4 } from "uuid";
export default function ExpenseForm() {
	const [name, setName] = useState("");
	const [cost, setCost] = useState("");
	const { dispatch } = useContext(AppContext);
	function handleSubmit(e) {
		e.preventDefault();

		const expense = {
			id: uuidv4(),
			name: name,
			cost: parseInt(cost),
		};

		dispatch({
			type: "ADD_EXPENSE",
			payload: expense,
		});
	}
	return (
		<div>
			<form>
				<div className="mb-1">
					<label htmlFor="name" className="form-label"></label>
					<input
						type="text"
						className="form-control"
						id="name"
						aria-describedby="nameHelp"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Name of the Expense"
						required
					/>
					<div id="nameHelp" className="form-text">
						Aryan be under budget
					</div>
				</div>
				<div className="mb-1">
					<label htmlFor="amount" className="form-label"></label>
					<input
						type="number"
						className="form-control"
						id="amount"
						min={1}
						value={cost}
						onChange={(e) => setCost(e.target.value)}
						placeholder="Cost"
						required
					/>
				</div>

				<button
					type="submit"
					className="btn btn-primary"
					onSubmit={(e) => handleSubmit(e)}
				>
					Save
				</button>
			</form>
		</div>
	);
}
