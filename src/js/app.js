import luhn from './luhn';
import check from './check';

const input = document.querySelector('.input');
const button = document.querySelector('.button');
const carts = document.querySelectorAll('.cart_item');

button.addEventListener('click', (e) => {
  carts.forEach((el) => el.classList.add('opacity'));
  e.preventDefault();
  if (luhn(input.value)) {
    const cart = document.querySelector(`.${check(input.value)}`);
    if (cart) {
      cart.classList.add('valid');
      cart.classList.remove('opacity');
      input.value = '';
    } else {
      alert('Не корректный номер карты!');
    }
  } else {
    alert('Не правильный номер карты!');
  }
});
