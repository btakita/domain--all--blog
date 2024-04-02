import { site__author_, site__author_img_url_ } from '@rappstack/domain--server/site'
import { nullish__none_ } from 'ctx-core/function'
import { id_be_lock_memosig_triple_, id_be_memo_pair_ } from 'ctx-core/rmemo'
import { type request_ctx_T } from 'rebuildjs/server'
import { post_mod_a1_ } from './post_mod.js'
export const [
	,
	dehydrated_post_meta_a1_,
	dehydrated_post_meta_a1__set,
] = id_be_lock_memosig_triple_(
	'dehydrated_post_meta_a1',
	ctx=>
		nullish__none_([post_mod_a1_(ctx)],
			post_mod_a1=>
				post_mod_a1.map(post_mod=>
					// server side...will not execute on browser
					post_mod.meta_(ctx as request_ctx_T))))
export const [
	,
	sorted_dehydrated_post_meta_a1_,
] = id_be_memo_pair_(
	'sorted_dehydrated_post_meta_a1',
	ctx=>
		nullish__none_([dehydrated_post_meta_a1_(ctx)],
			dehydrated_post_meta_a1=>
				sorted_dehydrated_post_meta_a1__new(
					dehydrated_post_meta_a1)))
export function sorted_dehydrated_post_meta_a1__new(
	dehydrated_post_meta_a1:dehydrated_post_meta_T[]
) {
	return (
		dehydrated_post_meta_a1
			.filter(({ draft })=>!draft)
			.sort(
				(a, b)=>
					Math.floor(new Date(b.pub_date).getTime() / 1000) -
					Math.floor(new Date(a.pub_date).getTime() / 1000)))
}
export function post_meta__validate(
	ctx:request_ctx_T,
	dehydrated_post_meta:in_dehydrated_post_meta_T,
):dehydrated_post_meta_T {
	const {
		pub_date,
		updated_date,
	} = dehydrated_post_meta
	if (isNaN(new Date(pub_date) as never)) {
		throw Error('invalid pub_date ' + pub_date)
	}
	if (
		updated_date
		&& isNaN(new Date(updated_date) as never)
	) {
		throw Error('invalid updated_date ' + updated_date)
	}
	return {
		author: site__author_(ctx)!,
		author_img_url: site__author_img_url_(ctx)!,
		...dehydrated_post_meta,
		tag_a1: dehydrated_post_meta.tag_a1 ?? ['other']
	}
}
export function post_meta__hydrate({
	pub_date: _pub_date,
	updated_date: _updated_date,
	tag_a1,
	..._meta
}:dehydrated_post_meta_T) {
	return {
		..._meta,
		tag_a1,
		pub_date: new Date(_pub_date),
		...(_updated_date ? { updated_date: new Date(_updated_date) } : {}),
	} as post_meta_T
}
export type dehydrated_post_meta_T = {
	author:string
	author_img_url:string
	pub_date:string
	title:string
	slug:string
	description:string
	updated_date?:string
	hero_image?:string
	og_image?:string
	tag_a1:string[]
	featured?:boolean
	draft?:boolean
	canonical_url?:string
}
export type in_dehydrated_post_meta_T = {
	author?:string
	author_img_url?:string
	pub_date:string
	title:string
	slug:string
	description:string
	updated_date?:string
	hero_image?:string
	og_image?:string
	tag_a1?:string[]
	featured?:boolean
	draft?:boolean
	canonical_url?:string
}
export type post_meta_T = {
	author:string
	author_img_url:string
	pub_date:Date
	title:string
	slug:string
	description:string
	updated_date?:Date
	hero_image?:string
	og_image?:string
	tag_a1?:string[]
	featured?:boolean
	draft?:boolean
	canonical_url?:string
}
