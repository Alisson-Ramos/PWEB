const pConsole = require("console-read-write");

async function main(){
    pConsole.write("Exibir Maior");

    pConsole.write("Digite o 1° número: ");
    const nA =  Number(await pConsole.read());

    if (nA == "")
    {
        pConsole.write("Preencha o Campo!");
        return;
    }
    if (isNaN(nA))
    {
        pConsole.write("Digite valores numéricos!");
        return; 
    }
    
    pConsole.write("Digite o 2° número: ");
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
        pConsole.write("O maior valor é: " + nA);
    }
    else{
        pConsole.write("O maior valor é: " + nB);
    }
}
main();