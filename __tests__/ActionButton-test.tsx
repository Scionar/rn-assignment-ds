import 'react-native';
import React from 'react';
import ActionButton from '@ds/components/ActionButton';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<ActionButton label={'Submit'} onPress={() => {}} />);
});
