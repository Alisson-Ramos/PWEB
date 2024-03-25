const pConsole = require("console-read-write");

async function main(){
    pConsole.write("Área de um tringulo");

    let Base, Altura = 0;

    pConsole.write("Digite a base: ");
    Base =  Number(await pConsole.read());

    if (Base <= 0)
    {
        pConsole.write("Preencha o campo com valores positivos!");
        return;
    }
    if (isNaN(Base))
    {
        pConsole.write("Digite valores numéricos!");
        return; 
    }
    
    pConsole.write("Digite altura: ");
    Altura =  Number(await pConsole.read());

    if (Altura <= 0)
    {
        pConsole.write("Preencha o campo com valores positivos!");
        return;
    }
    if (isNaN(Altura))
    {
        pConsole.write("Digite valores numéricos!");
        return; 
    }

    const resultado = Base * Altura;

    if (resultado > 100){
        pConsole.write("Terreno grande");
    }
}
main();