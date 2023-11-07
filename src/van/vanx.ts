import { be_, type Ctx, ctx__set } from '@ctx-core/object'
import type { State } from 'vanjs-core'
import type { DeReactive, Reactive, ReactiveObj, ReplaceFunc, StateOf, ValueType } from 'vanjs-ext'
export const vanx_ = be_<vanx_T|null>('vanx_', ()=>null)
export function vanx__set(ctx:Ctx, vanx:vanx_T) {
  ctx__set(ctx, vanx_, vanx)
}
export interface vanx_T {
	calc:<R>(f:()=>R)=>R
	reactive:<T extends object>(obj:T)=>Reactive<T>
	stateFields:<T extends ReactiveObj>(obj:T)=>StateOf<DeReactive<T>>
	list:<T extends ReactiveObj, ElementType extends Element>
	(containerFunc:()=>ElementType, items:T,
		itemFunc:(s:State<ValueType<T>>, deleter:()=>void)=>Node)=>ElementType
	replace: <T extends ReactiveObj>(items: T, f: ReplaceFunc<T>) => void
}
