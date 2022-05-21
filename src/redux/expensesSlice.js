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
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      })
      .addCase(delteAnExpense.fulfilled, (state, action) => {
        state.expenses = state.expenses.filter(
          (expense) => expense.id !== action.payload
        );
      })
      .addCase(updateExpense.fulfilled, (state, action) => {
        state.expenses = state.expenses.map((exp) => {
          if (exp.id === action.payload.id) {
            exp = {
              ...action.payload.expenseData,
              id: exp.id,
            };
            return exp;
          }

          return exp;
        });
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

export const updateExpense = createAsyncThunk(
  'expenses/updateExpense',
  async function ({ id, expenseData }) {
    const response = await expensesApi.updateExpense(id, expenseData);

    if (response.status === 200) return { id, expenseData };
  }
);

export const delteAnExpense = createAsyncThunk(
  'expenses/deleteAnExpense',
  async function ({ id }) {
    const response = await expensesApi.delteExpense(id);

    return id;
  }
);

export const { deleteExpense, addExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
