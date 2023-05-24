const words = ["spray", "elites", "limit", "apple", "exuberant"];
const newArr = words.filter(word => word.length >= 6)

console.log('original:', words)
console.log('edited:', newArr)
console.log('original:', words)

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
  {
  customerName: "Nicolas",
  total: 900,
  delivered: true,
  },
];

const filteredOrders = orders.filter(item => item.delivered && item.total >= 100)
console.log('Filtered by Delivered Status & Price >= 100:', filteredOrders)

const search = (query) => {
  return orders.filter(item => item.customerName.includes(query))
}

console.log('Search "Nico":', search('Nico'))
console.log('Search "Valentina":', search('Valentina'))