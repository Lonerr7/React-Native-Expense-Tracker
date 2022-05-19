import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import ExpensesOutput from '../components/Expenses/ExpensesOutput';
import { filterDates } from '../helpers/helpers';
import { GlobalStyles } from '../helpers/styles';

const RecentExpences = () => {
  const expenses = useSelector((state) => state.expenses.expenses);

  const filteredExpenses = filterDates(expenses);

  return (
    <View style={styles.container}>
      <ExpensesOutput timePeriod="Last 7 days" expenses={filteredExpenses} />
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

export default RecentExpences;
