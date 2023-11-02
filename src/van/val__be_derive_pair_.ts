import type { be__params_T, Ctx } from '@ctx-core/object'
import { be_ } from '@ctx-core/object'
import type { State } from 'van-type-delegate'
import { _be_state_arg_triple_ } from './_be_state_arg_triple_'
import { type be_derive_pair_T } from './be_derive_pair_'
import { van_ } from './van'
export function val__be_derive_pair_<
	V,
	ctx_T extends Ctx = Ctx
>(
	...arg_a:
		|[val__new:(ctx:ctx_T)=>V, be__params?:be__params_T]
		|[id:string|null|undefined, val__new?:(ctx:ctx_T)=>V, be__params?:be__params_T]
):be_derive_pair_T<State<V>, ctx_T> {
	const [id, val__new, be__params] =
		_be_state_arg_triple_<V, ctx_T>(...arg_a)
	if (!val__new) throw new Error('val__be_derive_pair_|val__new argument is required')
	const _be_ =
		(be__params && be__params.be_)
		?? be_
	const val$_ =
		id
			? _be_(id, (ctx:ctx_T)=>van_(ctx).derive(()=>val__new(ctx)), be__params)
			: _be_((ctx:ctx_T)=>van_(ctx).derive(()=>val__new(ctx)), be__params)
	const val_ = (ctx:ctx_T)=>val$_(ctx).val
	return [
		val$_,
		val_,
	] as be_derive_pair_T<State<V>, ctx_T>
}
