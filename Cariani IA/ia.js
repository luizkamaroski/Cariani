const caixaPrincipal = document.querySelector(".caixa-Principal");
const caixaPerguntas = document.querySelector(".caixa-Perguntas");
const caixasAlternativas = document.querySelector(".caixa-Alternativas");
const caixaResultado = document.querySelector(".caixa-Resultados");
const textoResultado = document.querySelector(".Texto-Resultado")
const caixaresultado1 = document.querySelector(".caixa-Principal")

const Perguntas = [

    {
      enunciado:"É preciso ter uma boa alimentação?",alternativas: [
        "sim"
      ]  
    }

];
 let atual = 0;
 let perguntaAtual;
 function mostraPerguntas(){
  
  perguntaAtual = perguntas [atual];
  caixaPerguntas. textContent = perguntas[0].enunciado;
   mostraPerguntas();}
    
   function mostraPerguntas(); {
if (atual>=perguntas.lenght)
 mostraResultados();
 return;

   }
