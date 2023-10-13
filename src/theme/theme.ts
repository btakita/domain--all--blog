import { atom_, be_computed_pair_ } from '@ctx-core/nanostores'
import { type Ctx } from '@ctx-core/object'
export const [
	theme$_,
	theme_,
] = be_computed_pair_('theme', ()=>{
	const theme$ = atom_<theme_T>('light')
	const watch = window.matchMedia('(prefers-color-scheme: dark)')
	watch.addEventListener('change', ({ matches: is_dark })=>{
		const theme = theme__new(is_dark)
		theme$.$ = theme
		localStorage.setItem('theme', theme)
	})
	const localStorage__theme = localStorage.getItem('theme') as theme_T
	theme$.$ =
		localStorage__theme
			? localStorage__theme
			: theme__new(watch.matches)
	return theme$
	function theme__new(is_dark:boolean) {
		return is_dark ? 'dark' : 'light'
	}
})
export function theme__set(ctx:Ctx, theme:theme_T) {
	localStorage.setItem('theme', theme)
	theme$_(ctx).$ = theme
}
export function theme__toggle(ctx:Ctx) {
  theme__set(ctx, theme_(ctx) === 'light' ? 'dark' : 'light')
}
export type theme_T = 'light'|'dark'
