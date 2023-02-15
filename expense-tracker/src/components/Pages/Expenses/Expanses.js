import React, { useState } from "react";

import ExpenseContainer from "./ExpenseContainer";
import ExpenseForm from "./ExpenseForm";

const Expenses = () => {
  const [expenseArr, setExpenseArr] = useState([]);
  console.log("Expense", expenseArr);

  expenseArr.map((x, i) => console.log('this is x',i , x))
  return (
    <>
      <section>
        <ExpenseForm expenseArr={expenseArr} setExpenseArr={setExpenseArr} />
        <ExpenseContainer expenseArr={expenseArr} />
      </section>
    </>
  );
};

export default Expenses;
