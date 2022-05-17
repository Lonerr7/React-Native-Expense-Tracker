import { createSlice } from '@reduxjs/toolkit';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  expenses: [
    {
      id: uuidv4(),
      title: 'Computer',
      price: 14.99,
      date: new Date(2022, 1, 24),
    },
    {
      id: uuidv4(),
      title: 'PS5',
      price: 33.33,
      date: new Date(2022, 1, 24),
    },
  ],
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {},
});

export const {} = expensesSlice.actions;
export default expensesSlice.reducer;
