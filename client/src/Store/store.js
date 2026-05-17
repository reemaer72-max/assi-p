import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../Features/UserSlice.js";
import expenseReducer from "../Features/ExpenseSlice.js";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    expenses: expenseReducer,
  },
});
