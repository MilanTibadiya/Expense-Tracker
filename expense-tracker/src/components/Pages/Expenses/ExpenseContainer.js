import React, { useContext } from "react";

import ExpenseContext from "../../../store/ExpenseContext";

const ExpenseContainer = (props) => {
  const expensesCtx = useContext(ExpenseContext);
  // console.log('find key', expansesCtx);

  const editExpense = (id, item) => {
    expensesCtx.setEditExp({id, item});
    expensesCtx.setUpadate(true);
    // expensesCtx.deleteExpanse(id); // temp not per
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Expenses</h1>
      <div>
        {expensesCtx.expenses.map((x, i) => (
          <div
            className="d-flex justify-content-around mx-5 p-1 shadow"
            key={i}
          >
            <p>Amount - {x.Amount}</p>
            <p>Description - {x.Description}</p>
            <p>Category - {x.Category}</p>
            <div>
            <button onClick={() => editExpense(x.id, x) } type="button" className="btn mx-2 btn-outline-primary btn-sm">Edit</button>
            <button onClick={() => expensesCtx.deleteExpanse(x.id)} type="button" className="btn btn-outline-danger btn-sm">Delete</button>
            </div>
          </div>
        ))}
      </div>;
    </>
  );
};

export default ExpenseContainer;
