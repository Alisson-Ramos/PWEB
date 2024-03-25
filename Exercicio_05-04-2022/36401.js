const Console = require("console-read-write");
const { removeListener } = require("process");

const Nomes = [];
const Numeros = [];
let index = 0;
let controle = 0;

async function Linhas(){
    Console.write("-----------------");
}

async function retornar()
{
    Linhas();
    Console.write("Deseja retornar ao menu principal? S ou N");
    const SN = await Console.read();
    if (SN == "S" || SN == "s" || SN == "sim")
    {
    return main();
    }
    else if (SN == "N" || SN == "n" || SN == "nao")
    {
        return Console.write("Programa finalizado!");;
    }
    else
    {
        return;
    }
}

async function adcionar()
{
    // Nome //
    Console.write("Digite o nome do seu contato");
    const nome = await Console.read();
    Linhas();
    if (nome == "")
    {
        Console.write("Erro, campo de nome vazio!");
        Linhas();
        return adcionar();
    }
    else if (isNaN(nome))
    {
        // Números //
        Console.write("Digite o número do seu contato");
        const numero = Number(await Console.read());
        Linhas();
        if (numero == "")
        {
            Console.write("Erro, campo de número vazio!");
            Linhas();
            return adcionar();
        }
        else if (isNaN(numero))
        {
            Console.write("Erro, valido apenas números!");
            Linhas();
            return adcionar();
        }
        else
        {
            Nomes.push(nome);
            Numeros.push(numero);
            Console.write("Contato adcionado com sucesso!");
            return main();
        }
    }
    else 
    {
        Console.write("Erro, valido apenas letras!");
        Linhas();
        return adcionar();
    }
}

async function listar()
{
    if (isNaN(Nomes))
    {
        for(let i = 0; i < Nomes.length; i++)
        {
            Console.write(Nomes[i] + ":");
            Console.write(Numeros[i]);   
            Linhas();
        }
        return retornar();
    }
    else
    {
        Linhas();
        Console.write("Adicione um contato para listar!");
        Linhas();
        return main();
    } 
}

async function editar()
{
    Console.write("Digite o nome do contato que deseja o editar:");
    const nome = await Console.read();
    Linhas();

    if (nome == "")
    {
        Console.write("Erro, campo de nome vazio!");
        Linhas();
        return editar();
    }
    else if (isNaN(nome))
    {
        for(let i = 0; i < Nomes.length; i++)
        {
        if (Nomes[i] == nome)
        {
            controle = 1;
            Console.write("1 - Editar Nome");
            Console.write("2 - Editar Número");
            const indice = Number(await Console.read());
            Linhas();
            if (indice == 1)
            {
                    Console.write("Digite o novo nome:");
                    const newName = await Console.read();
                    if (newName == "")
                    {
                        Console.write("Digite um nome válido!");
                        return editar();
                    }
                    else
                    {
                        Nomes[i] = newName;
                        Console.write("Nome editado com sucesso!");
                        main();
                    }
                }
                else if (indice == 2)
            {
                    Console.write("Digite o novo número:");
                    const newNumber = await Console.read();
                    if (newNumber == "")
                    {
                        Console.write("Digite um número válido!");
                        return editar();
                    }
                    else
                    {
                        Numeros[i] = newNumber;
                        Console.write("Número editado com sucesso!");
                        main();
                    }
                }
                else if (indice != 1 || indice != 2){
                    Console.write("Digite um número válido!");
                    return editar();
                }
            }  
        }
        if (controle == 0)
        {
            Console.write("Erro ao encontrar contato!");
            return main();
        }  
    }
    else
    {
        Console.write("Erro, valido apenas letras!");
        Linhas();
        return editar();
    }
}

async function remover()
{
    controle = 0;
    Console.write("Digite o nome do contato que deseja o remover:");
    const nome = await Console.read();
    Linhas();

    if (nome == "")
    {
        Console.write("Erro, campo de nome vazio!");
        Linhas();
        return remover();
    }
    else if (isNaN(nome))
    {
        for(let i = 0; i < Nomes.length; i++)
        {
            if (Nomes[i] == nome)
            {
                controle = 1;
                Console.write(Nomes[i]);
                Nomes.splice(Nomes[i], 1);
                Numeros.splice(Nomes[i], 1);
                Console.write("Contato removido com sucesso!");
                return main();
            }
        }
        if (controle == 0)
        {
            Console.write("Erro ao encontrar contato!");
            return main();
        }  
    }
    else
    {
        Console.write("Erro, valido apenas letras!");
        Linhas();
        return remover();
    }
}

async function main()
{        
    while (index !== 5) {
        await Linhas();
        Console.write("Lista de contatos");
        await Linhas();
        Console.write("1 - Listagem");
        Console.write("2 - Adcionar");
        Console.write("3 - Editar");
        Console.write("4 - Remover");
        Console.write("5 - Sair do programa");
        await Linhas();
        Console.write("Digite o número da ação que desejada!");
        await Linhas();
        index = Number(await Console.read());

        if (index == 1)
        {
            return await listar();
        }
        else if (index == 2)
        {
            return await adcionar();
        }
        else if (index == 3)
        {
            return await editar();
        }
        else if (index == 4)
        {
            return await remover();
        }  
        else if (index == 5)
        {
            return;
        }    
    }  
}
main();