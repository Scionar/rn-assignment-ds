import { validateUserId } from '@ds/utils/validation';

it('validates User #ID and returns true when it is a number', () => {
  expect(validateUserId('1234')).toBeTruthy();
});

it('validates User #ID and returns false when it is NOT a number', () => {
  expect(validateUserId('asdf')).toBeFalsy();
});
