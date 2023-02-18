import React, { Fragment, useContext, useRef, useEffect } from "react";

import { useDispatch } from "react-redux";
import { postExpenses } from "./ExpenseRequests";
import { editExpense } from "./ExpenseRequests";

const ExpenseForm = (props) => {
  const dispatch = useDispatch();

  const amountRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();

  const submitHandler = () => {
    
    const expenseData = {
      Amount: amountRef.current.value,
      Description: descriptionRef.current.value,
      Category: categoryRef.current.value,
    };
    postExpenses(expenseData, dispatch);
    // expenseCtx.postExpenses(expenseData);
    
    amountRef.current.value = '';
    descriptionRef.current.value = '';
    categoryRef.current.value= ''; 
  };

  useEffect(() => {
    amountRef.current.value = props.editExp.item?.Amount || '';
    descriptionRef.current.value = props.editExp.item?.Description || '';
    categoryRef.current.value= props.editExp.item?.Category || '';
  }, [props.editExp]);

   const editHandler = () => {
    props.setUpadate(false);

    const expenseData = {
      Amount: amountRef.current.value,
      Description: descriptionRef.current.value,
      Category: categoryRef.current.value,
    };
    editExpense(props.editExp.id, expenseData, dispatch);
    // expenseCtx.editExpense(expenseCtx.editExp.id, expenseData);

    amountRef.current.value = '';
    descriptionRef.current.value = '';
    categoryRef.current.value= ''; 
   }

  return (
    <Fragment>
      <form
        // onSubmit={submitHandler}
        id="expenseForm"
        className="text-center justify-content-around mx-5 p-5 shadow"
      >
        <input
          className=" form-control"
          type="number"
          placeholder="Amount"
          name="Amount"
          ref={amountRef}
          required
        />
        <textarea
          className=" form-control mt-2"
          type="text"
          placeholder="Description"
          name="Description"
          ref={descriptionRef}
          required
        />

        <select
          className="form-control mt-2"
          ref={categoryRef}
          name="Category"
          required
        >
          <option>Food</option>
          <option>Petrol</option>
          <option>Cloths</option>
          <option>other..</option>
        </select>

        {!props.update && <button
          className="btn mt-3 btn-primary" onClick={() => submitHandler()}>
          ADD EXPENSE
        </button> }
        {props.update &&<button className="btn mt-3 mx-2 btn-warning" onClick={() => editHandler()}>
          UPDATE EXPENSE
        </button>}
      </form>
    </Fragment>
  );
};

export default ExpenseForm;
