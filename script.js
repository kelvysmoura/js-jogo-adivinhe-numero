alert("Boas vindas");

let nomeJogador = prompt("Digite seu nome");

let querJogar = confirm("Deseja jogar?");

if(querJogar) {

    alert("Boa Sorte, " + nomeJogador);

    const numeroSecreto = 7;

    let numeroDigitado = prompt("Digite um numero");

    if(numeroSecreto == numeroDigitado) {
        alert("Parabéns, você acertou");
    } 

    if(numeroSecreto < numeroDigitado) {
        alert("É menor!");
    }

    if(numeroSecreto > numeroDigitado) {
        alert("É maior!");
    }

} else {

    alert("Que pena! Até a próxima");
    
}

