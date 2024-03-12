let aluno = String(prompt("Nome do aluno"))
let nota1 = parseFloat(prompt("Nota 1"))
let nota2 = Number(prompt("Nota 2"))
let nota3 = Number(prompt("Nota 3"))

let media = (nota1 + nota2 + nota3) / 3



document.write(`A nota do aluno ${aluno} foi de ${media.toFixed(2)}`)