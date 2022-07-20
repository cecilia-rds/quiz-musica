let pergunta = {
    titulo: 'Cantor',
    alternativas: ['Belchior', 'Caetano Veloso', 'Gilberto Gil','Chico Buarque'],
    correto: 0
}
function exibePergunta(q) {
    let titleDiv = document.getElementById('titulo');
    titleDiv.textContent = q.titulo;

    let alternativas = document.querySelectorAll('alternativas');
    
}

exibeQuestao(pergunta);
