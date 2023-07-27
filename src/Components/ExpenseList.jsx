import React from "react";
import ExpensesItem from "./ExpensesItem";
export default function ExpenseList() {
	const expenses = [
		{ id: 1, name: "Aryan", cost: 1888 },
		{ id: 2, name: "Milk", cost: 112 },
		{ id: 3, name: "Noob", cost: 17 },
		{ id: 4, name: "Bijju", cost: 166 },
		{ id: 5, name: "Books", cost: 12 },
	];
	return (
		<ul className="list-group">
			{expenses.map((expense) => {
				return (
					<ExpensesItem
						name={expense.name}
						id={expense.id}
						cost={expense.cost}
						key={expense.id}
					/>
				);
			})}
		</ul>
	);
}
