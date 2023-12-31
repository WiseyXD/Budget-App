import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./Components/Budget";
import Expense from "./Components/Expense";
import Remaining from "./Components/Remaining";
import ExpenseList from "./Components/ExpenseList";
import ExpenseForm from "./Components/ExpenseForm";
import { AppProvider } from "./AppContext";
function App() {
	return (
		<AppProvider>
			<div className="container">
				<h1 className="mt-3">Budget App</h1>
				<div className="row mt-3">
					<div className="col-sm">
						<Budget />
					</div>
					<div className="col-sm">
						<Expense />
					</div>
					<div className="col-sm">
						<Remaining />
					</div>
				</div>
				<div className="mt-3">
					<h2>Expenses List</h2>
					<ExpenseList />
				</div>
				<div className="mt-3">
					<ExpenseForm />
				</div>
			</div>
		</AppProvider>
	);
}

export default App;
