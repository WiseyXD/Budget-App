/* eslint-disable no-mixed-spaces-and-tabs */
import Card from "react-bootstrap/Card";
import { currencyFormatter } from "../utils";
import Button from "react-bootstrap/esm/Button";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Stack from "react-bootstrap/esm/Stack";

export default function BudgetCard({name,amount,max}) {
	return (
		<div>
			<Card>
			<Card.Body>
        		<Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
					<div><h3>{name}</h3></div>
					<div className="d-flex align-items-baseline">{currencyFormatter.format(amount)}
					<span className="text-muted fs-6 ms-1">/ {currencyFormatter.format(max)}</span></div>
				</Card.Title>
       			<ProgressBar now={amount} max={max} min={0} variant={getVariant()}/>
				<Stack direction="horizontal" gap={2} className='mb-4 mt-4'>
        		<Button variant="primary" className="ms-auto">Go somewhere</Button>
        		<Button variant="outline-primary">Go somewhere</Button>
				</Stack>
      		</Card.Body>
			</Card>
		</div>
	);
}

function getVariant(amount,max)
{
	const ratio = amount/max ;
	if(ratio < .5)
	{
		return "primary"
	}
	else if (ratio < .8)
	{
		return "warning"
	}
	else{
		return "danger"
	}
}