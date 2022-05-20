import { View, FlatList, StyleSheet } from 'react-native';
import { countTotalPrice } from '../../helpers/helpers';
import ExpenseItem from './ExpenseItem';
import ExpensesInfo from './ExpensesInfo';

const ExpensesOutput = ({ expenses, timePeriod }) => {
  const renderItem = ({ item }) => {
    return (
      <ExpenseItem
        date={item.date}
        price={item.price}
        title={item.title}
        id={item.id}
      />
    );
  };

  const totalPrice = countTotalPrice(expenses);

  return (
    <View style={styles.container}>
      <ExpensesInfo timePeriod={timePeriod} totalPrice={totalPrice} />
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
  },
});

export default ExpensesOutput;
