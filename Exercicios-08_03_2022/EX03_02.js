const pConsole = require("console-read-write");

async function main(){
    pConsole.write("Exibir Menor valor");

    pConsole.write("Digite o 1º número: ");
    const nA =  Number(await pConsole.read());
    
    if (nA == "")
    {
        pConsole.write("Preencha o campo!");
        return;
    }
    if (isNaN(nA))
    {
        pConsole.write("Digite valores numéricos!");
        return; 
    }

    pConsole.write("Digite o 2º número: ");
    const nB =  Number(await pConsole.read());

    if (nB == "")
    {
        pConsole.write("Preencha o campo!");
        return;
    }
    if (isNaN(nB))
    {
        pConsole.write("Digite valores numéricos!");
        return; 
    }

    if (nA > nB){
        pConsole.write("O menor valor é: " + nB);
    }
    else{
        pConsole.write("O menor valor é: " + nA);
    }
}
main();
