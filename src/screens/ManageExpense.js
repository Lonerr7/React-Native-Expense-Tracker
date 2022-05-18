import { useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import ManageExpenseCustomButton from '../components/ManageExpenseCustomButton';
import ManageExpenseDeleteButton from '../components/ManageExpenseDeleteButton';
import { GlobalStyles } from '../helpers/styles';

const ManageExpense = ({ route, navigation }) => {
  const id = route.params?.expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: id ? 'Edit Expense' : 'Add Expense',
    });
  }, []);

  const cancelHandler = () => {
    navigation.goBack();
  };

  const addExpenseHandler = () => {
    navigation.goBack();
  };

  const updateExpenseHandler = () => {
    navigation.goBack();
  };

  if (id) {
    return (
      <View style={styles.container}>
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
          <ManageExpenseDeleteButton />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
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
