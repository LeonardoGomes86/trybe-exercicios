// // fatorial 10
// let fatorial = 1;

// for (let index = 10; index > 0; index -=1 ) {
//   fatorial *= index;
// }

// console.log(fatorial);

// // inverter palavra

// let word = "tryber";
// let div = word.split("");
// let invertida = [];
// for (let i = 0; i < div.length; i+= 1) {
//   invertida.unshift(div[i])
// }
// console.log(invertida.join(""));

// let word = "tryber";
// let palavraInvertida = "";
// for (let i = word.length -1; i >= 0; i -= 1 ) {
//   palavraInvertida += word[i]
// }
// console.log(palavraInvertida);


//Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let contadorLetra = 0;
let recebePalavra = '';
let menor = 0;
let recebePrimeira = array[0];
for (let index = 0; index < array.length; index += 1) {
  if( array[index].length > contadorLetra ) {
    contadorLetra = array[index].length;
    recebePalavra = array[index];
  }
}
for (let i = 0; i < array.length; i += 1) {
  if (array[i].length < recebePrimeira.length) {
    menor = array[i].length;
    recebePrimeira = array[i];
  }
}
console.log(recebePrimeira);
console.log(contadorLetra);
console.log(recebePalavra);

// RETORNAR MAIOR NUMERO PRIMO ENTRE 2 e 50

let maior = 0;
for (let i = 2; i <= 50; i += 1) {
  cont = 0;
  for (let j = 2; j <= i; j += 1) {
    if(i%j == 0){
      cont ++;
    }
  }
  if (cont < 2) {
    maior = i;
  }
}
console.log(maior);

