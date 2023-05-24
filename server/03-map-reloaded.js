const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];
console.log('original:', orders)

const response = orders.map(item => item.total)
console.log('response:', response)

// Pasa los objetos por referencia y modifica el objeto original 👎
// const tax = orders.map(item => {
//   item.tax = item.total + item.total * 0.23
//   return item
// })
// console.log('original:', orders)

// NO muta el array original 👍
const taxReloaded = orders.map(item => {
  return {
    ...item,
    tax: Math.trunc(item.total * 0.23)
  }
})

console.log('original:', orders)
console.log('taxReloaded:', taxReloaded)