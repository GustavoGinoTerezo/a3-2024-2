import * as Value from "../compiler/Value";
import * as Context from "../compiler/Context";

import { __Log as Log } from "./packages/Log";
import { __Math as Math } from "./packages/Math";

interface BuiltInFunction {
	(context: Context.Context, ...any: any[]): any;
}

class BuiltIns {
	constructor(private readonly context: Context.Context) {}

	/**
	 *
	 * @param callback
	 * @returns
	 */
	private wrapInternal(callback: BuiltInFunction): Value.BuiltInCodeObject {
		return new Value.BuiltInCodeObject((...any: any[]) => {
			return callback(this.context, ...any);
		});
	}

	/**
	 *
	 * @returns
	 */
	public load(): { [key: string]: Value.BaseValue } {
		return {
			// ===== Math ===== //
			math: Value.DICTIONARY({
				PI: Math.PI,
				TAU: Math.TAU,

				seno: this.wrapInternal(Math.seno),
				cosseno: this.wrapInternal(Math.cosseno),
				tangente: this.wrapInternal(Math.tangente),

				potencia: this.wrapInternal(Math.potencia),
				raiz: this.wrapInternal(Math.raiz),
			}),

			// ===== Log ===== //
			log: Value.DICTIONARY({
				escreva: this.wrapInternal(Log.escreva),
				leia: this.wrapInternal(Log.leia),
			}),
		};
	}
}

export { BuiltIns };
