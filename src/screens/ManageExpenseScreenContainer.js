import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense, updateExpense } from '../redux/expensesSlice';
import ManageExpense from './ManageExpense';

const ManageExpenseScreenContainer = ({ route, navigation }) => {
  const id = route.params?.expenseId;
  const nav = navigation;

  const expenses = useSelector((state) => state.expenses.expenses);
  const [expense] = expenses.filter((exp) => exp.id === id);

  const dispatch = useDispatch();

  const [inputValues, setInputValues] = useState({
    amount: '',
    date: '',
    title: '',
  });

  useEffect(() => {
    if (id)
      setInputValues({
        amount: expense.price.toString(),
        title: expense.title,
        date: expense.date.toLocaleDateString(),
      });
  }, []);

  const inputChangeHandler = (inputIdentifier, newText) => {
    setInputValues((prevState) => ({
      ...prevState,
      [inputIdentifier]: newText,
    }));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: id ? 'Edit Expense' : 'Add Expense',
    });
  }, []);

  const cancelHandler = () => {
    navigation.goBack();
  };

  const addExpenseHandler = () => {
    dispatch(
      addExpense({
        price: +inputValues.amount,
        date: new Date(inputValues.date),
        title: inputValues.title,
      })
    );
    navigation.goBack();
  };

  const updateExpenseHandler = () => {
    dispatch(
      updateExpense({
        id: id,
        updatedExpense: {
          price: +inputValues.amount,
          date: new Date(inputValues.date),
          title: inputValues.title,
        },
      })
    );
    navigation.goBack();
  };

  return (
    <ManageExpense
      id={id}
      inputChangeHandler={inputChangeHandler}
      cancelHandler={cancelHandler}
      addExpenseHandler={addExpenseHandler}
      updateExpenseHandler={updateExpenseHandler}
      inputValues={inputValues}
      navigation={nav}
    />
  );
};

export default ManageExpenseScreenContainer;
