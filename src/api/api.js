import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    'https://react-native-course-backend-default-rtdb.europe-west1.firebasedatabase.app/',
});

export const expensesApi = {
  sendAddedExpense: (expenseData) => {
    return axiosInstance.post('expenses.json', expenseData);
  },
  getExpenses: () => {
    return axiosInstance.get(`expenses.json`);
  },
  updateExpense: (id, expenseData) => {
    return axiosInstance.put(`expenses/${id}.json`, expenseData);
  },
  delteExpense: (id) => {
    return axiosInstance.delete(`expenses/${id}.json`);
  },
};
