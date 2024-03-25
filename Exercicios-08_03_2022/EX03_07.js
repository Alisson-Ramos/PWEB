const pConsole = require("console-read-write");

async function main(){
    pConsole.write("IMC");

    let altura, peso = 0;

    pConsole.write("Digite a altura: ");
    altura = Number(await pConsole.read());

    if (altura <= 0)
    {
        pConsole.write("Preencha o campo com valores positivos!");
        return;
    }
    if (isNaN(altura))
    {
        pConsole.write("Digite valores numéricos!");
        return; 
    }

    pConsole.write("Digite o peso: ");
    peso = Number(await pConsole.read());

    if (peso <= 0)
    {
        pConsole.write("Preencha o campo com valores positivos!");
        return;
    }
    if (isNaN(peso))
    {
        pConsole.write("Digite valores numéricos!");
        return; 
    }

    resultado = peso/(altura * altura);

    if (resultado < 20){
        pConsole.write("Abaixo do peso");
    }
    
    else {
        if ((resultado >= 20) && (resultado < 25)){
            pConsole.write("Peso ideal");
        }
        else {
            if ((resultado >= 25)){
                pConsole.write("Acima do peso");
            }
        }
    }
        
}
main();