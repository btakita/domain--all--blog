/// <reference lib="dom" />
import { id__dom__handler_ } from '@ctx-core/dom'
import { type Ctx } from 'ctx-core/be'
import { memo_, type memo_T } from 'rmemo'
import { theme_, theme__toggle } from './theme.js'
export const theme__toggle_button__onbind = id__dom__handler_(
	'theme__toggle_button__onbind',
	(Button_theme_toggle:HTMLButtonElement&{ _aria_label:memo_T<any> }, ctx:Ctx)=>{
		Button_theme_toggle.addEventListener('click', Button_theme_toggle__onclick)
		Button_theme_toggle._aria_label = memo_($=>{
			Button_theme_toggle.setAttribute('aria-label', theme_(ctx))
			return $
		})
		const unbind_a = [
			()=>Button_theme_toggle.removeEventListener('click', Button_theme_toggle__onclick),
		]
		Button_theme_toggle.addEventListener('unbind', ()=>{
			for (const unbind of unbind_a) {
				unbind()
			}
		})
		function Button_theme_toggle__onclick(evt:Event) {
			evt.preventDefault()
			theme__toggle(ctx)
		}
	})
