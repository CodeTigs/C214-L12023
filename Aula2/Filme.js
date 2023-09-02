var prompt = require('prompt-sync')();

    class Filme{
        constructor(titulo, ano, genero, duracao){
            this.titulo = titulo;
            this.ano = ano;
            this.genero = genero;
            this.duracao = duracao;
            this.assistido = false;
            this.avaliacao = null;
        }
        infoFilme(){
            console.log(`Ano: ${this.ano}`);
            console.log(`Titulo: ${this.titulo}`);
            console.log (`Genero: ${this.genero}`);
            console.log (`Assistido: ${this.assistido}`);
            console.log (`Duracao: ${this.duracao}`);
            if(this.avaliacao != null){
                console.log(`Avaliacao: ${this.avaliacao}`);
                } 
                 else{
                    console.log('Sem Avaliacao')
                }
            console.log('------------------------------------------------------');
        }
        AssistirFilme(){
            this.assistido = true;
        }
        AvaliarFilme(avaliacao){
            this.avaliacao = avaliacao;
        }
    }

// Create an empty array to store movies
const filmes = [];

// Function to add a new movie
function adicionarFilme() {
    const titulo = prompt('Digite o titulo do filme: ');
    const ano = prompt('Digite o ano do filme: ');
    const genero = prompt('Digite o genero do filme: ');
    const duracao = prompt('Digite a duracao do filme: ');

    const filme = new Filme(titulo, ano, genero, duracao);
    filmes.push(filme);
    console.log('Filme adicionado com sucesso!\n');
}

// Function to mark a movie as watched
function marcarAssistido() {
    exibirFilmes();
    const index = prompt('Digite o índice do filme que deseja marcar como assistido: ');
    if (index >= 0 && index < filmes.length) {
        filmes[index].AssistirFilme();
        console.log('Filme marcado como assistido!\n');
    } else {
        console.log('Índice inválido.\n');
    }
}

// Function to rate a movie
function avaliarFilme() {
    exibirFilmes();
    const index = prompt('Digite o índice do filme que deseja avaliar: ');
    if (index >= 0 && index < filmes.length) {
        const avaliacao = prompt('Digite a avaliação para o filme: ');
        filmes[index].AvaliarFilme(avaliacao);
        console.log('Filme avaliado!\n');
    } else {
        console.log('Índice inválido.\n');
    }
}

// Function to display the list of movies
function exibirFilmes() {
    console.log('Lista de Filmes:');
    filmes.forEach((filme, index) => {
        console.log(`Índice: ${index}`);
        filme.infoFilme();
    });
}

// Main loop
let menuChoice;
do {
    console.log('Menu:');
    console.log('1. Adicionar novo filme');
    console.log('2. Marcar um filme como assistido');
    console.log('3. Avaliar o filme');
    console.log('4. Exibir a lista de filmes');
    console.log('5. Sair do programa');
    menuChoice = prompt('Escolha uma opção: ');

    switch (menuChoice) {
        case '1':
            adicionarFilme();
            break;
        case '2':
            marcarAssistido();
            break;
        case '3':
            avaliarFilme();
            break;
        case '4':
            exibirFilmes();
            break;
        case '5':
            console.log('Saindo do programa.');
            break;
        default:
            console.log('Opção inválida.');
    }
} while (menuChoice !== '5');
