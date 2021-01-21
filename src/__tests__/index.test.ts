import { startsWith } from '..';

test('startsWith', () => {
  expect(startsWith('abcd', 'ab')).toBe(true);
});
