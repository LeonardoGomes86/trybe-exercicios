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
// Programa 09/15 - 🚀 Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro. Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Um ângulo será considerado inválido se não tiver um valor positivo.
const ang1 = 60;
const ang2 = 80;
const ang3 = 40;
let sumAng = ang1 + ang2 + ang3;
if (sumAng === 180) {
  if (ang1 >= 0 && ang2 >= 0 && ang3 >= 0) {
    console.log(true);
  } else {
    console.log("ângulo inválido");
  }
} else if (sumAng !== 180) {
  if (ang1 >= 0 && ang2 >= 0 && ang3 >= 0) {
    console.log(false);
  } else {
    console.log("ângulo inválido");
  }
} else {
  console.log("ângulo inválido");
}
// Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)
let pecaXadrez = "CaVaLo";
switch (pecaXadrez.toLowerCase()) {
  case "rei":
    console.log("Rei -> Pode mover-se em qualquer direção, porém apenas uma casa por vez.");
    break;
  case "dama":
    console.log("Dama -> Pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.");
    break;
  case "torre":
    console.log("Torre -> Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
    break;
  case "bispo":
    console.log("Bispo -> Move-se na diagonal, quantas casas quiser.");
    break;
  case "cavalo":
    console.log("Cavalo -> Move-se em forma de L");
    break;
  case "peão":
    console.log("Peão -> Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.");
    break;
  default:
    console.log('Erro, peça inválida');
    break;
}