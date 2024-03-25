const pConsole = require("console-read-write");

async function diagonalQuadrado()
    {
        pConsole.write("Calculo de área de quadrados apartir da diagonal");
        pConsole.write("Digite a diagonal do quadrado: ");
        const qDiagonal = Number(await pConsole.read());
        
        resultado = (Math.pow(qDiagonal, 2))/2;
        resultado.toString;
        pConsole.write("A área do quadrado é: "+ resultado);
    }
diagonalQuadrado();
