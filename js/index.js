// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  const priceText = Number(price.innerText)
  const quantityValue = +quantity.value
  const subtotal = priceText * quantityValue
  const sub = product.querySelector('.subtotal span')
  sub.innerText = subtotal;
  console.log(product, priceText, quantityValue, subtotal);
  return price * quantity


  
  console.log(priceText);

  //... your code goes here
}

function calculateAll() {
  const arraySubtotals = getElementsByClassName('.subtotal span') {
  updateSubtotal(product)
}
console.log(arraySubtotals)
//just can't remember the right syntax or how to test properly to understand what's wrong
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
