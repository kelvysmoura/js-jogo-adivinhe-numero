
function verificarIdade(idade) {
    idade = Number(idade);
    let votar = false;
    if(idade >= 16) {
        votar = true;
    }
    return votar;
}

function podeVotar(nome, sobrenome, idade) {
    const votar = verificarIdade(idade);
    if(votar) {
        alert(nome + " " + sobrenome + " pode votar");
    } else {
        alert(nome + " " + sobrenome + "não pode votar");
    }
}

function checarNumero(numeroDigitado, numeroSecreto) {
    if (numeroDigitado < 1 || numeroDigitado > 10 || isNaN(numeroDigitado)) {
        alert("Número inválido! Digite de 1 a 10.");
        return false;
    } else if (numeroSecreto == numeroDigitado) {
        alert("Parabéns, você acertou");
        return true;
    } else if (numeroSecreto < numeroDigitado) {
        alert("É menor!");
        return false;
    } else if (numeroSecreto > numeroDigitado) {
        alert("É maior!");
        return false;
    }
}

function desejarBoaSorte(nome) {
    alert("Boa sorte, " + nome);
}