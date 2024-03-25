const pConsole = require("console-read-write");

async function main(){
    pConsole.write("Maior valor");

    pConsole.write("Digite o 1º número: ");
    const n1 = Number(await pConsole.read());

    if (n1 == "")
    {
        pConsole.write("Preencha o campo!");
        return;
    }
    if (isNaN(n1))
    {
        pConsole.write("Digite valores numéricos!");
        return; 
    }

    pConsole.write("Digite o 2º número: ");
    const n2 = Number(await pConsole.read());

    if (n2 == "")
    {
        pConsole.write("Preencha o campo!");
        return;
    }
    if (isNaN(n2))
    {
        pConsole.write("Digite valores numéricos!");
        return; 
    }

    pConsole.write("Digite o 3º número: ");
    const n3 = Number(await pConsole.read());

    if (n3 == "")
    {
        pConsole.write("Preencha o campo!");
        return;
    }
    if (isNaN(n3))
    {
        pConsole.write("Digite valores numéricos!");
        return; 
    }

    if (n1 > n2){
        if (n1 > n3){
            pConsole.write("O maior valor é: " + n1);
        }
        else{
            pConsole.write("O maior valor é: " + n3);
        }
    }
    else {
        if (n2 > n3){
            pConsole.write("O maior valor é: " + n2);
        }
        else {
            pConsole.write("O maior valor é: " + n3);
        }
    }
}
main();