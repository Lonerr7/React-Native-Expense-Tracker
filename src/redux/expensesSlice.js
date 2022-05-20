import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { expensesApi } from '../api/api';

const initialState = {
  expenses: [],
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
  extraReducers: (builder) => {
    builder
      .addCase(sendAddedExpenseThunk.pending, (state, action) => {})
      .addCase(sendAddedExpenseThunk.fulfilled, (state, action) => {});
  },
});

export const sendAddedExpenseThunk = createAsyncThunk(
  'expenses/sendAddedExpenseThunk',
  async function ({ expenseData }) {
    const response = await expensesApi.sendAddedExpense(expenseData);
    console.log(response.data);
  }
);

export const { deleteExpense, addExpense, updateExpense } =
  expensesSlice.actions;
export default expensesSlice.reducer;
