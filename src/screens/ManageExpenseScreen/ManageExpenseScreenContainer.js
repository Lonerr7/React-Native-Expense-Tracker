import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validateInput } from '../../helpers/helpers';
import {
  addExpense,
  sendAddedExpenseThunk,
  updateExpense,
} from '../../redux/expensesSlice';
import ManageExpense from './ManageExpense';
import { Alert } from 'react-native';

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
        date: expense.date,
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
    if (
      validateInput(
        +inputValues.amount,
        new Date(inputValues.date),
        inputValues.title
      )
    ) {
      dispatch(
        sendAddedExpenseThunk({
          expenseData: {
            price: +inputValues.amount,
            date: inputValues.date,
            title: inputValues.title,
          },
        })
      );
      navigation.goBack();
    } else {
      Alert.alert('Invalid Input', 'You passed wrong data to the input', [
        { style: 'default', text: 'Ok!' },
      ]);
    }
  };

  const updateExpenseHandler = () => {
    if (
      validateInput(
        +inputValues.amount,
        new Date(inputValues.date),
        inputValues.title
      )
    ) {
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
    } else {
      Alert.alert('Invalid Input', 'You passed wrong data to the input', [
        { style: 'default', text: 'Ok!' },
      ]);
    }
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
