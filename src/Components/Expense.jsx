import { useContext, useState } from "react";
import { AppContext } from "../AppContext";
export default function Expense() {
	const { expenses } = useContext(AppContext);
	const cost = expenses.reduce(
		(acc, currentVal) => (acc += currentVal.cost),
		0
	);
	console.log("cost" + cost);

	return (
		<div className="alert alert-warning">
			<h5>Expesne : ₹ {cost}</h5>
		</div>
	);
}
