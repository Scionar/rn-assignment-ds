import 'react-native';
import React from 'react';
import Label from '@ds/components/Label';
import renderer from 'react-test-renderer';
import { Text } from 'react-native';

it('renders correctly', () => {
  renderer.create(<Label>{''}</Label>);
});

it('renders children', () => {
  const children = 'Test';
  const valueRenderer = renderer.create(<Label>{children}</Label>);
  const valueInstance = valueRenderer.root;

  expect(valueInstance.findByType(Text).props.children).toBe(children);
});
