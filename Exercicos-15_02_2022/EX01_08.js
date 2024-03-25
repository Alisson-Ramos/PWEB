const pConsole = require("console-read-write");

async function milhasMaritimas()
    {
        pConsole.write("Conversor de milhas maritimas");
        pConsole.write("digite o valor em milhas");
        const mMaritima = Number(await pConsole.read());

        const KM = 1852/1000;

        resultado = mMaritima * KM;
        resultado.toString
        pConsole.write("A milha maritima convertida em KM é: "+ resultado+"Km");
    }
 milhasMaritimas();
