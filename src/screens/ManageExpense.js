import { useEffect, useLayoutEffect, useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import ManageExpenseCustomButton from '../components/ManageExpenseCustomButton';
import ManageExpenseDeleteButton from '../components/ManageExpenseDeleteButton';
import { GlobalStyles } from '../helpers/styles';
import { addExpense, updateExpense } from '../redux/expensesSlice';

const ManageExpense = ({ route, navigation }) => {
  const id = route.params?.expenseId;

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
    console.log('changed');
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

  if (id) {
    return (
      <View style={styles.container}>
        <ExpenseForm
          inputValues={inputValues}
          inputChangeHandler={inputChangeHandler}
        />
        <View style={[styles.buttonsBox, styles.buttonsEditBox]}>
          <ManageExpenseCustomButton title="Cancel" onPress={cancelHandler} />
          <ManageExpenseCustomButton
            title="Update"
            customTextStyle={styles.buttonTitleStyle}
            customContainerStyle={styles.buttonContainerStyle}
            onPress={updateExpenseHandler}
          />
        </View>
        <View>
          <ManageExpenseDeleteButton id={id} navigation={navigation} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        inputValues={inputValues}
        inputChangeHandler={inputChangeHandler}
      />
      <View style={styles.buttonsBox}>
        <ManageExpenseCustomButton title="Cancel" onPress={cancelHandler} />
        <ManageExpenseCustomButton
          title="Add"
          customTextStyle={styles.buttonTitleStyle}
          customContainerStyle={styles.buttonContainerStyle}
          onPress={addExpenseHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary800,
    alignItems: 'center',
  },
  buttonsBox: {
    flexDirection: 'row',
    marginTop: 30,
    width: '90%',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  buttonsEditBox: {
    borderBottomWidth: 1,
    borderBottomColor: GlobalStyles.colors.primary200,
  },
  buttonTitleStyle: {
    color: 'white',
  },
  buttonContainerStyle: {
    backgroundColor: GlobalStyles.colors.primary500,
  },
});

export default ManageExpense;
