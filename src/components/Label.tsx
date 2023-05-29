import React from 'react';
import { StyleSheet, Text } from 'react-native';

import colors from '@ds/styles/colors';

type TLabel = {
  children: React.ReactNode;
};

const Label = ({ children }: TLabel) => {
  return <Text style={styles.label}>{children}</Text>;
};

const styles = StyleSheet.create({
  label: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginRight: 10,
    minWidth: '25%',
  },
});

export default Label;
