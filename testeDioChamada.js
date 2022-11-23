/*Descrição
Neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0.   */
function somatorio(n) {
    let resultado = 0;
  
    for (let i = 0; i <= n; i++) {
        
      resultado = resultado + i;
    }
    
    return resultado;
  }
  
  console.log(somatorio(10));
  