import React from "react";
import { MdDeleteForever } from "react-icons/md";
export default function ExpensesItem({ name, cost, id }) {
	return (
		<li className="list-group-item">
			<div className="d-flex justify-content-between">
				<b>{name}</b>
				<div className="d-flex justify-content-between">
					<div className="px-2">₹ {cost}</div>
					<div>
						<MdDeleteForever fontSize={19} className="mt-1 mb-1" />
					</div>
				</div>
			</div>
		</li>
	);
}
