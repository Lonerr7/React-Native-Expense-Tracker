import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { GlobalStyles } from '../../helpers/styles';

const ExpenseItem = ({ title, date, price, id }) => {
  const navigation = useNavigation();

  const expensePressHandler = () => {
    navigation.navigate('ManageExpense', {
      expenseId: id,
    });
  };

  return (
    <View>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressedStyle : '')}
        onPress={expensePressHandler}
      >
        <View style={styles.container}>
          <View style={styles.textBox}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
          <View style={styles.priceBox}>
            <Text style={styles.price}>{price}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pressedStyle: {
    opacity: 0.7,
  },
  container: {
    padding: 12,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 5,
    marginBottom: 6,
  },
  textBox: {
    maxWidth: '60%',
  },
  title: {
    color: GlobalStyles.colors.primary50,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  date: {
    color: GlobalStyles.colors.primary50,
  },
  priceBox: {
    backgroundColor: 'white',
    borderRadius: 3,
    width: '20%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    color: GlobalStyles.colors.primary400,
    fontWeight: '600',
  },
});

export default ExpenseItem;
