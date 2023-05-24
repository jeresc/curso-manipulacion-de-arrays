const products = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log(".-".repeat(10) + "\n");

// const productIndex = products.findIndex(item => item.id === '🍔')
// if (productIndex != -1) {
//   myProducts.push(products[productIndex])
//   products.splice(productIndex, 1)
// }

// console.log("products", products);
// console.log("myProducts", myProducts);
// console.log(".-".repeat(10) + "\n");

const productFilter = products.filter(p => p.id !== '🍔')

console.log("products", products);
console.log("myProducts", productFilter);
console.log(".-".repeat(10) + "\n");

// Update

const productsV2 = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
  id: '🥞',
  changes: {
    price: 200,
    description: 'yummy'
  }
}

const indexHotCake = productsV2.findIndex(p => p.id == '🥞')
productsV2[indexHotCake] = {
  ...productsV2[indexHotCake],
  ...update.changes
}
console.log(productsV2)