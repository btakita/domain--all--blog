import type { be__params_T, Ctx } from '@ctx-core/object'
export function _be_state_arg_triple_<
	V,
	ctx_T extends Ctx = Ctx,
>(...arg_a:
	|[be__params?:be__params_T]
	|[id:string|null|undefined, be__params?:be__params_T]
	|[val__new:(ctx:ctx_T)=>V, be__params?:be__params_T]
	|[id?:string|null|undefined, val__new?:((ctx:ctx_T)=>V), be__params?:be__params_T]
):_be_state_arg_triple_T<V, ctx_T> {
	let id:string|null|undefined
	let val__new:((ctx:ctx_T)=>V)|undefined
	let be__params:be__params_T|undefined
	if (arg_a.length === 3) {
		[id, val__new, be__params] = arg_a
	}
	else if (arg_a.length === 2) {
		if (typeof arg_a[0] === 'function') {
			val__new = arg_a[0]
			be__params = arg_a[1] as be__params_T
		}
		else {
			id = arg_a[0]
			if (typeof arg_a[1] === 'function') {
				val__new = arg_a[1]
			}
			else {
				be__params = arg_a[1]
			}
		}
	}
	else if (arg_a.length === 1) {
		if (typeof arg_a[0] === 'function') {
			val__new = arg_a[0]
		}
		else if (typeof arg_a[0] === 'object') {
			be__params = arg_a[0] as be__params_T
		}
		else {
			id = arg_a[0]
		}
	}
	return [id, val__new, be__params] as _be_state_arg_triple_T<V, ctx_T>
}
export type _be_state_arg_triple_T<
	V,
	ctx_T extends Ctx = Ctx
> = [
	id:string|null,
	val__new:(ctx:ctx_T)=>V,
	be__params:be__params_T
]
