import * as Value from "../../language/compiler/Value";

import { CompilationProduction, compileAndExecute } from "../utilities/CodeRunner";
import { useEffect, useRef } from "react";

import CodeEditor from "../components/CodeEditor";
import { CodeEditorRef } from "../types/components/code_editor.interface";
import { Node } from "../../language/parser/Nodes";
import { Resizable } from "re-resizable";
import Terminal from "../components/Terminal";
import { TerminalRef } from "../types/components/terminal.interface";
import { Token } from "../../language/lexer/Tokens";

function Home() {
	const codeEditorRef = useRef<CodeEditorRef>(null);
	const terminalRef = useRef<TerminalRef>(null);

	useEffect(() => {
		return () => {
			terminalRef.current?.clear();
		};
	}, []);

	/** Compiles the code in the editor and runs it */
	function onExecuteCodeButtonClick() {
		const code = codeEditorRef?.current?.ref?.current?.view?.state?.doc.toString();
		if (!code) {
			return null;
		}

		function tokensProduced(tokens: Token[]) {
			console.log("Produced tokens:", tokens);
		}

		function astProduced(ast: Node[]) {
			console.log("Produced AST:", ast);
		}

		const productions = {
			tokensProduced: tokensProduced,
			astProduced: astProduced,
		} as CompilationProduction;

		const compiler = compileAndExecute(code, productions);
		compiler.context.external = {terminal: terminalRef};
	}

	/** Clear the code in the editor */
	function onClearEditorButtonClick() {
		codeEditorRef.current?.clear();
	}

	/** Clear the terminal */
	function onClearTerminalButtonClick() {
		terminalRef.current?.clear();
	}

	return (
		<div className="flex h-screen w-screen flex-col items-start justify-start">
			{/* Header */}
			<header className="flex w-full flex-col items-start bg-slate-700">
				<div className="h-full w-full bg-slate-800">
					<span className="px-4 font-mono tracking-tighter">[Editor]</span>
				</div>

				<div className="flex h-full w-full items-end justify-end">
					<span
						className="px-4 font-mono tracking-tighter hover:cursor-pointer hover:bg-slate-600"
						onClick={onExecuteCodeButtonClick}
					>
						[Executar]
					</span>
					<span
						className="px-4 font-mono tracking-tighter hover:cursor-pointer hover:bg-slate-600"
						onClick={onClearEditorButtonClick}
					>
						[Limpar]
					</span>
				</div>
			</header>

			{/* Code Editor */}
			<main className="w-full grow overflow-x-hidden">
				<CodeEditor ref={codeEditorRef} />
			</main>

			{/* Terminal */}
			<Resizable
				className="flex w-full flex-col overflow-hidden bg-slate-700"
				minWidth="100%"
				maxWidth="100%"
				minHeight="100px"
				maxHeight="100%"
				defaultSize={{ width: "100%", height: "100px" }}
				enable={{
					top: true,
					left: false,
					right: false,
					bottom: false,
					bottomLeft: false,
					bottomRight: false,
					topLeft: false,
					topRight: false,
				}}
			>
				{/* Footer */}
				<footer className="flex w-full flex-col items-start bg-slate-700">
					<div className="h-full w-full bg-slate-800">
						<span className="px-4 font-mono tracking-tighter">[Terminal]</span>
					</div>

					<div className="flex h-full w-full items-end justify-end">
						<span
							className="px-4 font-mono tracking-tighter hover:cursor-pointer hover:bg-slate-600"
							onClick={onClearTerminalButtonClick}
						>
							[Limpar]
						</span>
					</div>
				</footer>

				<Terminal ref={terminalRef} />
			</Resizable>
		</div>
	);
}

export default Home;
