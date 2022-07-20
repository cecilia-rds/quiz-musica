let pergunta = {
    titulo: 'Cantor', 
    alternativas: ['Belchior','Caetano Veloso','Gilberto Gil','Chico Buarque'],
    correto: 0
}
function inicia(){
    let alternat = document.querySelectorAll('.alternativa');
    alternat.forEach(function(element,index){
        element.addEventListener('click', function() {
            console.log('Checa');
        })
    })    
    mostraQuestao(pergunta);
}

function mostraQuestao(q) {
    let titleDiv = document.getElementById('titulo');
    titleDiv.textContent = q.titulo;

    let alternat = document.querySelectorAll('.alternativa');
    alternat.forEach(function(element,index){
        element.textContent = q.alternativas[index];
    })
 
}
inicia();