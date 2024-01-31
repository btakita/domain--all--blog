import { type request_ctx_T } from 'rebuildjs/server'
import { type tag_dom_T } from 'relementjs'
import { type dehydrated_post_meta_T } from './post_meta.ts'
export type post_mod_T = {
	meta:dehydrated_post_meta_T
	default:((ctx:request_ctx_T)=>tag_dom_T)
}
