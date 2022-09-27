// // let car = {
// //   type: 'Fiat',
// //   model: '500',
// //   color: 'white',
// // };
// // console.log(car.type);

// // ----------------------------

// // let diasDaSemana = {
// //   1: 'domingo',
// //   2: 'segunda',
// //   3: 'terça',
// //   4: 'quarta',
// //   5: 'quinta',
// //   6: 'sexta',
// //   7: 'sábado',
// // };

// // // console.log(diasDaSemana.1); // SyntaxError: Unexpected number
// // console.log(diasDaSemana['1']); // domingo

// // ------------------------

// // let conta = {
// //   agencia: '0000',
// //   banco: {
// //     cod: '012',
// //     id: 4,
// //     nome: 'TrybeBank',
// //   },
// // };

// // let infoDoBanco = 'banco';
// // console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
// // console.log(conta[infoDoBanco]['nome']); // TrybeBank

// // console.log(conta.agencia); // 0000
// // console.log(conta['agencia']); // 0000

// // console.log(conta.banco.cod); // 012
// // console.log(conta['banco']['id']); // 4

// // -------------------

// // let usuario = {
// //   id: 99,
// //   email: 'jakeperalta@gmail.com',
// //   infoPessoal: {
// //     nome: 'Jake',
// //     sobrenome: 'Peralta',
// //     endereco: {
// //       rua: 'Smith Street',
// //       bairro: 'Brooklyn',
// //       cidade: 'Nova Iorque',
// //       estado: 'Nova Iorque',
// //     },
// //   },
// // };

// // console.log(usuario['id']); // 99
// // console.log(usuario.email); // jakeperalta@gmail.com

// // console.log(usuario.infoPessoal.endereco.rua); // Smith Street
// // console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

// // --------------------------

// // let moradores = [
// //   {
// //     nome: 'Luiza',
// //     sobrenome: 'Guimarães',
// //     andar: 10,
// //     apartamento: 1005,
// //   },
// //   {
// //     nome: 'William',
// //     sobrenome: 'Albuquerque',
// //     andar: 5,
// //     apartamento: 502,
// //   },
// //   {
// //     nome: 'Murilo',
// //     sobrenome: 'Ferraz',
// //     andar: 8,
// //     apartamento: 804,
// //   },
// //   {
// //     nome: 'Zoey',
// //     sobrenome: 'Brooks',
// //     andar: 1,
// //     apartamento: 101,
// //   },
// // ];

// // let primeiroMorador = moradores[0];
// // console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
// // console.log(primeiroMorador['andar']); // 10

// // let ultimoMorador = moradores[moradores.length - 1];
// // console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
// // console.log(ultimoMorador.nome); // Zoey

// // -----------------

// // exercicio de fixação
// // Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:

// // let name = 'Marta';
// // let lastName = 'Silva';
// // let age = 34;
// // let medals = { golden: 2, silver: 3 };

// // let player = {
// //   name: 'Marta',
// //   lastName: 'Silva',
// //   age: 34,
// //   medals: {
// //     golden: 2,
// //     silver: 3
// //   }
// // }

// // console.log('Jogadora ' + player.name + ' ' + player.lastName + ', com uma idade de ' + player.age + ' anos, já conquistou ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

// // ------------------------------------------------

// // pedidos de pizzas

// // let pizzas = {
// //   sabor: 'Palmito',
// //   preco: '39.90',
// //   bordaDeCatupiry: true,
// // }

// // for (let key in pizzas) {
//     // console.log(key); // podendo chamar pelas chaves
//     // console.log(pizzas[key]); // podendo chamar pelo conteudo das chaves
// // }

// // let pizzasDoces = ['Chocolate', 'Banana', 'Morango'];

// // for (let key in pizzasDoces) {
// //   console.log(key, pizzasDoces[key]);
// // }

// // ------------

// // let cars = ['Saab', 'Volvo', 'BMW'];

// // for (let index in cars) {
// //   console.log(cars[index]);
// // }

// // let car = {
// //   type: 'Fiat',
// //   model: '500',
// //   color: 'white',
// // };

// // for (let index in car) {
// //   console.log(index, car[index]);
// // }

// // para fixar
// // Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

// // let names = {
// //   person1: 'João',
// //   person2: 'Maria',
// //   person3: 'Jorge',
// // };

// // for (let index in names) {
// //   console.log('Olá ' + names[index]);
// // }

// // Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

// // let car = {
// //   model: 'A3 Sedan',
// //   manufacturer: 'Audi',
// //   year: 2020
// // };

// // for (index in car) {
// //   console.log(index, car[index]);
// // }

