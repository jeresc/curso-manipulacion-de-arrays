const matriz = [
  [1,2,3],
  [4,5,[1,2,[232,3,[2,3]]]],
  [7,8,9]
];

let flatArr = []
function flatArray(array) {
  for (let item in array) {
    Array.isArray(array[item])
      ? flatArray(array[item])
      : flatArr.push(array[item])
  }
  return flatArr
}

const homeMadeFlat = flatArray(matriz)
console.log(homeMadeFlat)


function flatArrayV2(array) {
  let newArr = []
  if (!Array.isArray(array)) return [array];
  array.forEach(element => {
    newArr = newArr.concat(flatArrayV2(element))
  })
  return newArr
  debugger;
}

const homeMadeFlatV2 = flatArrayV2(matriz)
console.log(homeMadeFlatV2)

const response = matriz.flat(10)
console.log('flat', response)