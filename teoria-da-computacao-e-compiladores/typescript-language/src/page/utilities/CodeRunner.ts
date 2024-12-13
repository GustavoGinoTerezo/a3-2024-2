import { Compiler } from "../../language/compiler/Compiler";
import { Lexer } from "../../language/lexer/Lexer";
import { Node } from "../../language/parser/Nodes";
import { Parser } from "../../language/parser/Parser";
import { Token } from "../../language/lexer/Tokens";

export interface CompilationProduction {
	/** Returns the tokens produced during the compilation. */
	tokensProduced: (tokens: Token[]) => void;

	/** Returns the AST produced during the compilation. */
	astProduced: (ast: Node[]) => void;
}

export function compileAndExecute(code: string, productions: CompilationProduction): Compiler {
	const lexer = new Lexer(code);
	const tokens = lexer.lex();

	productions.tokensProduced(tokens);

	const parser = new Parser(tokens);
	const ast = parser.parse();

	productions.astProduced(ast);

	const compiler = new Compiler(ast);

	requestAnimationFrame(() => {
		compiler.execute();
	});

	return compiler;
}
