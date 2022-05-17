import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import ExpenseItem from '../components/Expenses/ExpenseItem';
import { GlobalStyles } from '../helpers/styles';

const AllExpenses = () => {
  const expenses = useSelector((state) => state.expenses.expenses);

  const expensesElements = expenses.map((exp) => (
    <ExpenseItem
      key={exp.id}
      date={exp.date}
      price={exp.price}
      title={exp.title}
    />
  ));

  return <View style={styles.container}>{expensesElements}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary800,
    paddingHorizontal: 15,
    paddingTop: 30
  },
});

export default AllExpenses;
