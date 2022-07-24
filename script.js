let pergunta = [
{
    titulo: '"Amar e mudar as coisas me interess mais..."', 
    alternativas: ['Belchior','Caetano Veloso','Gilberto Gil','Chico Buarque'],
    correta: 0
},
{
    titulo: '"E me remete ao froio, que vem lá do sul."', 
    alternativas: ['Djavan','Caetano Veloso','Gilberto Gil','Chico Buarque'],
    correta: 0
},
{
    titulo: '"Rapite-me cameloaé preto."', 
    alternativas: ['Djavan','Caetano Veloso','Gilberto Gil','Chico Buarque'],
    correta: 1
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
        this.atualPosicao = 0; //volta pra questão inicial//
    }
},
checaResposta: function(user){
    if (this.qatual.correta == user){
        console.log ('Correta')
        this.totalPontos++;
    }
    else {
        console.log('Errado')
    }
    this.atualizaPontos();
    this.proximaQuestao();
    this.mostraQuestao(pergunta[this.atualPosicao]);
},
atualizaPontos: function(){
    let scoreDiv = document.getElementById('pontos');
    scoreDiv.textContent = `A pontução é: ${this.totalPontos}`;
}

}

app.start();