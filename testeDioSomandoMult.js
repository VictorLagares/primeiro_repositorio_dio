/*Desafio
Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.

Entrada
A entrada deverá ser composta pelo valor A na primeira linha, seguido do valor N na segunda. 

Saída
A saída deverá retornar o valor da soma de todos os múltiplos A até o seu limite N.*/

function calcularMultiplos(A, N)
{
num = N / A;
soma = num * (num + 1) / 2;
result = A * soma
return result
}
let A = 8;
let N = 18;

console.log('A soma dos multiplos de', A, 'até', N, '=', calcularMultiplos(A, N))