import { slug } from 'github-slugger'
import { type dehydrated_post_meta_T } from '../post/index.js'
export function post__slug__new(dehydrated_post_meta:dehydrated_post_meta_T) {
	return (
		dehydrated_post_meta.slug
			? slug(dehydrated_post_meta.slug)
			: slug(dehydrated_post_meta.title)
	)
}
