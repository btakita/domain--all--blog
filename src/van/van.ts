import { be_, type Ctx } from '@ctx-core/object'
import type { BindingFunc, ChildDom, State, VanShape } from 'van-type-delegate'
import { props_clean_van__new, type VanShape_w_undefined } from './props_clean_van__new'
const _van_a_ = be_<VanShape[]>('_van_a_', ()=>
	[])
const _van_internals_a_ = be_<van_internals_T<VanShape>[]>('_van_internals_a_', ctx=>
	[])
export function van_<V extends VanShape>(ctx:Ctx) {
	return _van_a_(ctx)[0] as V
}
export function van_internals_<V extends VanShape>(ctx:Ctx) {
	return _van_internals_a_(ctx)[0] as van_internals_T<V>
}
export function van__set<V extends VanShape_w_undefined>(ctx:Ctx, van:V) {
	const props_clean_van = props_clean_van__new(van)
	_van_a_(ctx)[0] = props_clean_van
	const protoOf = Object.getPrototypeOf, funcProto = protoOf(protoOf), objProto = protoOf({})
	const stateProto = protoOf(van.state(undefined))!
	_van_internals_a_(ctx)[0] = {
		protoOf,
		funcProto,
		objProto,
		elementProto: protoOf(van.tags.div()),
		stateProto,
		plainValue(v:Exclude<ChildDom<V>, null|undefined>, k?:string) {
			let protoOfV = protoOf(v ?? 0)
			return protoOfV === stateProto ? (v as State<any>).val :
				protoOfV === funcProto && (!k?.startsWith('on') || (v as any)._isBindingFunc) ? (v as BindingFunc<V>)(
					undefined) : v
		}
	}
}
export interface van_internals_T<V extends VanShape> {
	protoOf:typeof Object.getPrototypeOf
	funcProto:Function
	objProto:Object
	elementProto:van__elementProto_T
	stateProto:Object
	plainValue(v:Exclude<ChildDom<V>, null|undefined>, k?:string):ChildDom<V>
}
export interface van__elementProto_T {
	render():string
	renderToBuf(buf:string[]):void
}
