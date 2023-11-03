import type { be__params_T, Ctx } from '@ctx-core/object'
import type { State } from 'van-type-delegate'
import { _be_state_arg_triple_ } from './_be_state_arg_triple_'
import { be_derive_pair_, type be_derive_pair_T } from './be_derive_pair_'
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
	return be_derive_pair_(
		id,
		(ctx:ctx_T)=>van_(ctx).derive(()=>val__new(ctx)),
		be__params)
}
