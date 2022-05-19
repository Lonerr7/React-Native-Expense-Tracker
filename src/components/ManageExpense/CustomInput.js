import { View, Text, TextInput } from 'react-native';

const CustomInput = ({ label, textInputConfig }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
};

export default CustomInput;
