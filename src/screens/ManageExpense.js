import { View, StyleSheet } from 'react-native';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import ManageExpenseCustomButton from '../components/ManageExpenseCustomButton';
import ManageExpenseDeleteButton from '../components/ManageExpenseDeleteButton';
import { GlobalStyles } from '../helpers/styles';

const ManageExpense = ({
  id,
  inputChangeHandler,
  cancelHandler,
  addExpenseHandler,
  updateExpenseHandler,
  inputValues,
  navigation
}) => {
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
