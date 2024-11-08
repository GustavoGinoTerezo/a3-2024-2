import { Compiler } from "./source/compiler/Compiler";
import { Lexer } from "./source/lexer/Lexer";
import { Parser } from "./source/parser/Parser";

const source = `
bloco
	declarar memo = {}

	fibonacci(n)
		se memo[n] faca
			retorna memo[n]
		fim

		se n == 0 faca
			retorna 0
		fim

		caso n == 1 faca
			retorna 1
		fim

		memo[n] = fibonacci(n - 1) + fibonacci(n - 2)
		retorna memo[n]
	fim

	escreva(fibonacci(600))
fim
`;

try {
	const lexer = new Lexer(source);
	const tokens = lexer.lex();

	const parser = new Parser(tokens);
	const program = parser.parse();

	console.log(JSON.stringify(program, null, 2));

	const compiler = new Compiler(program);
	compiler.execute();
} catch (exception) {
	console.error((<Error>exception).message);
}
