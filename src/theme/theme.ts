import { has_dom } from '@ctx-core/dom'
import { type Ctx_wide_T } from 'ctx-core/be'
import { be_, be_sig_triple_, sig_ } from 'rmemo'
export const [
	theme$_,
	theme_,
	,
] = be_sig_triple_<theme_T>(be_(()=>{
	let watch:MediaQueryList
	const theme$ = sig_<theme_T>('light', theme$=>{
		if (has_dom) {
			document.firstElementChild!.setAttribute('data-theme', theme$())
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
					.querySelector('meta[name="theme-color"]')
					?.setAttribute('content', backgroundColor)
			}
		}
	})
	if (has_dom) {
		watch = window.matchMedia('(prefers-color-scheme: dark)')
		watch.addEventListener('change', ({ matches: is_dark })=>{
			const theme = theme__new(is_dark)
			theme$._ = theme
			localStorage.setItem('theme', theme)
		})
		const localStorage__theme = localStorage.getItem('theme') as theme_T
		theme$._ =
			localStorage__theme
				? localStorage__theme
				: theme__new(watch.matches)
	}
	return theme$
}, { id: 'theme' }))
function theme__new(is_dark:boolean) {
	return is_dark ? 'dark' : 'light'
}
export function theme__set(ctx:Ctx_wide_T<''>, theme:theme_T) {
	localStorage.setItem('theme', theme)
	theme$_(ctx)._ = theme
}
export function theme__toggle(ctx:Ctx_wide_T<''>) {
	theme__set(ctx, theme_(ctx) === 'light' ? 'dark' : 'light')
}
export type theme_T = 'light'|'dark'
