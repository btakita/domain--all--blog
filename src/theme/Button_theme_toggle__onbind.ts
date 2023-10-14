/// <reference lib="dom" />
import { id__dom__handler_ } from '@ctx-core/dom'
import { type Ctx } from '@ctx-core/object'
import { theme$_, theme__toggle } from './theme.ts'
export const Button_theme_toggle__onbind = id__dom__handler_(
	'Button_theme_toggle__onbind',
	(Button_theme_toggle:HTMLButtonElement, ctx:Ctx)=>{
		Button_theme_toggle.addEventListener('click', Button_theme_toggle__onclick)
		const unbind_a = [
			()=>Button_theme_toggle.removeEventListener('click', Button_theme_toggle__onclick),
			theme$_(ctx).subscribe(theme=>{
				Button_theme_toggle.setAttribute('aria-label', theme)
			})
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