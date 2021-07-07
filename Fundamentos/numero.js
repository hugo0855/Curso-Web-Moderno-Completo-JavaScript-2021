const peso1 = 1.0
const peso2 = Number('2.0')// 2.1 Falso 

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //Como saber se um número é Inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)//.toFixed(2) casa Decímais 
console.log(media)//.toString(2) número Binário
console.log(typeof media)
console.log(typeof Number)

/*----------------Números-E-Alguns-Cuidados-------------------------*/

console.log(7 / 0)//0001, 0.0001, 000000000001111
console.log("10" / 2) //10,2 NaN
console.log('Show!' * 2)
console.log(0.1 + 0.7)
//console.log(10.toString())
console.log((10.345).toFixed(2))
console.log('3' + 2) //string ganha!
console.log('3' - 2)