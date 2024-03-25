const pConsole = require("console-read-write");

async function retangulo()
    {
        pConsole.write("Calculo da área de retangulos");
        pConsole.write("Digite a base do retangulo: ");
        const rBase = Number(await pConsole.read());
        pConsole.write("Digite a altura do retangulo");
        const rAltura = Number(await pConsole.read());
        
        resultado = (rBase * rAltura);
        resultado.toString;
        pConsole.write("A área do retangulo é: "+ resultado);
    }
retangulo();
