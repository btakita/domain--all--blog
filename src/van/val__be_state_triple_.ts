import type { be__params_T, Ctx } from '@ctx-core/object'
import type { State } from 'van-type-delegate'
import { _be_state_arg_triple_ } from './_be_state_arg_triple_'
import { be_state_triple_, type be_state_triple_T } from './be_state_triple_'
import { van_ } from './van'
export function val__be_state_triple_<
	V,
	ctx_T extends Ctx = Ctx
>(
	...arg_a:
		|[be__params?:be__params_T]
		|[id:string|null|undefined, be__params?:be__params_T]
		|[val__new:(ctx:ctx_T)=>V, be__params?:be__params_T]
		|[id:string|null|undefined, val__new?:(ctx:ctx_T)=>V, be__params?:be__params_T]
):be_state_triple_T<State<V>, ctx_T> {
	let [
		id,
		val__new,
		be__params
	] =
		_be_state_arg_triple_(...arg_a)
	if (!val__new) throw new Error('val__be_state_triple_|val__new argument is required')
	return be_state_triple_<State<V>, ctx_T>(
		id,
		(ctx:ctx_T)=>van_(ctx).state<V>(val__new(ctx)),
		be__params)
}
