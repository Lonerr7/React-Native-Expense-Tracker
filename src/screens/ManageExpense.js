import { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';

const ManageExpense = ({ route, navigation }) => {
  const id = route.params?.expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: id ? 'Edit Expense' : 'Add Expense',
    });
  }, []);

  return (
    <View>
      <Text>ManageExpenses</Text>
    </View>
  );
};

export default ManageExpense;
