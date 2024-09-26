type State = 'q0' | 'qStart0' | 'q1' | 'qOperator' | 'qError';

// Definir a tabela de transições
const transitionTable: { [state in State]: { [symbol: string]: State } } = {
    q0: {
        '0': 'qStart0',  // O número começa com 0
        digit: 'q1',     // Se for outro dígito, vai para q1
        '+': 'qError', '-': 'qError', '*': 'qError', '/': 'qError' // Operadores são inválidos aqui
    },
    qStart0: {
        '0': 'qError', // 00 é inválido
        digit: 'qError', // Não pode ter outro número após 0 (ex.: 012 é inválido)
        '+': 'qOperator', '-': 'qOperator', '*': 'qOperator', '/': 'qOperator' // Operadores são válidos após o 0
    },
    q1: {
        digit: 'q1', // Continua em q1 se for outro número
        '+': 'qOperator', '-': 'qOperator', '*': 'qOperator', '/': 'qOperator' // Operadores válidos após números
    },
    qOperator: {
        '0': 'qStart0',   // Começa um novo número com 0
        digit: 'q1',      // Aceita novos dígitos após um operador
        '+': 'qError', '-': 'qError', '*': 'qError', '/': 'qError' // Operadores repetidos são inválidos
    },
    qError: {
        digit: 'qError', '+': 'qError', '-': 'qError', '*': 'qError', '/': 'qError' // Estado de erro
    }
};

// Função para classificar a entrada
function getSymbolType(char: string): string {
    if (!isNaN(Number(char)) && char !== ' ') {
        return char === '0' ? '0' : 'digit'; // Diferenciar '0' de outros dígitos
    } else if ('+-*/'.includes(char)) {
        return char; // Se for um operador
    }
    return 'invalid'; // Qualquer outra entrada
}

// Função para processar a expressão e verificar sua validade
function processExpression(expression: string): boolean {
    let currentState: State = 'q0';
    let lastOperator: string | null = null;

    for (const char of expression) {
        const symbolType = getSymbolType(char);

        // Se o símbolo for inválido, vai direto para o estado de erro
        if (symbolType === 'invalid' || !transitionTable[currentState][symbolType]) {
            currentState = 'qError';
            break;
        }

        // Checagem específica para divisão por zero
        if (lastOperator === '/' && char === '0') {
            currentState = 'qError'; // Divisão por zero é inválida
            break;
        }

        // Transição para o próximo estado
        currentState = transitionTable[currentState][symbolType];

        // Atualizar o último operador
        if ('+-*/'.includes(char)) {
            lastOperator = char;
        }
    }

    // A expressão só é válida se terminar no estado 'q1' ou 'qStart0' (número no final)
    return currentState === 'q1' || currentState === 'qStart0';
}

// Testando as expressões
const expressions = ["12+4*5/2", "0/3", "12/0", "12/05", "5+0"];
expressions.forEach(expr => {
    console.log(`A expressão ${expr} é ${processExpression(expr) ? 'válida' : 'inválida'}.`);
});
