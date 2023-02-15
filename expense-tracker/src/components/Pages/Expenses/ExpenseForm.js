import React, { Fragment, useRef } from "react";

const ExpenseForm = (props) => {
  const amountRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      Amount: amountRef.current.value,
      Description: descriptionRef.current.value,
      Category: categoryRef.current.value,
    };
    // console.log(expenseData);
    props.setExpenseArr((data) => [...data, expenseData]);
  };
  return (
    <Fragment>
      <form
        onSubmit={submitHandler}
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

        <button
          // onClick={handleSubmit}
          className="btn mt-3 btn-primary"
        >
          ADD EXPENSE
        </button>
      </form>
    </Fragment>
  );
};

export default ExpenseForm;
