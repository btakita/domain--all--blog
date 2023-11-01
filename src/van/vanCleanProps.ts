import { ChildDom, Props, TagFunc, Tags, VanShape } from 'mini-van-plate/shared'
const protoOf = Object.getPrototypeOf
const objProto = protoOf({})
export function vanCleanProps<V extends VanShape>(van:V):Omit<V, 'tags'|'tagsNS'>&{
	tags:Readonly<Record<string, TagFuncWithUndefined<V>>>
	tagsNS:(namespaceURI: string) => Readonly<Record<string, TagFuncWithUndefined<V>>>
} {
	let tags = new Proxy<Tags<V>>(van.tags, {
		get(target, p, receiver) {
			const tag = Reflect.get(target, p, receiver)
			if (!tag) return tag
			return ((...args:Parameters<TagFunc<V>>)=>{
				let [
					props,
					...children
				] = (protoOf(args[0] ?? 0) === objProto ? args : [{}, ...args]) as [Props, ChildDom[]]
				return tag(cleanProps(props), ...children) as ReturnType<TagFunc<V>>
			}) as TagFunc<V>
		}
	})
	return new Proxy<V>(van, {
		get(target, p, receiver) {
			if (p === 'tags') return tags
			return Reflect.get(target, p, receiver)
		}
	}) as VanWithUndefined<V>
}
function cleanProps(props:Props) {
	for (const key of Object.keys(props)) {
		if (props[key] === undefined) delete props[key]
	}
	return props
}
export type PropsWithUndefined = Record<string, Props[string]|undefined>
export type TagFuncWithUndefined<V extends VanShape> =
	(first?:Props|ChildDom<V>|PropsWithUndefined, ...rest:readonly ChildDom<V>[])=>ReturnType<TagFunc<V>>
export type VanWithUndefined<V extends VanShape> = V&{
	tags:Record<string, TagFuncWithUndefined<V>>
	tagsNS:(namespaceURI: string) => Readonly<Record<string, TagFuncWithUndefined<V>>>
}
