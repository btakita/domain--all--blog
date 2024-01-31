export function post_meta__validate(
	dehydrated_post_meta:in_dehydrated_post_meta_T
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
		...dehydrated_post_meta,
		tag_a1: dehydrated_post_meta.tag_a1 ?? ['other']
	}
}
export function post_meta__hydrate({
	pub_date: _pub_date,
	updated_date: _updated_date,
	tag_a1: _tag_a1,
	..._meta
}:dehydrated_post_meta_T) {
	return {
		..._meta,
		pub_date: new Date(_pub_date),
		...(_updated_date ? { updated_date: new Date(_updated_date) } : {}),
	} as post_meta_T
}
export type dehydrated_post_meta_T = {
	author:string
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
	author:string
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
