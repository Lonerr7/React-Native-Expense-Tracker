import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Preloader from '../components/common/Preloader';
import ExpensesOutput from '../components/Expenses/ExpensesOutput';
import { GlobalStyles } from '../helpers/styles';

const AllExpenses = () => {
  const expenses = useSelector((state) => state.expenses.expenses);
  const isFetching = useSelector((state) => state.expenses.isFetching);

  return (
    <View
      style={
        isFetching
          ? [styles.container, styles.preloaderStyleContainer]
          : styles.container
      }
    >
      {isFetching ? (
        <Preloader />
      ) : (
        <ExpensesOutput timePeriod="All" expenses={expenses} />
      )}
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
  preloaderStyleContainer: {
    alignItems: 'center',
  },
});

export default AllExpenses;
