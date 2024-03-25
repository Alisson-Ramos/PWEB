const pConsole = require("console-read-write");

async function troco(){
  pConsole.write("Calculo de troco do cliente");
  pConsole.write("Digite o valor do 1° produto: ");
  const Produto01 = Number (await pConsole.read());
  pConsole.write("Digite o 2° produto: ");
  const Produto02 = Number (await pConsole.read());
  pConsole.write("Digite o valor do 3° produto: ");
  const Produto03 = Number (await pConsole.read());
  pConsole.write("Digite o valor do 4° produto: ")
  const Produto04 = Number (await pConsole.read());
  pConsole.write("Digite o valor do 5° produto: ");
  const Produto05 = Number (await pConsole.read());
  
  const somatoria = Produto01 + Produto02 + Produto03 + Produto04 + Produto05;
  
  
  pConsole.write("O total a pagar é: " +  somatoria.toLocaleString("pt-BR", {style:'currency', currency: 'BRL'}) );
  
  pConsole.write("Digite o valor dado pelo cliente: ");
  const valorRecebido = Number (await pConsole.read());
  
  let troco = valorRecebido - somatoria;
  
  if (troco < 0) {
    
    troco = Math.abs(troco);
    
    pConsole.write("Ainda falta pagar: " + troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) );
    
    
    
  }
  else {
  
  pConsole.write("O valor de troco é: " + troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
  }
}
troco();
