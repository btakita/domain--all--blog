import { be_, type Ctx } from '@ctx-core/object'
import { type Tags_w_undefined, van_, type VanShape_w_undefined } from '@ctx-core/vanjs'
import type { VanShape } from 'van-type-delegate'
const _H_ = be_('H_',
	ctx=>
		van_<VanShape_w_undefined<VanShape>>(ctx).tags)
export function H_<van_T extends VanShape>(ctx:Ctx) {
  return _H_(ctx) as Tags_w_undefined<van_T>
}
