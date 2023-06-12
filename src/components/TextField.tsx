import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import colors from '@ds/styles/colors';

type TTextField = {
  label: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  value: string;
  error?: string;
  inputMode?: 'text' | 'email' | 'numeric';
};

const TextField = ({
  label,
  onChangeText,
  secureTextEntry,
  value,
  error,
  inputMode = 'text',
}: TTextField) => {
  const accessibilityLabel = error ? `${label}, ${error}` : label;

  return (
    <View style={styles.container}>
      <Text
        style={styles.label}
        importantForAccessibility="no"
        accessibilityElementsHidden>
        {label}
      </Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize={'none'}
        autoCorrect={false}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        accessibilityLabel={accessibilityLabel}
        inputMode={inputMode}
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
  label: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginRight: 10,
    minWidth: '25%',
  },
  textInput: {
    height: 44,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 6,
    padding: 5,
  },
  errorText: {
    color: colors.error,
    fontWeight: '600',
    paddingTop: 5,
  },
});

export default TextField;
