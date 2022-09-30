//Mostrar formato "item = R$ preço"
let items = ['batata', 'x-tudo', 'refrigerante', 'Big Mac', 'Nuggets', 'Sorvete'];
let prices = [12, 33, 5, 9, 15];

for (let index = 0; index < items.length; index += 1) {
  if (prices[index] == undefined) {
    console.log(items[index] + ' = Preço indefinido');
  } else {
    console.log(items[index] + ' = R$ ' + prices[index]);
  }
  
}

let money = 20;
let list = [];
let bigger = 0;

for (let index = 0; index < prices.length; index += 1) {
  if (prices[index] <= money) {
    list.push(items[index]);
  }
  // e se quiser saber o maior valor q posso comprar
  if (prices[index] <= money && prices[index] > bigger) {
    bigger = prices[index]   
  }

}

console.log(list);
console.log(bigger);