const months = ["March", "Jan", "Feb", "Dec"];

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => a - b);
console.log(numbers);

const words = [
  "réservé",
  "premier",
  "communiqué",
  "café",
  "adieu",
  "éclair",
  "banana",
];
words.sort((a, b) => a.localeCompare(b));
console.log(words);

// const orders = [
//   {
//     customerName: "Nicolas",
//     total: 600,
//     delivered: true,
//   },
//   {
//     customerName: "Zulema",
//     total: 120,
//     delivered: false,
//   },
//   {
//     customerName: "Santiago",
//     total: 1840,
//     delivered: true,
//   },
//   {
//     customerName: "Valentina",
//     total: 240,
//     delivered: true,
//   },
// ];
// orders.sort((a, b) => a.total - b.total);
// console.log(orders);

const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
    date: new Date(2020, 3, 8, 4),
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
    date: new Date(2021, 9, 12, 3),
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
    date: new Date(2021, 8, 2, 2),
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
    date: new Date(2024, 1, 1, 9, 30),
  },
  {
    customerName: "Jeremias",
    total: 240,
    delivered: true,
    date: new Date(2021, 8, 2, 3, 30),
  },
];
orders.sort((a, b) => {
  console.log(a.date - b.date);
  return a.date - b.date;
});
console.log(orders);
