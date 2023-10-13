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
				document.firstElementChild.setAttribute('data-theme', theme)
				Button_theme_toggle.setAttribute('aria-label', theme)
				// Get a reference to the body element
				const body = document.body
				// Check if the body element exists before using getComputedStyle
				if (body) {
					// Get the computed styles for the body element
					const ComputedStyle = window.getComputedStyle(body)
					// Get the background color property
					const { backgroundColor } = ComputedStyle
					// Set the background color in <meta theme-color ... />
					document
						.querySelector('meta[name=\'theme-color\']')
						?.setAttribute('content', backgroundColor)
				}
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