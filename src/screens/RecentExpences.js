import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../helpers/styles';

const RecentExpences = () => {
  return (
    <View style={styles.container}>
      <Text>RecentExpences</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary800,
  },
});

export default RecentExpences;
