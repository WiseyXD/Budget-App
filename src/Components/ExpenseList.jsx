import React, { useContext, useEffect, useState } from "react";
import ExpensesItem from "./ExpensesItem";
import { AppContext } from "../AppContext";
import Shimmer from "./Shimmer";
import { BiSearchAlt } from "react-icons/bi";
export default function ExpenseList() {
	const { expenses } = useContext(AppContext);
	const [filteredList, setFilteredList] = useState(expenses);
	const [search, setSearch] = useState("");
	// console.log(expenses);
	console.log(search);
	useEffect(() => {
		setFilteredList(expenses);
	}, [search]);

	function handleChange(e) {
		e.preventDefault();
		const filteredArray = expenses.filter((expense) => {
			return expense.name.toLowerCase().includes(search.toLowerCase());
		});
		setFilteredList(filteredArray);
	}
	return (
		<>
			<form onSubmit={handleChange} className="mb-3 container">
				<input
					type="text"
					placeholder="Search Item"
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button type="submit">
					<BiSearchAlt />
				</button>
			</form>

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
