import 'react-native';
import React from 'react';
import TextField from '@ds/components/TextField';
import renderer, { act } from 'react-test-renderer';
import { TextInput } from 'react-native';

it('renders correctly', () => {
  renderer.create(
    <TextField label="Test" value={''} onChangeText={() => {}} />,
  );
});

it('renders value', () => {
  const value = 'Test';
  const valueRenderer = renderer.create(
    <TextField label="Test" value={value} onChangeText={() => {}} />,
  );
  const valueInstance = valueRenderer.root;

  expect(valueInstance.findByType(TextInput).props.value).toBe(value);
});
