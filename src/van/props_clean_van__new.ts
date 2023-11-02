/// <reference lib="dom" />
import type { ChildDom, CoreVan, MiniVan, PlateVan, Primitive, Props, TagFunc, Tags, VanShape } from 'van-type-delegate'
const protoOf = Object.getPrototypeOf
const objProto = protoOf({})
export function props_clean_van__new<V extends VanShape>(van:V):Van_w_undefined<V> {
	let tags = new Proxy<Tags<V>>(van.tags as Tags<V>, {
		get(target, p, receiver) {
			const tag = Reflect.get(target, p, receiver) as TagFunc<V>
			if (!tag) return tag
			return ((...args:Parameters<TagFunc<V>>)=>{
				let [
					props,
					...children
				] = (protoOf(args[0] ?? 0) === objProto ? args : [{}, ...args]) as [Props, ...ChildDom<V>[]]
				return tag(props__clean(props), ...children)
			}) as TagFunc<V>
		}
	})
	return new Proxy<V>(van, {
		get(target, p, receiver) {
			if (p === 'tags') return tags
			return Reflect.get(target, p, receiver)
		}
	}) as Van_w_undefined<V>
}
function props__clean(props:Props) {
	for (const key of Object.keys(props)) {
		if (props[key] === undefined) delete props[key]
	}
	return props
}
export type Props_w_undefined = Record<string, Props[string]|undefined>
export type TagFunc_w_undefined<V extends VanShape> = (
	first?:Props|ChildDom<V>|Props_w_undefined,
	// TODO: Why is |Primitive needed & not covered by ChildDom<V>?
	// All branches of ChildDom<V> have Primitive in the union...
	...rest:readonly ChildDom<V>[]
)=>ReturnType<TagFunc<V>>
export type Tags_w_undefined<V extends VanShape> = Record<string, TagFunc_w_undefined<V>>
export type TagNS_w_undefined<V extends VanShape> =
	(namespaceURI:string)=>Readonly<Record<string, TagFunc_w_undefined<V>>>
export type Van_w_undefined<V extends VanShape> = V&{
	tags:Tags_w_undefined<V>
	tagsNS:TagNS_w_undefined<V>
}
export type VanShape_w_undefined =
	|VanShape
	|Van_w_undefined<MiniVan>
	|Van_w_undefined<PlateVan>
	|Van_w_undefined<CoreVan>
