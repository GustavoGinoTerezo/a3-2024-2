import { ReactCodeMirrorProps } from "@uiw/react-codemirror";

export function configure(): ReactCodeMirrorProps {
	return {
		theme: "dark",
		placeholder: "Digite seu código aqui...",
	} as ReactCodeMirrorProps;
}
