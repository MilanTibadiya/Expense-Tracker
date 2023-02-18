import React, { useEffect } from "react";

import { CSVDownload, CSVLink } from "react-csv";

import { useDispatch, useSelector } from "react-redux";
import { deleteExpanse, getExpenses } from "./ExpenseRequests";

const ExpenseContainer = (props) => {

  const dispatch = useDispatch();
  const expense = useSelector(state => state.expenses.expenses);

  useEffect(() => {
    getExpenses(dispatch);
  }, []);

  const editExpense = (id, item) => {
    props.setEditExp({id, item});
    props.setUpadate(true);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Expenses</h1>
      {expense && (
        <CSVLink data={expense}>
          <button className="ml-5 btn btn-info">DOWNLOAD EXPENSES FILE(csv)</button>
        </CSVLink>
      )}
      <div id='whiteBorder'>
        {expense?.map((x, i) => (
          <div
            className="d-flex justify-content-around mx-5 p-1 shadow"
            key={i}
          >
            <p>Amount - {x.Amount}</p>
            <p>Description - {x.Description}</p>
            <p>Category - {x.Category}</p>
            <div>
              <button
                onClick={() => editExpense(x.id, x)}
                type="button"
                className="btn mx-2 btn-outline-primary btn-sm"
              >
                Edit
              </button>
              <button
                onClick={() => deleteExpanse(x.id, dispatch)}
                type="button"
                className="btn btn-outline-danger btn-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExpenseContainer;
