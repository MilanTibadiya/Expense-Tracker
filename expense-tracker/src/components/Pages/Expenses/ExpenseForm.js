import React, { Fragment, useContext, useRef, useEffect } from "react";
import ExpenseContext from "../../../store/ExpenseContext";

const ExpenseForm = (props) => {
  const expenseCtx = useContext(ExpenseContext);
  // console.log('edit in form', expenseCtx.editExp.item.id)

  const amountRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();

  const submitHandler = () => {
    
    const expenseData = {
      Amount: amountRef.current.value,
      Description: descriptionRef.current.value,
      Category: categoryRef.current.value,
    };

      expenseCtx.postExpenses(expenseData);
    
    amountRef.current.value = '';
    descriptionRef.current.value = '';
    categoryRef.current.value= ''; 
  };

  useEffect(() => {
    amountRef.current.value = expenseCtx.editExp.item?.Amount || '';
    descriptionRef.current.value = expenseCtx.editExp.item?.Description || '';
    categoryRef.current.value= expenseCtx.editExp.item?.Category || '';
  }, [expenseCtx.editExp]);

   const editHandler = () => {
    expenseCtx.setUpadate(false);
    // console.log('check obj dest',expenseCtx.editExp.id, "---->")

    const expenseData = {
      Amount: amountRef.current.value,
      Description: descriptionRef.current.value,
      Category: categoryRef.current.value,
    };

    expenseCtx.editExpense(expenseCtx.editExp.id, expenseData);

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

        {!expenseCtx.update && <button
          className="btn mt-3 btn-primary" onClick={() => submitHandler()}>
          ADD EXPENSE
        </button> }
        {expenseCtx.update &&<button className="btn mt-3 mx-2 btn-warning" onClick={() => editHandler()}>
          UPDATE EXPENSE
        </button>}
      </form>
    </Fragment>
  );
};

export default ExpenseForm;
