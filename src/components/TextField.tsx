import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import colors from '@ds/styles/colors';

type TTextField = {
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  value: string;
};

const TextField = ({ onChangeText, secureTextEntry, value }: TTextField) => {
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
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 6,
    padding: 5,
  },
});

export default TextField;
