import { be_, type Ctx, ctx__set } from '@ctx-core/object'
import van from 'mini-van-plate/van-plate'
import type { VanShape } from 'van-type-delegate'
import { type VanShape_w_undefined } from './props_clean_van__new'
export const van_ = be_<VanShape>('van_', ()=>
	van)
export function van__set<V extends VanShape_w_undefined>(ctx:Ctx, van:V) {
	ctx__set(ctx, van_, van)
}
