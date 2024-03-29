import axios from "axios";

import { expensesActions } from "../../../store/ExpenseSlicer";


export async function getExpenses(dispatch) {
    const res = await axios.get(`https://expense-30064-default-rtdb.firebaseio.com/expenses${localStorage.getItem("userEmail").split("@")[0]}.json`);
    const data = [];
    let sum = 0;
      for (let key in res.data) {
        data.push({ id: key, ...res.data[key]});
        sum += +res.data[key].Amount;
        // setExpenses([])
        // setExpenses((prev)=>[...prev, { id: key, ...res.data[key]}])
    }
    dispatch(expensesActions.setExpenses({ data: data, total: sum}));
}

export async function deleteExpanse(id, dispatch) {
    const res = await axios.delete(`https://expense-30064-default-rtdb.firebaseio.com/expenses${localStorage.getItem("userEmail").split("@")[0]}/${id}.json`)
    getExpenses(dispatch);
}

export async function editExpense(id, item, dispatch) {
    const res = await axios.put(`https://expense-30064-default-rtdb.firebaseio.com/expenses${localStorage.getItem("userEmail").split("@")[0]}/${id}.json`, item);
    await getExpenses(dispatch);
}

export async function postExpenses(item, dispatch){
    const res = await axios.post(`https://expense-30064-default-rtdb.firebaseio.com/expenses${localStorage.getItem("userEmail").split("@")[0]}.json`,item);
    getExpenses(dispatch)
}