import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ExpenseItem from '../components/Expenses/ExpenseItem';
import ExpensesInfo from '../components/Expenses/ExpensesInfo';
import { countTotalPrice } from '../helpers/helpers';
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

  const renderItem = ({ item }) => {
    return (
      <ExpenseItem date={item.date} price={item.price} title={item.title} />
    );
  };

  const totalPrice = countTotalPrice(expenses);

  return (
    <View style={styles.container}>
      <ExpensesInfo timePeriod={'Total'} totalPrice={totalPrice} />
      <FlatList
        data={expenses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
