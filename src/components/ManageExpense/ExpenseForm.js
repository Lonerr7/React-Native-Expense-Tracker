import { useState } from 'react';
import { View, StyleSheet, Keyboard, Pressable } from 'react-native';
import CustomInput from './CustomInput';

const ExpenseForm = ({ inputValues, inputChangeHandler }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <CustomInput
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: (newText) => {
              console.log(newText);
              inputChangeHandler('amount', newText);
            },
            value: inputValues.amount,
          }}
        />
        <CustomInput
          label="Date"
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: (newText) => {
              inputChangeHandler('date', newText);
            },
            value: inputValues.date,
          }}
        />
        <CustomInput
          label="Description"
          textInputConfig={{
            multiline: true,
            autoCapitalize: 'sentences',
            onChangeText: (newText) => {
              inputChangeHandler('title', newText);
            },
            value: inputValues.title,
          }}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
});

export default ExpenseForm;
