import { be_, type Ctx } from '@ctx-core/object'
import type { VanShape } from 'van-type-delegate'
import { type Tags_w_undefined } from './props_clean_van__new'
import { van_ } from './van'
const _S_ = be_('S_', ctx=>
	van_(ctx).tagsNS('http://www.w3.org/2000/svg'))
export function S_<V extends VanShape>(ctx:Ctx) {
  return _S_(ctx) as any as Tags_w_undefined<V>
}
