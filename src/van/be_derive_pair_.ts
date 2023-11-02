import type { Be, be__params_T, Ctx } from '@ctx-core/object'
import { be_ } from '@ctx-core/object'
import type { State, StateVal } from 'van-type-delegate'
import { _be_state_arg_triple_ } from './_be_state_arg_triple_'
export function be_derive_pair_<
	S extends State<unknown>,
	ctx_T extends Ctx = Ctx,
>(...arg_a:
	|[derived__new:(ctx:ctx_T)=>S, be__params?:be__params_T]
	|[id?:string|null|undefined, derived__new?:(ctx:ctx_T)=>S, be__params?:be__params_T]
):be_derive_pair_T<S, ctx_T> {
	const [
		id,
		derived__new,
		be__params
	] = _be_state_arg_triple_<S, ctx_T>(...arg_a)
	if (!derived__new) throw new Error('be_derive_pair_|derived__new argument is required')
	const _be_ =
		(be__params && be__params.be_)
		?? be_
	const val$_ =
		id
			? _be_(id, derived__new, be__params)
			: _be_(derived__new, be__params)
	const val_ = (ctx:ctx_T)=>val$_(ctx).val
	return [
		val$_,
		val_,
	] as be_derive_pair_T<S, ctx_T>
}
export type be_derive_pair_T<
	S extends State<unknown>,
	ctx_T extends Ctx = Ctx
> = [
	Be<S, ctx_T>,
	(ctx:ctx_T)=>StateVal<S>
]
