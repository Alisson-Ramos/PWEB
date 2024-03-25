const pConsole = require("console-read-write");

async function Cotacao() {
  pConsole.write("Conversor de dolar para real");
  pConsole.write("Digite a cotação do dolar: ")
  const cotacao = Number(await pConsole.read());
  pConsole.write("Digite o valor a ser convertido: ");
  const valor = Number(await pConsole.read());
  
  const resultado = cotacao * valor;
  
  pConsole.write("O valor é: " + resultado.toLocaleString("pt-BR", {style:'currency', currency: 'BRL'})
  );
}
Cotacao();
