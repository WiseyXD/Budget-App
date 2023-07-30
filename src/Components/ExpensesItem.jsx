import React, { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AppContext } from "../AppContext";
export default function ExpensesItem({ name, cost, id }) {
	const { dispatch } = useContext(AppContext);

	function handleDelete() {
		dispatch({
			type: "DELETE_EXPENSE",
			payload: id,
		});
	}
	return (
		<li className="list-group-item">
			<div className="d-flex justify-content-between">
				<b>{name}</b>
				<div className="d-flex justify-content-between">
					<div className="px-2">₹ {cost}</div>
					<div>
						<MdDeleteForever
							fontSize={19}
							className="mt-1 mb-1"
							onClick={handleDelete}
						/>
					</div>
				</div>
			</div>
		</li>
	);
}
