let pergunta = [
{
    titulo: '"Mais avançado que a mais avançada das mais avançadas das tecnologias...?"', 
    alternativas: ['Belchior','Caetano Veloso','Gilberto Gil','Chico Buarque'],
    correta: 1
},
{
    titulo: '"E me remete ao frio que vem lá do sul...?"', 
    alternativas: ['Djavan','Chico Cesar','Cazuza','João Gilberto'],
    correta: 0
},
{
    titulo: '"Seus ouvidos se fecharam a qualquer música...?"', 
    alternativas: ['Lenine','Gal Costa','Maria Bethânia','Chico Buarque'],
    correta: 2
}
]

let app = {
start: function(){
    this.atualPosicao = 0;
    this.totalPontos = 0;
    let alternat = document.querySelectorAll('.alternativa');
    alternat.forEach((element,index)=>{
 
        element.addEventListener('click', ()=>{
            this.checaResposta(index);
          
        })
    })
    this.atualizaPontos();
    app.mostraQuestao(pergunta[this.atualPosicao]);
},

mostraQuestao: function(q) {
    this.qatual = q;
    let titleDiv = document.getElementById('titulo');
    titleDiv.textContent = q.titulo;

    let alternat = document.querySelectorAll('.alternativa');
    alternat.forEach(function(element,index){
        element.textContent = q.alternativas[index];
      
    })
},

proximaQuestao: function(){
    this.atualPosicao++;
    if(this.atualPosicao == pergunta.length){
        alert('FIM!');
    }
},
checaResposta: function(user){
    if (this.qatual.correta == user){
        console.log ('Correta')
        this.totalPontos++;
    }
    else {
        alert('Errado')
    }
    this.atualizaPontos();
    this.proximaQuestao();
    this.mostraQuestao(pergunta[this.atualPosicao]);
},
atualizaPontos: function(){
    let scoreDiv = document.getElementById('pontos');
    scoreDiv.textContent = `Você fez: ${this.totalPontos} pontos`;
}

}

app.start();