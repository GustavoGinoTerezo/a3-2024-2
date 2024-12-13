import React, { useImperativeHandle, useState } from "react";

import { TerminalProps, TerminalRef } from "../types/components/terminal.interface";

const Terminal: React.ForwardRefRenderFunction<TerminalRef, TerminalProps> = (_, ref) => {
	const [lines, setLines] = useState<string[]>([]);

	function log(message: string) {
		setLines((previousLines) => [...previousLines, message]);
	}

	function clear() {
		setLines(() => []);
	}

	useImperativeHandle(
		ref,
		() => ({
			log: log,
			clear: clear,
		}),
		[],
	);

	return (
		<div className="flex h-full flex-col overflow-y-auto pl-4 leading-tight">
			{lines.map((line, index) => (
				<span key={index} className="font-mono tracking-tighter">
					{line}
				</span>
			))}
		</div>
	);
};

const ForwardedTerminal = React.forwardRef(Terminal);
export default ForwardedTerminal;
