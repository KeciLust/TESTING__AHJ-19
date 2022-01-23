/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
export default function check(num) {
  const arr = Array.from(num);
  if (Number(arr[0]) === 4) {
    return 'visa';
  }
  let x = 0;
  for (let i = 0; i < 6; i++) {
    x += arr[i];
  }

  if ((Number(arr[0]) === 5 && arr[1] > 0 && arr[1] < 6) || (Number(x) >= 222100 && Number(x) <= 272099)) {
    return 'mc';
  }
  let z = 0;
  for (let i = 0; i < 4; i++) {
    z += arr[i];
  }
  if (Number(z) >= 2200 && Number(z) <= 2204) {
    return 'world';
  }
  if (Number(z) === 5018 || Number(z) === 5020 || Number(z) === 5038 || Number(z) === 5893 || Number(z) === 6304 || Number(z) === 6759 || Number(z) === 6761 || Number(z) === 6762 || Number(z) === 6763) {
    return 'maestro';
  }
}
