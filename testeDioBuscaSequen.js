let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 
let posicao = 0
let num = 212

function posicaoContador(posicao){
    for (let i = 0; i < elementos.length; i++) {
        if(elementos[i] === num){
            posicao = posicao = i
            return posicao
        }
    }
    }

elementos.includes(num)

if (elementos.includes(num)=== true){
    console.log('Achei', num, 'na posicao', posicaoContador(posicao))
} else {
    console.log('Numero', num, 'nao encontrado!')
}

