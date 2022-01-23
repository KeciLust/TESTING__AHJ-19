/* eslint-disable no-unused-expressions */
/* eslint-disable no-mixed-operators */
export default function luhn(num) {
  const arr = Array.from(num);
  let z = 0;
  for (let i = (arr.length - 2); i >= 0; i -= 2) {
    if (arr[i] < 5 && i !== 0) {
      z += (arr[i] * 2 + Number(arr[i - 1]));
    } else if (i !== 0) {
      const x = (arr[i] * 2) % 10 + 1;
      z += x + Number(arr[i - 1]);
    } else {
      arr[i] > 4 ? z += (arr[i] * 2) % 10 + 1 : z += arr[i] * 2;
    }
  }

  return ((10 - z % 10) === Number(arr[arr.length - 1]));
}
