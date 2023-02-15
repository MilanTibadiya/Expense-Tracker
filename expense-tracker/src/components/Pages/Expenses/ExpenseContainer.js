import React from "react";

const ExpenseContainer = (props) => {
//   console.log("container", props.expenseArr);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Expanses</h1>
      <div>
        {props.expenseArr.map((x, i) => (
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
