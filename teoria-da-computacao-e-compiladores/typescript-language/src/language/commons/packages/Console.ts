import * as Context from "../../compiler/Context";
import * as Value from "../../compiler/Value";

import React from "react";
import { TerminalRef } from "../../../page/types/components/terminal.interface";

class __Console {
	/**
	 *
	 * @param parameters
	 */
	static escreva(context: Context.Context, ...parameters: Value.BaseValue[]): void {
		(context.external as {terminal: React.RefObject<TerminalRef>}).terminal?.current?.log(parameters.map((parameter) => parameter.toString()).join(" "));
	}

	/**
	 *
	 * @param _
	 */
	static leia(_: Context.Context, question: Value.StringObject): void {}

	/**
	 *
	 * @param _
	 */
	static limpa(context: Context.Context): void {
		(context.external as {terminal: React.RefObject<TerminalRef>}).terminal?.current?.clear();
	}
}

export { __Console };
