import { be_, type Ctx } from '@ctx-core/object'
import { type Tags_w_undefined, van_, type VanShape_w_undefined } from '@ctx-core/vanjs'
import type { VanShape } from 'van-type-delegate'
const _S_ = be_('S_', ctx=>
	van_<VanShape_w_undefined<VanShape>>(ctx).tagsNS('http://www.w3.org/2000/svg'))
export function S_<van_T extends VanShape>(ctx:Ctx) {
	return _S_(ctx) as Tags_w_undefined<van_T>
}
