const pConsole = require("console-read-write");

async function main(){
    let P1 = 0

    pConsole.write("Média de prova");

    pConsole.write("Digite a 1º prova: ");
    P1 =  Number(await pConsole.read());

    if (P1 <= 0 )
    {
        pConsole.write("Preencha o campo com números positivos!");
        return;
    }
    if (isNaN(P1))
    {
        pConsole.write("Digite valores numéricos!");
        return; 
    }
    
    const resultado = (15 - P1);
    
    pConsole.write("você precisa de " + resultado + " para ser aprovado!");
    
}
main();