// // para fixar (funções)
// // Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.
// // adição
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 1));
// // subtração
// function sub(a, b) {
//   return a - b;
// }

// console.log(sub(2,1));
// // multiplicação
// function multi(a, b) {
//   return a * b;
// }
// console.log(multi(3, 2));
// // divisão
// function div(a, b) {
//   return a / b;
// }
// console.log(div(4, 2));
// // módulo
// function mod(a, b) {
//   return a % b;  
// }
// console.log(mod(8, 2));
// // Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

// // const numero1 = 35;
// // const numero2 = 25;

// // function maior(numero1, numero2) {
// //   if (numero1 > numero2) {
// //     return 'Número 1 é maior';
// //   } else if (numero2 > numero1) {
// //     return 'Número 2 é maior';
// //   } else {
// //     return 'Números iguais';
// //   }
// // }

// // console.log(maior(numero1, numero2));

// // Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

// const numero1 = 25;
// const numero2 = 25;
// const numero3 = 1;

// function maior3(numero1, numero2, numero3) {
//   if (numero1 > numero2 && numero1 > numero3) {
//     return  numero1 + ' é maior';
//   } else if (numero2 > numero1 && numero2 > numero3) {
//     return numero2  + ' é maior';
//   } else if (numero3 > numero1 && numero3 > numero2) {
//     return numero3 + ' é maior';
//   } else if (numero1 > numero2 && numero1 == numero3) {
//     return numero1 + ' e ' + numero3 + ' são os maiores';
//   } else if (numero1 > numero3 && numero1 == numero2) {
//     return numero1 + ' e ' + numero2 + ' são os maiores'
//   } else if (numero2 > numero1 && numero2 == numero3) {
//     return numero2 + ' e ' + numero3 + ' são os maiores';
//   } else {
//     return 'Todos os números são iguais'
//   }
// }

// console.log(maio3(numero1, numero2, numero3));

// //Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

// function signal(a) {
//   if (a > 0) {
//     return 'positive';
//   } else if (a < 0) {
//     return 'negative';
//   } else {
//     return 'zero';
//   }
// }
// console.log(signal(-1));

// //Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

// const ang1 = 60;
// const ang2 = 80;
// const ang3 = 40;

// function triang(ang1, ang2, ang3) {
//   if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
//     return 'erro';
//   } else if (ang1 + ang2 + ang3 !== 180) {
//     return false
//   } else if (ang1 + ang2 + ang3 == 180) {
//     return true
//   }
// }

// console.log(triang(ang1, ang2, ang3));

// //Gerar Array Com 100 Caracteres Numéricos - SEM PARÂMETROS
// function generateArrayWithoutParams () {
//   let array = [];
//   for (let index = 1; index <= 100; index += 1) {
//     array.push(index);
//   }
//   return array;
// }

// console.log(generateArrayWithoutParams());

// //Gerar Array Com quantos Caracteres Numéricos quisermos - COM PARÂMETROS
// function generateArrayWithParams (number) {
//   let array = [];
//   for (let index = 1; index <= number; index += 1) {
//     array.push(index);
//   }
//   return array;
// }

// console.log(generateArrayWithParams(10));
// console.log(generateArrayWithParams(30));

// Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// console.log('Bem Vinda ' + info.personagem);

// Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:

info['recorrente'] = 'Sim';

// console.log(info);

// Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

// for (key in info) {
//   console.log(key);
// }

// Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

// for (key in info) {
//   console.log(info[key]);
// }

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:

// let info2  = {
//   personagem: 'Tio Patinhas',
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim',
// };

// for (let key in info, info2) {
//   if(info[key] !== info2[key]) {
//     console.log(info[key] + ' e ' + info2[key]);
//   } else {
//     console.log('Ambos são recorrentes');
//   }
// }

// Usando o objeto abaixo, faça os exercícios a seguir:

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

// console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0].titulo}'.`);

// Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações:


leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
})
// console.log(leitor)

//// Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código.
// console.log(`${leitor["nome"]} tem ${leitor["livrosFavoritos"].length} livros favoritos, onde ${leitor["livrosFavoritos"].length} é um número gerado automaticamente pelo seu código.`);


// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindrome (string){
  let splitString = string.split('')
  // console.log(splitString)
  let reverseString = splitString.reverse()
  let joinString = reverseString.join('')
  if(joinString === string){
      return true;
  } else {
      return false;
  }
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let teste = [1,2 ,6 ,4 ,850 ,6 ];
function devolmeMaior(numeros){
  let maior = 0;
  for (const key in numeros) {
    if( numeros[maior] < numeros[key] ){
      maior = key;
    }
    }
    return maior
  }
  console.log(devolmeMaior(teste));


