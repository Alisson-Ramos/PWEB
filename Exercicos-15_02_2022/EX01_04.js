const pConsole = require("console-read-write");

async function areaTriangulo()
    {
        pConsole.write("Calculo da área de triangulos");
        pConsole.write("Digite a base");
        const tBase = Number(await pConsole.read());
        pConsole.write("Digite a altura");
        const tAltura = Number(await pConsole.read());
        
        resultado = (tBase * tAltura)/2;
        resultado.toString;
        console.log("A área do triangulo é: " + resultado);
    }
areaTriangulo();