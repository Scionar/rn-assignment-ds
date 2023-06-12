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
import ActionButton from '@ds/components/ActionButton';

import {
  validateEmail,
  validateIsRequired,
  validateUserId,
} from '@ds/utils/validation';
import colors from '@ds/styles/colors';

const App = () => {
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [userIdError, setUserIdError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUserId = (text: string) => {
    if (validateUserId(text)) {
      setUserId(text);
    }
  };

  const onSubmitPress = () => {
    validateEmail(email)
      ? setEmailError('')
      : setEmailError('Email should be valid');

    validateIsRequired(userId)
      ? setUserIdError('')
      : setUserIdError('User ID is required');

    if (!validateIsRequired(email)) {
      setEmailError('Email is required');
    } else if (!validateEmail(email)) {
      setEmailError('Email should be valid');
    } else {
      setEmailError('');
    }

    validateIsRequired(password)
      ? setPasswordError('')
      : setPasswordError('Password is required');

    // For debugging purposes, no need to re-factor for mocking real API call
    Alert.alert(
      'Params',
      `Form submitted with details:\nUser #ID: ${userId}\nE-mail: ${email}\nPassword: ${password}`,
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar />
      <ScrollView style={styles.wrapper}>
        <View style={styles.headerContainer} accessibilityRole="header">
          <Text style={styles.header}>{'DS Assignment Login Form'}</Text>
        </View>
        <View>
          <View style={styles.row}>
            <TextField
              label="User #ID"
              value={userId}
              onChangeText={handleUserId}
              error={userIdError}
            />
          </View>
          <View style={styles.row}>
            <TextField
              label="E-mail"
              value={email}
              onChangeText={setEmail}
              error={emailError}
            />
          </View>
          <View style={styles.row}>
            <TextField
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              error={passwordError}
            />
          </View>
          <View style={styles.buttonRow}>
            <ActionButton label={'Submit'} onPress={onSubmitPress} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.background,
  },
  wrapper: {
    padding: 10,
    height: '100%',
  },
  headerContainer: {
    marginBottom: 50,
  },
  header: {
    fontSize: 35,
    color: colors.black,
    fontWeight: '800',
  },
  row: {
    marginBottom: 20,
  },
  buttonRow: {
    marginTop: 30,
  },
});

export default App;
