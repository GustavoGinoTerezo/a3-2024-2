import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isNumber(char: string): boolean {
    return /\d/.test(char);
}

function isOperator(char: string): boolean {
    return /^[+\-*/]$/.test(char);
}

function validation(expressao: string): boolean {
    
    let ultimoTipo = '';
    let numeroAtual = '';
    
    for (let i = 0; i < expressao.length; i++) {
        const char = expressao[i];

        if (isNumber(char)) {
            numeroAtual += char;
            ultimoTipo = 'numero';
        } else if (isOperator(char)) {
            if (ultimoTipo !== 'numero') {
                console.log(`Erro: Operador '${char}' após outro operador ou no início.`);
                return false;
            }
            
            if (char === '/' && expressao[i + 1] === '0') {
                console.log(`Erro: Divisão por zero detectada após '${char}'`);
                return false;
            }

            console.log(`Número válido encontrado: ${numeroAtual}`);
            numeroAtual = '';
            ultimoTipo = 'operador';
        } else {
            console.log(`Erro: Caractere inválido encontrado: ${char}`);
            return false;
        }
    }

    if (numeroAtual) {
        console.log(`Número válido encontrado: ${numeroAtual}`);
    } else {
        console.log("Erro: A expressão termina com um operador.");
        return false;
    }

    return true;
}

rl.question('Digite a expressão matemática: ', (input) => {
    if (validation(input)) {
        console.log('Expressão válida.');
    } else {
        console.log('Expressão inválida.');
    }

    rl.close();
});
