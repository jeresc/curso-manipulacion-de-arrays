const numbers = [1,30,39,29,10,13];
const response = numbers.every(num => num <= 40)
console.log('every:', response)

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 14,
  },
];

const response02 = team.every(team => team.age < 15)
console.log('Team under 15:', response02)