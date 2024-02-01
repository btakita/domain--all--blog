import { type request_ctx_T } from 'rebuildjs/server'
import { type tag_dom_T } from 'relementjs'
import { id_be_sig_triple_ } from 'rmemo'
import { type dehydrated_post_meta_T } from './post_meta.ts'
export const [
	post_mod_a1$_,
	post_mod_a1_,
	post_mod_a1__set,
] = id_be_sig_triple_<post_mod_T[]|undefined>(
	'post_mod_a1',
	()=>undefined)
export type post_mod_T = {
	meta:dehydrated_post_meta_T
	default:((ctx:request_ctx_T)=>tag_dom_T)
}
