// let pessoas = ["Davi","Isaac","Nayara","Mota"]

// console.log(pessoas)

// for(let indice = 0; indice < pessoas.length; indice++){
//     console.log(`O usuario ${pessoas[indice]} está no indice ${indice}`)
// }

// numero.pop()

// numero.slice(2,3)

// novoArray = [1,3]
// let nivelBidimen = ["Nivel 1", ["nivel 2", ["nivel 3"]]]
// console.log(nivelBidimen)
// console.log(nivelBidimen[0])
// console.log(nivelBidimen[1][0])
// console.log(nivelBidimen[1][1][0])


// let matriznova = [
//     ["l1 c1", "l1 c2", "l1 c3"],
//     ["l2 c1", "l2 c2", "l2 c3"],
//     ["l3 c1", "l3 c2", "l3 c3"],
//     ["l4 c1", "l4 c2", "l4 c3"],
//     ["l5 c1", "l5 c2", "l5 c3"],
// ]
//cria uma nova coluna para a tabela
// matriznova [0].push ("l1 c4")
// let remocao = matriznova [1].splice(0,1, 'sei la')

// for (let indice = 0; indice < matriznova.length; indice++) {
//     for (let elemento = 0; elemento < matriznova[indice].length; elemento++) {
//         console.log(matriznova[indice][elemento])
//     }
// }
//table cria uma tabela


// const meses = ['jan','marc','abril','junh'];
// meses.splice(1,3, 'fev');
// console.log(meses)

// console.log(remocao)

// ---------------------------------------------------------------------
//objeto em javascript
//poo- nome do grupo abaixo
//chamar objeto = let pessoa {}
//herança, polimofismo, encapsulamento, adminstração

// let pessoas = {
//     nome: "davi",
//     idade: 28,
//     cargo: "desenvolvedor",
//     departamento: {
//         nome: "tecnologia",
//         quantidadedepessoas: 29,
//         informacoes: {
//             anoFundacao: 2010,
//             responsavel: "dalton",
//             fabrica: {
//                 fabrinome: "KIBON",
//                 sulamericana: "fortaleza",
//                 quantidadedepessoas: {
//                     numero: 200,
//                     gestao: 100,
//                     operacao: 200

//                 }
//             }
//         }
//     }
// }
// console.log(pessoas.departamento.informacoes.fabrica.quantidadedepessoas.numero)
//para chamar um chave ou um metodo, no objeto, é pelo "."
// let empresa =[
//     {
//         departamento: "tecnologia",
//         colaboradores: [
//             "Davi","Dalton", "gabriel", "mota"
//         ]
//     },
//     {
//         departamento: "recursos humanos",
//         colaboradores:[
//             "Bruna",
//             "Bia",
//             "Nathan",
//             "Mauro"
//         ]
//     }
// ]
// console.log(empresa[1].colaboradores[0])
// let saudacao = {}
let imoveis = [];
let opcoes = "";

while(opcoes !== "3"){
    opcoes = prompt(
        `
        ---------------------------------------
        1 - Cadastrar imovel
        2 - Mostrar imoveis
        3 - sair do sistema
        ---------------------------------------
        `
    )

    switch(opcoes){
        case "1":
            let imovel = {
                nome: prompt(`Digite seu nome`),
                quartos: prompt(`Digite a quantidade de quartos`),
                banheiro: prompt(`Digite a quantidade de banheiros`),
                garagem: prompt(`Possui garagem? Sim / Não`) 
            }

            let confirmacao = confirm(`Deseja salvar o imovel?`)

            if(confirmacao){
                imoveis.push(imovel)
                alert(`Imovel salvo com sucesso`)
            } else {
                alert(`Processo descontinuado, voltando ao menu`)
            }
    }
}



let imoveis = [];
let opcoes = "";

while (opcoes !== "3") {
    opcoes = prompt(
        `
        ---------------------------------------
        1 - Cadastrar imovel
        2 - Mostrar imoveis
        3 - sair do sistema
        ---------------------------------------
        `
    )

    switch (opcoes) {
        case "1":
            let imovel = {
                nome: prompt(`Digite seu nome`),
                quartos: prompt(`Digite a quantidade de quartos`),
                banheiro: prompt(`Digite a quantidade de banheiros`),
                garagem: prompt(`Possui garagem? Sim / Não`)
            }

            let confirmacao = confirm(`Deseja salvar o imovel?`)

            if (confirmacao) {
                imoveis.push(imovel)
                alert(`Imovel salvo com sucesso`)
            } else {
                alert(`Processo descontinuado, voltando ao menu`)
            }
            break;
        case "2":
            if(imoveis.length === 0){
                alert(`Não existe imoveis cadastrados`)
            }else{
                for(let indice = 0; indice < imoveis.length; indice++){
                    alert(`
                    Nome do proprietario ${imoveis[indice].nome},
                    Quantidade de quartos ${imoveis[indice].quartos},
                    Quantidade de banheiros ${imoveis[indice].banheiro},
                    Possui garagem ${imoveis[indice].garagem},
                    \n
                    `)
                }
            }
            break;
        case "3":
            alert(`Saindo do sistema`)
            break;
        default:}}


























// do {
//     let imovel = "";
//     for (let indice = 0; indice < lista.length; indice++) {
//         imovel += `${indice + 1} ${lista[indice]} \n`
//     }
//     opções = prompt(`

//      quantidade de imoveis cadastrados${}


//         1-salvar um imovel.
//         2-mostrar imoveis salvos.
//         3- sair.`);

//     switch (opcoes) {
//         case "1":
//             let proprietario = prompt("digite o nome do proprietario");
//             lista.push(proprietario);
//             let quantidadedequartos = prompt(`digite a quantidade de quartos:`);
//             lista.push(quantidadedequartos);
//             let quantdebanheiros = prompt(`quantidade de banheiros:`);
//             lista.push(quantdebanheiros);
//             let garagem = prompt(`possui garagem? sim/nao`);
//             break;
//         case "2":
//             let mostrarimoveis = lista.unshitf();
       
            

//     }
// }