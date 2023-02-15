import React, { useContext } from "react";
import ExpenseContext from "../../../store/ExpenseContext";

const ExpenseContainer = (props) => {
  const expansesCtx = useContext(ExpenseContext);
  
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Expanses</h1>
      <div>
        {expansesCtx.expenses.map((x, i) => (
          <div
            className=" d-flex justify-content-around mx-5 p-1 shadow"
            key={i}
          >
            <p>Amount - {x.Amount}</p>
            <p>Description - {x.Description}</p>
            <p>Category - {x.Category}</p>
          </div>
        ))}
      </div>;
    </>
  );
};

export default ExpenseContainer;
