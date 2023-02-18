import React, { useState } from "react";

import { useSelector } from "react-redux";

import ExpenseContainer from "./ExpenseContainer";
import ExpenseForm from "./ExpenseForm";

const Expenses = () => {
  const total = useSelector((state) => state.expenses.total);

  const [editExp, setEditExp] = useState([]);
    const [update, setUpadate] = useState(false);

  return (
    <>
      <section>
        {total > 10000 && (
          <button className=" btn btn-warning m-5" style={{border : '4px solid silver'}}>Unlock Premium</button>
        )}
        <ExpenseForm editExp={editExp} update={update} setUpadate= {setUpadate}/>
        <ExpenseContainer setEditExp={setEditExp} setUpadate= {setUpadate} />
      </section>
    </>
  );
};

export default Expenses;
