import React, { useContext } from "react";
import ExpensesItem from "./ExpensesItem";
import { AppContext } from "../AppContext";
import Shimmer from "./Shimmer";
export default function ExpenseList() {
	const { expenses } = useContext(AppContext);
	console.log(expenses);
	return (
		<ul className="list-group">
			{expenses.length === 0 ? (
				<Shimmer />
			) : (
				expenses.map((expense) => {
					return (
						<ExpensesItem
							name={expense.name}
							id={expense.id}
							cost={expense.cost}
							key={expense.id}
						/>
					);
				})
			)}
		</ul>
	);
}
