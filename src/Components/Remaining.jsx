import { useContext } from "react";
import { AppContext } from "../AppContext";
export default function Remaining() {
	const { budget, expenses } = useContext(AppContext);
	const totalExpense = getTotalCost(expenses);
	console.log(totalExpense);

	function getTotalCost(array) {
		let totalCost = 0;
		for (let i = 0; i < array.length; i++) {
			totalCost += array[i].cost;
		}

		return totalCost;
	}
	return (
		<div className="alert alert-secondary">
			<h5>Remaining: ₹ {budget - totalExpense}</h5>
		</div>
	);
}
