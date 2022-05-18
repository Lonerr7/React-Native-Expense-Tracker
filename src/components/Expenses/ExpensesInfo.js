import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../helpers/styles';

const ExpensesInfo = ({ timePeriod, totalPrice }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.timePeriod}>{timePeriod}</Text>
      <Text style={styles.totalPrice}>${totalPrice}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 37,
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 5,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timePeriod: {
    color: GlobalStyles.colors.primary400,
  },
  totalPrice: {
    color: GlobalStyles.colors.primary400,
    fontWeight: '700',
  },
});

export default ExpensesInfo;
