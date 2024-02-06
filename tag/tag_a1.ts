import { id_be_memo_pair_ } from 'ctx-core/rmemo'
import { nullish__none_ } from 'ctx-core/function'
import { dehydrated_post_meta_a1_, type dehydrated_post_meta_T } from '../post/index.js'
import { slug__new } from '../slug/index.js'
export const [
	unique_tag_a1$_,
	unique_tag_a1_,
] = id_be_memo_pair_(
	'unique_tag_a1',
	ctx=>
		nullish__none_([dehydrated_post_meta_a1_(ctx)],
			dehydrated_post_meta_a1=>
				unique_tag_a1__new(dehydrated_post_meta_a1)))
export function unique_tag_a1__new(dehydrated_post_meta_a1:dehydrated_post_meta_T[]) {
	return (
		dehydrated_post_meta_a1
			.filter(({ draft })=>!draft)
			.flatMap(({ tag_a1 })=>tag_a1)
			.map(tag=>slug__new(tag))
			.filter((value:string, index:number, self:string[])=>
				self.indexOf(value) === index)
			.sort((tag0:string, tag1:string)=>tag0.localeCompare(tag1))
	)
}
