import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import colors from '@ds/styles/colors';

type TActionButton = {
  disabled?: boolean;
  label: string;
  onPress: () => void;
};

const ActionButton = ({ disabled, label, onPress }: TActionButton) => {
  const getButtonStyling = () =>
    disabled ? { backgroundColor: '#a0a0a0', borderColor: '#666666' } : {};

  return (
    <Pressable
      style={[styles.button, getButtonStyling()]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6699cc',
    padding: 10,
    borderColor: '#336699',
    borderWidth: 2,
    borderRadius: 6,
    justifyContent: 'center',
  },
  buttonText: { color: colors.white, fontSize: 20, textAlign: 'center' },
});

export default ActionButton;
