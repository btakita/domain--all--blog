import type { Be, be__params_T, Ctx } from '@ctx-core/object'
import { be_ } from '@ctx-core/object'
import type { State, StateVal } from 'van-type-delegate'
import { _be_state_arg_triple_ } from './_be_state_arg_triple_'
import { van_ } from './van'
export function be_state_triple_<
	S extends State<unknown|undefined>,
	ctx_T extends Ctx = Ctx
>(...arg_a:
	|[be__params?:be__params_T]
	|[id:string|null|undefined, be__params?:be__params_T]
	|[state__new:(ctx:ctx_T)=>S, be__params?:be__params_T]
	|[id?:string|null|undefined, state__new?:(ctx:ctx_T)=>S, be__params?:be__params_T]
) {
	let [
		id,
		state__new,
		be__params
	] = _be_state_arg_triple_<S, ctx_T>(...arg_a as any)
	if (!state__new) {
		state__new = (ctx:ctx_T)=>van_(ctx).state(undefined) as S
	}
	const _be_ =
		(be__params && be__params.be_)
		?? be_
	const val$_ =
		id
			? _be_(id, state__new, be__params)
			: _be_(state__new, be__params)
	const val_ = (ctx:ctx_T)=>val$_(ctx).val
	const val__set = (ctx:ctx_T, val:StateVal<S>)=>{
		val$_(ctx).val = val
	}
	return [
		val$_,
		val_,
		val__set
	] as be_state_triple_T<S, ctx_T>
}
export type be_state_triple_T<
	S extends State<unknown>,
	ctx_T extends Ctx = Ctx
> = [
	Be<S>,
	(ctx:ctx_T)=>StateVal<S>,
	(ctx:ctx_T, val:StateVal<S>)=>void
]
