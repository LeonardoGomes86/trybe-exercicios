const notaPessoaEstudante = 100;
if (notaPessoaEstudante >= 80) {
  console.log('Parabéns, você foi aprovada(o)!')
} else if (notaPessoaEstudante < 80 && notaPessoaEstudante >= 60) {
  console.log('Você está na nossa lista de espera');
} else {
  console.log('Você foi reprovada(o)')
}