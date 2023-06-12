import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import colors from '@ds/styles/colors';
import Label from './Label';

type TTextField = {
  label: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  value: string;
  error?: string;
};

const TextField = ({
  label,
  onChangeText,
  secureTextEntry,
  value,
  error,
}: TTextField) => {
  const accessibilityLabel = error ? `${label}, ${error}` : label;

  return (
    <View style={styles.container}>
      <Label>{label}</Label>
      <TextInput
        style={styles.textInput}
        autoCapitalize={'none'}
        autoCorrect={false}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        accessibilityLabel={accessibilityLabel}
      />
      <Text
        style={styles.errorText}
        importantForAccessibility="no"
        accessibilityElementsHidden>
        {error}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: 'stretch', flexDirection: 'column' },
  textInput: {
    height: 44,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 6,
    padding: 5,
  },
  errorText: {
    color: colors.red,
    paddingTop: 5,
  },
});

export default TextField;
