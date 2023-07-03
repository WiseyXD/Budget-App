import React, { useContext, useState } from 'react';
import {v4 as uuidV4} from 'uuid'
import useLocalStorage from './Hooks/useLocalStorage';

const BudgetContext = React.createContext()
export function useBudgets(){
    return useContext(BudgetContext);
}

export function BudgetProvider({children})
{

   const [budgets,setBudgets] = useState([])
   const [expenses,setExpenses] = useState([])


   // to view expenses of a budget
   function getBudgetExpenses(budgetid)
   {
        expenses.filter(expense=> expense.budgetid === budgetid)
   }

   function addExpense({budgetid,amount,max,description})
   {
    setExpenses(prevExpenses=>{
        return [...prevExpenses , {id:uuidV4() , amount: amount , max:max , description : description , budgetID:budgetid}]
    })
   }

   function addBudget({name , max })
   {
        setBudgets(prevBudgets=>{
            if (prevBudgets.find(prevBudget=> prevBudget.name===name))
            {
                return prevBudgets
            }
            return [...prevBudgets , {name:name,max:max,id:uuidV4()}]
        })
   }

   //TODO : Add expenses to uncategorized budget when deleted 

   function deleteExpense({id})
   {
        setExpenses(prevExpenses=>{ return prevExpenses.filter(expenses => expenses.id !== id)})
   }

   function deleteBudget({id})
   {
        setBudgets(prevBudgets=> {return prevBudgets.filter(budgets => budgets.id !== id)});
   }
    return(
        <BudgetContext.Provider value={{
            budgets,
            expenses,
            getBudgetExpenses,
            addExpense,
            addBudget,
            deleteExpense,
            deleteBudget
        }}>
        {children}
        </BudgetContext.Provider>
    )
        
        
    
}