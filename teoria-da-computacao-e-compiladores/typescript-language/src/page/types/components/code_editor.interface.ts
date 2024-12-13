import { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { ReactCodeMirrorProps } from "@uiw/react-codemirror/src/index.js";

export interface CodeEditorRef extends React.RefAttributes<ReactCodeMirrorRef> {
	ref: React.RefObject<ReactCodeMirrorRef>;
    
    /** Clear the editor. */
    clear(): void;
}

export interface CodeEditorProps extends ReactCodeMirrorProps {}
