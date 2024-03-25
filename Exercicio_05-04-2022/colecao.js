const Console = require("console-read-write");

async function main()
{
    const Professores = ["Freddy", "Leguth"];
    // Professores[0] = "Freddy";
    // Professores[1] = "Leguth";

    Professores.push("Tavares");
    Professores.push("Andre");
    Professores.push("Maristela");

    console.log(Professores);

    // Console.write("Digite um professor: ");
    // let NovoNome = await Console.read();
    // Professores.push(NovoNome);

    Professores[1] = "Velinho";

    console.log(Professores);

    Professores.splice(3,1);

    console.log(Professores);

    for(let indice = 0; indice < Professores.length; indice++)
    {
        Console.write(Professores[indice]);
    }

    Professores.forEach(function(valor){
        Console.write(valor);
    });


    

}

main();