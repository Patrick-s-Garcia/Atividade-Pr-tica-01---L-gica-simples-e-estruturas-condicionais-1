let votos = 24000
let brancos = 2000
let nulos = 700

let totalVotos = votos + brancos + nulos

let votosPercentual = votos / totalVotos
let brancosPercentual = brancos / totalVotos
let nulosPercentual = nulos / totalVotos




document.write(`Os votos validos representam ${(votosPercentual * 100).toFixed(2)}%. <br>`)
document.write(`Os votos brancos representam ${(brancosPercentual * 100).toFixed(2)}%. <br>`)
document.write(`Os votos nulos representam ${(nulosPercentual * 100).toFixed(2)}%. <br>`)
