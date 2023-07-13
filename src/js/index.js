/* alert('olá'); 
serve para testar se o arquivo está correto 
aparece é um pop-up(aviso) na tela */

// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
// passo 1 - pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles

const personagens = document.querySelectorAll('.personagem');
console.log(personagens);
// classe personagem está em todas as tags li, fiz uma consulta em todas os seletores

// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

// estou percorrendo esta lista, para cada item do laço, armazeno o valor do personagem
// arrow function
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        // construção de condição para n dar problema no site ao abrir no celular
        // trabalhando com largura e comportamento da barra de rolagem
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele

        // buscando 1 elemento que tenha a classe selecionado
        removerSelecaoDoPersonagem(); // APERTAR fnF12

        personagem.classList.add('selecionado');

        // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande

        // passo 1 - pegar o elemento do personagem grande para adicionar as informações nele
        alterarImagemPersonagemSelecionado(personagem);

        // passo 3 - alterar o nome do personagem grande
        alterarNomePersonagemSelecionado(personagem);

        // passo 4 - alterar a descrição do personagem
        alterarDescricaoPersonagem(personagem);
    })
})


function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');

    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagempersonagemGrande = document.querySelector('.personagem-grande');

    // passo 2 - alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    // pegando atributo ID e armazeno na variável idPersonagem
    imagempersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
//addEventListener('click', () => {
//     console.log('clicou')
// })
// adicionar um evento na página que efetue um clique e o resultado apareça na tela
// não pode ser feito numa lista e sim num evento de cada vez



