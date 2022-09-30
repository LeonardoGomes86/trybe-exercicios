// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (number of numbers) {
//   console.log(number);
// }

// let soma = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//   soma += numbers[i]
// }
// console.log(soma/numbers.length);
// let div = soma/numbers.length;
// if (div > 20) {
//   console.log("valor maior que 20");
// } else {
//   console.log("valor menor ou igual a 20");
// }

// let maior = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//   if (maior < numbers[i]) {
//     maior = numbers[i]
//   }
// }
// console.log(maior);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let impar = 0;
// numbers.forEach(number => {
//   if(number % 2 != 0){
//     impar += 1;
//   }
// })
// console.log(impar)

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let impar = 0;
// for (let i = 0; i < numbers.length; i+= 1) {
//   if (numbers[i] % 2 != 0) {
//     impar += 1
//   }
// }
// console.log(impar);

// 

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let min = numbers[0];
// for(let i = 0; i < numbers.length; i += 1){
//     if(numbers[i] < min){
//         min = numbers[i]
//     }
// }
// console.log(min);

// let contagem = [];
// let cont = 0;

// for (i = 1; i <= 25; i += 1) {
  
//   cont += 1;
//   contagem.push(cont);
  
// }
// console.log(contagem);

// let contagem = [];
// let cont = 0;
// let valorDividido = [];
// for (i = 1; i <= 25; i += 1) {
//   cont += 1;
//   contagem.push(cont);
// }
// for (let i = 0; i < contagem.length; i += 1) {
//   console.log(
//     `Na posição ${i} o valor inteiro ${
//       contagem[i]
//     } e o valor dividido por dois é é ${contagem[i] / 2}`
//   );
// }

// bubble short crescente
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let indexdois = 1; indexdois < numbers.length; indexdois += 1) {
  for (let index = 0; index > numbers.length; index += 1) {
    if (numbers[indexdois] < numbers[index]) {
      let position = numbers[index];
      numbers[index] = numbers[indexdois];
      numbers[indexdois] = position;
      console.log(numbers);
    }
  }
}
// buble short decrescente
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let indexdois = 1; indexdois < numbers.length; indexdois += 1) {
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[indexdois] < numbers[index]) {
      let position = numbers[index];
      numbers[index] = numbers[indexdois];
      numbers[indexdois] = position;
      console.log(numbers);
    }
  }
}
// buble short multiplicação
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArr = [];
for (let index = 0; index < numbers.length; index += 1) {
  if (index == numbers.length - 1) {
    novoArr.push(numbers[index] * 2);
  } else {
    novoArr.push(numbers[index] * numbers[index + 1]);
  }
}
console.log(novoArr);