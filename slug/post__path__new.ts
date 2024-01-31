import { type dehydrated_post_meta_T } from '../post/index.ts'
import { post__slug__new } from './post__slug__new.js'
export function post__path__new(dehydrated_post_meta:dehydrated_post_meta_T) {
	return `/posts/${post__slug__new(dehydrated_post_meta)}`
}
