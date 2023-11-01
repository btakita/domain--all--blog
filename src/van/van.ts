import { has_dom } from '@ctx-core/dom'
import { be_ } from '@ctx-core/object'
import mini_van from 'mini-van-plate'
import van_plate from 'mini-van-plate/van-plate'
import { vanCleanProps } from './vanCleanProps'
export const van_ = be_('van_', ()=>
	vanCleanProps(has_dom ? mini_van : van_plate))
