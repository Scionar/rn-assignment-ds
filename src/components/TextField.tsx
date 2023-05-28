import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const TextField = ({ onChangeText, secureTextEntry, value }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        autoCapitalize={'none'}
        autoCorrect={false}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center' },
  textInput: {
    height: 44,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#202020',
    borderRadius: 6,
    padding: 5,
  },
});

export default TextField;
