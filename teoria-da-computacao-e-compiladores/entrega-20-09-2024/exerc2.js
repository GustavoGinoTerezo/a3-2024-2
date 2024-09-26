"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function isOperator(char) {
    return /^[+\-*/]$/.test(char);
}
function validation(expressao) {
    var ultimoTipo = '';
    var numeroAtual = '';
    for (var i = 0; i < expressao.length; i++) {
        var char = expressao[i];
        if (/\d/.test(char)) {
            numeroAtual += char;
            ultimoTipo = 'numero';
        }
        else if (isOperator(char)) {
            if (ultimoTipo !== 'numero') {
                console.log("Erro: Operador '".concat(char, "' ap\u00F3s outro operador ou no in\u00EDcio."));
                return false;
            }
            if (char === '/' && expressao[i + 1] === '0') {
                console.log("Erro: Divis\u00E3o por zero detectada ap\u00F3s '".concat(char, "'"));
                return false;
            }
            console.log("N\u00FAmero v\u00E1lido encontrado: ".concat(numeroAtual));
            numeroAtual = '';
            ultimoTipo = 'operador';
        }
        else {
            console.log("Erro: Caractere inv\u00E1lido encontrado: ".concat(char));
            return false;
        }
    }
    if (numeroAtual) {
        console.log("N\u00FAmero v\u00E1lido encontrado: ".concat(numeroAtual));
    }
    else {
        console.log("Erro: A expressão termina com um operador.");
        return false;
    }
    return true;
}
rl.question('Digite a expressão matemática: ', function (input) {
    if (validation(input)) {
        console.log('Expressão válida.');
    }
    else {
        console.log('Expressão inválida.');
    }
    rl.close();
});
