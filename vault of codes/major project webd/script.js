const emailInput = document.getElementById('email-address-input');
const signUpButton = document.querySelector('#newsletter button');

signUpButton.addEventListener('click', () => {
  const emailAddress = emailInput.value;
  console.log('Email address submitted:', emailAddress);
});

const cartIcon = document.querySelector('.header-list-icon a');
const miniCart = document.querySelector('.mini-cart'); // Assuming you have a mini-cart element

cartIcon.addEventListener('click', () => {
  miniCart.classList.toggle('show'); // Toggle the visibility of the mini cart
});

const buyButtons = document.querySelectorAll('.buy-icon');

buyButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const product = event.target.closest('.product-cart');
    const productName = product.querySelector('h4').innerText;
    console.log('Product added to cart:', productName);
  });
});