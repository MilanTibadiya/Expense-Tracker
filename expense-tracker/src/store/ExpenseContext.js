import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";

const ExpenseContext = createContext();

export const ExpenseContextProvider = (props) => {
    const [expenses, setExpenses] = useState([]);

    const [editExp, setEditExp] = useState([]);
    const [update, setUpadate] = useState(false);
    // console.log('val upd',update)

    useEffect(() => {
    getExpenses()
    }, []);

    async function getExpenses() {
        const res = await axios.get('https://signup-and-authentication-default-rtdb.firebaseio.com/expenses.json');
        // console.log('get', res)
        setExpenses([])
          for (let key in res.data) {
            setExpenses((prev)=>[...prev, { id: key, ...res.data[key]}])
        }
    }

    async function editExpense(id, item) {
        const res = await axios.put(`https://signup-and-authentication-default-rtdb.firebaseio.com/expenses/${id}.json`, item);
        getExpenses();
        // console.log('put req',id, item)
    }

    async function postExpenses(item){
        const res = await axios.post('https://signup-and-authentication-default-rtdb.firebaseio.com/expenses.json',item);
        // console.log(res);
        getExpenses()
    }

    async function deleteExpanse(id) {
        const res = await axios.delete(`https://signup-and-authentication-default-rtdb.firebaseio.com/expenses/${id}.json`)
        getExpenses();
    }

    const expenseContextValue = {
        expenses: expenses,
        postExpenses: postExpenses,
        deleteExpanse: deleteExpanse,
        editExpense: editExpense,

        setEditExp: setEditExp,
        editExp: editExp,
        update: update,
        setUpadate: setUpadate,
    }

    return (
        <ExpenseContext.Provider value={expenseContextValue}>
            {props.children}
        </ExpenseContext.Provider>
    );
};

export default ExpenseContext;
