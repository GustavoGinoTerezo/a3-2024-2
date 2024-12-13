import React, { useEffect, useImperativeHandle, useRef } from "react";
import ReactCodeMirror, { ReactCodeMirrorRef } from "@uiw/react-codemirror";

import { configure as configureCodeEditor } from "../configurations/CodeEditorConfigurator";
import { CodeEditorProps, CodeEditorRef } from "../types/components/code_editor.interface";

const CodeEditor: React.ForwardRefRenderFunction<CodeEditorRef, CodeEditorProps> = (_, ref) => {
	const codeEditorRef = useRef<ReactCodeMirrorRef>(null);

	function clear() {
		codeEditorRef?.current?.view?.dispatch({
			changes: { from: 0, to: codeEditorRef?.current?.view?.state?.doc.toString().length },
		});
	}

	useImperativeHandle(
		ref,
		() => ({
			ref: codeEditorRef,

			clear: clear,
		}),
		[],
	);

	useEffect(() => {
		// Hacky code to prevent the editor from pushing the terminal out of the screen
		codeEditorRef.current?.editor?.style.setProperty("height", "0px");
	}, []);

	return <ReactCodeMirror {...configureCodeEditor()} ref={codeEditorRef} />;
};

const ForwardedCodeEditor = React.forwardRef(CodeEditor);
export default ForwardedCodeEditor;
