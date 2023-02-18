import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./AuthSlicer";
import expensesSlice from "./ExpenseSlicer";

const store = configureStore({
  reducer: { auth: authSlice.reducer, expenses: expensesSlice.reducer },
});

export default store