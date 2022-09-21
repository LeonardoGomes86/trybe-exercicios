// Exercicios pós aula ao vivo
// Programa 01/15 - programa para adição
const a = 5;
const b = 3;
let sum = a + b;
console.log(sum);
// Programa 02/15 - programa para subtração
const a = 10;
const b = 3;
let subtraction = a - b;
console.log(subtraction);
// Programa 03/15 - programa para multiplicação
const a = 9;
const b = 5;
let multi = a * b;
console.log(multi);
// Programa 04/15 - programa para divisão
const a = 21;
const b = 3;
let divi = a / b;
console.log(divi);
// Programa 05/15 - programa para módulo
const a = 4;
const b = 2;
let mod = a % b;
console.log(mod);
// Programa 06/15 - Utilize if/else para fazer um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.
const a = 10;
const b = 15;
if (a > b) {
  console.log("Número " + a + " é maior que o número " + b);
} else if {
  console.log("Número " + b + " é maior que o número " + a);
} else {
  console.log("Números são iguais");
}
// Programa 07/15 - Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.
const a = 20;
const b = 18;
const c = 35;
if (a > b && a > c) {
  console.log("O número " + a + " é o maior número");
} else if (b > a && b > c) {
  console.log("O número " + b + " é o maior número");
} else if (c > a && c > b) {
  console.log("O número " + c + " é o maior número");
}
// Programa 08/15 - Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
const a = 120;
if (a > 0) {
  console.log("positive");
} else if (a < 0) {
  console.log("negative");
} else {
  console.log("zero");
}
