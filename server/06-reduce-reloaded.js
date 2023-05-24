const string = 'I am not gonna live forever, but I wanna live while I am alive'
const countCharacters = string.toLowerCase().split('').reduce((obj, item) => {
  return ({ ...obj, [item]: (obj[item] || 0) + 1 })
}, {})

console.log(countCharacters)