import { Pressable, View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { GlobalStyles } from '../helpers/styles';
import { useDispatch } from 'react-redux';
import { delteAnExpense } from '../redux/expensesSlice';

const ManageExpenseDeleteButton = ({ id, navigation }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressStyle : '')}
        onPress={() => {
          dispatch(delteAnExpense({ id }));
          navigation.goBack();
        }}
      >
        <Ionicons
          name="trash-bin"
          color={GlobalStyles.colors.error500}
          size={36}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 30,
  },
  pressStyle: {
    opacity: 0.6,
  },
});

export default ManageExpenseDeleteButton;
