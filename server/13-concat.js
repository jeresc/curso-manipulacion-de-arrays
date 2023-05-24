const element = [1,2,1,3]
const otherElements = [3,3,4,5]

const response = element.concat(otherElements)
const response02 = [ ...element, ...otherElements ]

console.log('concat:', response)
console.log('...', response)
console.log('[..., ...]', [...element, ...otherElements])