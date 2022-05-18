import { Pressable, View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { GlobalStyles } from '../helpers/styles';

const ManageExpenseDeleteButton = ({ onPress }) => {
  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressStyle : '')}
        onPress={onPress}
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
