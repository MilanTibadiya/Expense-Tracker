import React from "react";

import ExpenseContainer from "./ExpenseContainer";
import ExpenseForm from "./ExpenseForm";

const Expenses = () => {

  return (
    <>
      <section>
        <ExpenseForm/>
        <ExpenseContainer/>
      </section>
    </>
  );
};

export default Expenses;
