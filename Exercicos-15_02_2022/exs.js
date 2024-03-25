const pConsole = require("console-read-write");

let resultado = 0;

async function main()
{
    async function iniciarPrograma(){
        pConsole.write("1 - Calculo da área de retangulos");
        pConsole.write("2 - Calculo de área de quadrados apartir da aresta");
        pConsole.write("3 - Calculo de área de quadrados apartir da diagonal");
        pConsole.write("4 - Calculo da área de triangulos");
        pConsole.write("5 - Calculo do volume de um circulo");
        pConsole.write("6 - Calculo da média aritimética");
        pConsole.write("7 - Calculo de média geométrica");    
        pConsole.write("8 - Conversor de milhas maritimas"); 
        pConsole.write("9 - Calculo de tensão eletrica de um circuito");
        pConsole.write("10 - Conversor de celsisus em fahrenheit");   
        pConsole.write("Digite o numero de qual programa você deseja executar...");
        const programSelect = Number(await pConsole.read());

        if (programSelect === 1) {
            retangulo();
        }
        else {
            if (programSelect === 2) {
                arestaQuadrado();
            }   
            else {
                if (programSelect === 3) {
                    diagonalQuadrado();
                }
                else {
                    if (programSelect === 4) {
                        areaTriangulo();
                    }
                    else {
                        if (programSelect === 5) {
                            volumeCirculo();
                        }   
                        else {
                            if (programSelect === 6) {
                                mediaAritimetica();
                            }   
                            else {
                                if (programSelect === 7) {
                                    mediaGeometrica();
                                }   
                                else {
                                    if (programSelect === 8) {
                                        milhasMaritimas();
                                    }
                                    else {
                                        if (programSelect === 9) {
                                            tensaoEletrica();
                                        }
                                        else {
                                            if (programSelect === 10) {
                                                grausCelsius();
                                            }
                                        }
                                    } 
                                }
                            }
                        }
                    }   
                }    
            }
        }

    }
    async function desejaContinuar()
    {
        pConsole.write("Desja continuar? S ou N");
        const dcontinuar = String(await pConsole.read());
       
        if (dcontinuar === "S"){
            iniciarPrograma();
        }
        else {
            pConsole.write("Programa finalizado");
        }
    }
    async function retangulo()
    {
        pConsole.write("Calculo da área de retangulos");
        pConsole.write("Digite a base do retangulo: ");
        const rBase = Number(await pConsole.read());
        pConsole.write("Digite a altura do retangulo");
        const rAltura = Number(await pConsole.read());
        
        resultado = (rBase * rAltura);
        resultado.toString;
        console.log("A área do retangulo é: ", resultado);
        desejaContinuar();
    }
    async function arestaQuadrado()
    {
        pConsole.write("Calculo de área de quadrados apartir da aresta");
        pConsole.write("Digite a aresta do quadrado: ");
        const qAresta = Number(await pConsole.read());
        
        resultado = Math.pow(qAresta, 2);
        resultado.toString;
        console.log("A área do quadrado é: ", resultado);
        desejaContinuar();
    }
    async function diagonalQuadrado()
    {
        pConsole.write("Calculo de área de quadrados apartir da diagonal");
        pConsole.write("Digite a diagonal do quadrado: ");
        const qDiagonal = Number(await pConsole.read());
        
        resultado = (Math.pow(qDiagonal, 2))/2;
        resultado.toString;
        console.log("A área do quadrado é: ", resultado);
        desejaContinuar();
    }
    async function areaTriangulo()
    {
        pConsole.write("Calculo da área de triangulos");
        pConsole.write("Digite a base");
        const tBase = Number(await pConsole.read());
        pConsole.write("Digite a altura");
        const tAltura = Number(await pConsole.read());
        
        resultado = (tBase * tAltura)/2;
        resultado.toString;
        console.log("A área do triangulo é: ", resultado);
        desejaContinuar();
    }
    async function volumeCirculo()
    {
        pConsole.write("Calculo do volume do circulo");
        pConsole.write("Digite o diametro: ");
        const cDiametro = Number(await pConsole.read());
        const rRaio = cDiametro/2;
        
        resultado = ((4 * 3.1415) * Math.pow(rRaio, 3))/3;
        resultado.toString;
        console.log("O volume é: ", resultado);
        desejaContinuar();
    }    
    async function mediaAritimetica()
    {
        pConsole.write("Calculo da média aritimética");
        pConsole.write("digite o 1º número: ");
        const ma1 = Number(await pConsole.read());
        pConsole.write("digite o 2º número: ");
        const ma2 = Number(await pConsole.read());
        pConsole.write("digite o 3º número: ");
        const ma3 = Number(await pConsole.read());
        pConsole.write("digite o 4º número: ");
        const ma4 = Number(await pConsole.read());
        
        resultado = (ma1 + ma2 + ma3 + ma4)/2;
        resultado.toString
        console.log("A média aritimética é: ", resultado);
        desejaContinuar();
    }
    async function mediaGeometrica()
    {
        pConsole.write("Calculo de média geométrica");
        pConsole.write("digite o 1º valor");
        const mg1 = Number(await pConsole.read());
        pConsole.write("digite o 2º valor");
        const mg2 = Number(await pConsole.read());
    
        resultado = Math.sqrt(mg1 * mg2);
        resultado.toString
        console.log("A média geométrica é: ", resultado);
        desejaContinuar();
    }

    async function milhasMaritimas()
    {
        pConsole.write("Conversor de milhas maritimas");
        pConsole.write("digite o valor em milhas");
        const mMaritima = Number(await pConsole.read());

        const KM = 1852/1000;

        resultado = mMaritima * KM;
        resultado.toString
        console.log("A milha maritima convertida em KM é: ", resultado,"Km");
        desejaContinuar();
    }

    async function tensaoEletrica()
    {
        pConsole.write("Calculo de tensão eletrica de um circuito");
        pConsole.write("digite o valor da corrente");
        const tCorrente = Number(await pConsole.read());
        pConsole.write("digite o valor da resistencia");
        const tResistencia = Number(await pConsole.read());

        resultado = tCorrente * tResistencia;
        resultado.toString
        console.log("A tensão eletrica é: ", resultado,"hm");
        desejaContinuar();
    }

    async function grausCelsius()
    {
        pConsole.write("Conversor de celsisus em fahrenheit");
        pConsole.write("digite p valor em graus celsius");
        const tCelsius = Number(await pConsole.read());

        resultado = (9.0 / 5)*tCelsius + 32;
        resultado.toString
        console.log("A temperatura em fahrenheit é: ", resultado);
        desejaContinuar();

    }
    iniciarPrograma();

}

main();
