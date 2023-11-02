import { be_, type Ctx } from '@ctx-core/object'
import type { VanShape } from 'van-type-delegate'
import { type Tags_w_undefined } from './props_clean_van__new'
import { van_ } from './van.ts'
const _H_ = be_('H_', ctx=>
	van_(ctx).tags)
export function H_<V extends VanShape>(ctx:Ctx) {
	return _H_(ctx) as any as Tags_w_undefined<V>
}
