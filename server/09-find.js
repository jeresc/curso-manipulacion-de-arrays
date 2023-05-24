const numbers = [1,30,29,50,40]
const response = numbers.find(num => num === 50)
console.log('Find 50:', response)

const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];


// Find if not found returns undefined
const response02 = products.find(food => food.id = '🌭')
console.log('Hot Dog:', response02)

// Find Index if not found returns -1
const response03 = products.findIndex(food => food.id = '🥞')
console.log('Find Index Hot Cakes:', products[response03])