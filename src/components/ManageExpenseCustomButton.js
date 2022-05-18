import { Pressable, View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../helpers/styles';

const ManageExpenseCustomButton = ({
  title,
  customContainerStyle,
  onPress,
  customTextStyle,
}) => {
  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressStyle : '')}
        android_ripple={0.5}
        onPress={onPress}
      >
        <View style={[styles.container, customContainerStyle]}>
          <Text style={[styles.text, customTextStyle]}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    width: '38%',
  },
  container: {
    borderRadius: 6,
    height: 35,
    paddingVertical: 6,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressStyle: {
    opacity: 0.5,
  },
  text: {
    color: GlobalStyles.colors.primary50,
  },
});

export default ManageExpenseCustomButton;
