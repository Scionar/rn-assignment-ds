import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TextField from '@ds/components/TextField';
import Label from '@ds/components/Label';
import ActionButton from '@ds/components/ActionButton';

import { validateUserId } from '@ds/utils/validation';
import colors from '@ds/styles/colors';

const App = () => {
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserId = (text: string) => {
    if (validateUserId(text)) {
      setUserId(text);
    }
  };

  const onSubmitPress = () => {
    // For debugging purposes, no need to re-factor for mocking real API call
    Alert.alert(
      'Params',
      `Form submitted with details:\nUser #ID: ${userId}\nE-mail: ${email}\nPassword: ${password}`,
    );
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView style={styles.wrapper}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>{'DS Assignment Login Form'}</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.row}>
            <Label>{'User #ID'}</Label>
            <TextField value={userId} onChangeText={handleUserId} />
          </View>
          <View style={styles.row}>
            <Label>{'E-mail'}</Label>
            <TextField value={email} onChangeText={setEmail} />
          </View>
          <View style={styles.row}>
            <Label>{'Password'}</Label>
            <TextField
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>
        </View>
        <ActionButton label={'Submit'} onPress={onSubmitPress} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  headerContainer: {
    borderColor: colors.black,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    color: colors.black,
  },

  contentContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
  },

  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});

export default App;
