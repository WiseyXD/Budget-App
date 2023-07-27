import React from "react";

export default function ExpenseForm() {
	return (
		<div>
			<form>
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
						Name of the Expense
					</label>
					<input
						type="text"
						className="form-control"
						id="name"
						aria-describedby="nameHelp"
						required
					/>
					<div id="nameHelp" className="form-text">
						Aryan be under budget
					</div>
				</div>
				<div className="mb-3">
					<label
						htmlFor="exampleInputPassword1"
						className="form-label"
					>
						Amount
					</label>
					<input
						type="number"
						className="form-control"
						id="amount"
						min={1}
						required
					/>
				</div>

				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
}
