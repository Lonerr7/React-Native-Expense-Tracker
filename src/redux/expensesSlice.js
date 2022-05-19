import { createSlice } from '@reduxjs/toolkit';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  expenses: [
    {
      id: uuidv4(),
      title: 'Computer',
      price: 14.99,
      date: new Date(2022, 4, 14),
    },
    {
      id: uuidv4(),
      title: 'PS5',
      price: 33.33,
      date: new Date(2022, 4, 14),
    },
  ],
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      );
    },
    addExpense: (state, action) => {
      state.expenses.push({
        ...action.payload,
        id: uuidv4(),
      });
    },
    updateExpense: (state, action) => {
      state.expenses = state.expenses.map((exp) => {
        if (exp.id === action.payload.id) {
          exp = {
            ...action.payload.updatedExpense,
            id: exp.id,
          };
          return exp;
        }

        return exp;
      });
    },
  },
});

export const { deleteExpense, addExpense, updateExpense } =
  expensesSlice.actions;
export default expensesSlice.reducer;
