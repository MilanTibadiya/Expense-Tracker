import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";

const ExpenseContext = createContext();

export const ExpenseContextProvider = (props) => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
    getExpenses()
    }, []);
  
        async function getExpenses() {
          const res = await axios.get('https://signup-and-authentication-default-rtdb.firebaseio.com/expenses.json');
          console.log('get', res)
          setExpenses([])
            for (let key in res.data) {
              setExpenses((prev)=>[...prev , res.data[key]])
          }
      }

    async function postExpenses(item){
        const res = await axios.post('https://signup-and-authentication-default-rtdb.firebaseio.com/expenses.json',item);
        // console.log(res);
        getExpenses()
    }

    const expenseContextValue = {
        expenses: expenses,
        postExpenses: postExpenses,
    }

    return (
        <ExpenseContext.Provider value={expenseContextValue}>
            {props.children}
        </ExpenseContext.Provider>
    );
};

export default ExpenseContext;
