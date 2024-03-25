const pConsole = require("console-read-write");

async function main(){
    pConsole.write("Triangulos");

    let lado1, lado2, lado3 = 0;

    pConsole.write("Digite o 1º lado do triangulos: ");
    lado1 =  Number(await pConsole.read());

    if (lado1 <= 0)
    {
        pConsole.write("Preencha o campo com valores positivos!");
        return;
    }
    if (isNaN(lado1))
    {
        pConsole.write("Digite valores numéricos!");
        return; 
    }
    
    pConsole.write("Digite o 2º lado do triangulos: ");
    lado2 =  Number(await pConsole.read());

    if (lado2 <= 0)
    {
        pConsole.write("Preencha o campo com valores positivos!");
        return;
    }
    if (isNaN(lado2))
    {
        pConsole.write("Digite valores numéricos!");
        return; 
    }

    pConsole.write("Digite o 3º lado do triangulos: ");
    lado3 =  Number(await pConsole.read());

    if (lado3 <= 0)
    {
        pConsole.write("Preencha o campo com valores positivos!");
        return;
    }
    if (isNaN(lado3))
    {
        pConsole.write("Digite valores numéricos!");
        return; 
    }

    if (lado1 == lado2 && lado1 == lado3)
    {
        pConsole.write("Esse quadrado é equilátero");
    }
    else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3)
    {
        pConsole.write("Esse quadrado é isóceles");
    }
    else
    {
        pConsole.write("Esse quadrado é escaleno");
    }
}
main();
