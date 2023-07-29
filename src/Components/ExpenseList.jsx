import React, { useContext, useEffect, useState } from "react";
import ExpensesItem from "./ExpensesItem";
import { AppContext } from "../AppContext";
import Shimmer from "./Shimmer";
export default function ExpenseList() {
	const { expenses } = useContext(AppContext);
	const [filteredList, setFilteredList] = useState(expenses);
	const [search, setSearch] = useState("");
	console.log(expenses);

	useEffect(() => {
		setFilteredList(expenses);
	}, [search]);

	function handleChange(e, expenses) {
		setSearch(e.target.value);
		const filteredArray = expenses.filter((expense) => {
			return expense.name.toLowerCase().includes(search);
		});
		setFilteredList(filteredArray);
	}
	return (
		<>
			<input
				type="text"
				placeholder="Search Item"
				onChange={(e, expenses) => handleChange(e, expenses)}
				className="mb-3 container"
			/>
			<ul className="list-group">
				{expenses.length === 0 ? (
					<Shimmer />
				) : (
					filteredList.map((expense) => {
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
		</>
	);
}
