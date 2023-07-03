import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import BudgetCard from './Components/BudgetCard';
function App() {
  return (
    <Container className='my-4'>
      <Stack direction="horizontal" gap={3} className='mb-4'>
      <h1 className='me-auto'>Budget</h1>
      <Button className='primary' variant='primary'>Add Budget</Button >
      <Button className='outline-primary' variant="outline-primary">Add Expense</Button >
    </Stack>
    <div style={{display:'grid',gridTemplateColumns:"repeat(autofill,,minmax(300px , 1fr))", gap:"1rem", alignItems:"flex-start"}}>
        <BudgetCard name="aryan" max={20000} amount={22000} gray/>
    </div>
    </Container>
    


  )
}

export default App
