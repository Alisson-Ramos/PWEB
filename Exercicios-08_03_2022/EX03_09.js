const pConsole = require("console-read-write");

async function main(){
    pConsole.write("Triangulos");

    let c1, c2, hipotenusa = 0;

    pConsole.write("Digite o cateto oposto: ");
    c1 =  Number(await pConsole.read());

    if (c1 <= 0)
    {
        pConsole.write("Preencha o campo com números positivos!");
        return;
    }
    if (isNaN(c1))
    {
        pConsole.write("Digite valores numéricos!");
        return; 
    }
    
    pConsole.write("Digite o cateto adjacente: ");
    c2 =  Number(await pConsole.read());

    if (c2 <= 0)
    {
        pConsole.write("Preencha o campo com números positivos!");
        return;
    }
    if (isNaN(c2))
    {
        pConsole.write("Digite valores numéricos!");
        return; 
    }

    pConsole.write("Digite a hipotenusa: ");
    hipotenusa =  Number(await pConsole.read());

    if (hipotenusa <= 0)
    {
        pConsole.write("Preencha o campo com números positivos!");
        return;
    }
    if (isNaN(hipotenusa))
    {
        pConsole.write("Digite valores numéricos!");
        return; 
    }

    if (Math.pow(hipotenusa, 2) == ( Math.pow(c2, 2) + Math.pow(c1, 2))){ 
      pConsole.write("Esse é um triângulo retângulo");
    }
    else {
      pConsole.write("Esse NÃO é um triângulo retângulo");
    }

}
main();
