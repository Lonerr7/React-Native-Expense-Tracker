import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import ExpensesOutput from '../components/Expenses/ExpensesOutput';
import { GlobalStyles } from '../helpers/styles';

const AllExpenses = () => {
  const expenses = useSelector((state) => state.expenses.expenses);

  return (
    <View style={styles.container}>
      <ExpensesOutput expenses={expenses} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary800,
    paddingHorizontal: 15,
    paddingTop: 30,
  },
});

export default AllExpenses;
