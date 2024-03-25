const pConsole = require("console-read-write");

async function main(){
    pConsole.write("Média de prova");

    let P1 = 0;
    let P2 = 0;

    pConsole.write("Digite a 1º prova: ");
    P1 =  Number(await pConsole.read());

    if (P1 <= 0)
    {
        pConsole.write("Preencha o campo com números positivos!");
        return;
    }
    if (isNaN(P1))
    {
        pConsole.write("Digite valores numéricos!");
        return; 
    }
    
    pConsole.write("Digite a 2º prova: ");
    P2 =  Number(await pConsole.read());

    if (P2 <= 0)
    {
        pConsole.write("Preencha o campo com números positivos!");
        return;
    }
    if (isNaN(P2))
    {
        pConsole.write("Digite valores numéricos!");
        return; 
    }

    const resultado = (P1+P2)/3;
    
    if (resultado >= 5) {
      pConsole.write("Aprovado!!");
    } else {
      pConsole.write("Reprovado!!");
    }
}
main();
