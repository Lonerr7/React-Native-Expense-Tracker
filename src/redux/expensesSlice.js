import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import 'react-native-get-random-values';
import { expensesApi } from '../api/api';

const initialState = {
  expenses: [],
  isFetching: false,
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
      .addCase(sendAddedExpenseThunk.fulfilled, (state, action) => {
        state.expenses = [
          {
            title: action.payload.title,
            date: action.payload.date,
            price: action.payload.price,
            id: action.payload.id,
          },
          ...state.expenses,
        ];
      })
      .addCase(getExpensesThunk.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getExpensesThunk.fulfilled, (state, action) => {
        state.isFetching = false;
        const expenses = [];

        for (let expense in action.payload) {
          const expenseItem = {
            id: expense,
            title: action.payload[expense].title,
            date: action.payload[expense].date,
            price: action.payload[expense].price,
          };
          expenses.push(expenseItem);
        }

        state.expenses = expenses.reverse();
      });
  },
});

export const sendAddedExpenseThunk = createAsyncThunk(
  'expenses/sendAddedExpenseThunk',
  async function ({ expenseData }) {
    const response = await expensesApi.sendAddedExpense(expenseData);
    return { ...expenseData, id: response.data.name };
  }
);

export const getExpensesThunk = createAsyncThunk(
  'expenses/getExpensesThunk',
  async function () {
    const response = await expensesApi.getExpenses();

    return response.data;
  }
);

export const { deleteExpense, addExpense, updateExpense } =
  expensesSlice.actions;
export default expensesSlice.reducer;
