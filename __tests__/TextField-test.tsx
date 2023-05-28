import 'react-native';
import React from 'react';
import TextField from '@ds/components/TextField';
import renderer from 'react-test-renderer';
import { TextInput } from 'react-native';

it('renders correctly', () => {
  renderer.create(<TextField />);
});

it('renders value', () => {
  const value = 'Test';
  const valueRenderer = renderer.create(<TextField value={value} />);
  const valueInstance = valueRenderer.root;

  expect(valueInstance.findByType(TextInput).props.value).toBe(value);
});
