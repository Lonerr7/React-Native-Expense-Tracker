import { configureStore } from '@reduxjs/toolkit';
import expensesSlice from './expensesSlice';

const store = configureStore({
  reducer: {
    expenses: expensesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 128 },
    }),
});

export default store;
