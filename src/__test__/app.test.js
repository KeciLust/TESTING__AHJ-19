import luhn from '../js/luhn';
import check from '../js/check';

test.each([
  ['2221007553306766', true],
  ['6759254195214005', true],
  ['513541976494562', false],
])(('test function luhn'), (input, expected) => {
  expect(luhn(input)).toEqual(expected);
});

test.each([
  ['6759254195214005', 'maestro'],
  ['4485910311593574', 'visa'],
  ['5135419764945621', 'mc'],
])(('test function check'), (input, expected) => {
  expect(check(input)).toEqual(expected);
});
