import React, { useContext } from "react";
import ExpensesItem from "./ExpensesItem";
import { AppContext } from "../AppContext";
export default function ExpenseList() {
	const { expenses } = useContext(AppContext);

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
