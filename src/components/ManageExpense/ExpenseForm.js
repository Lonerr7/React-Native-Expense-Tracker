import { View } from 'react-native';
import CustomInput from './CustomInput';

const ExpenseForm = () => {
  const amountChangeHandler = () => {};

  return (
    <View>
      <CustomInput
        label="Amount"
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: amountChangeHandler,
        }}
      />
      <CustomInput
        label="Date"
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <CustomInput label="Description" />
    </View>
  );
};

export default ExpenseForm;
