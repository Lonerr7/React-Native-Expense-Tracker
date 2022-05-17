import { View, Text, Pressable, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const AddExpenseButton = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Ionicons name="add" size={26} color='black' />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddExpenseButton;
