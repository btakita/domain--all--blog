import { type dehydrated_post_meta_T } from '../post/index.js'
import { post_slug__new } from './post_slug__new.js'
export function post__path__new(dehydrated_post_meta:dehydrated_post_meta_T) {
	return `/posts/${post_slug__new(dehydrated_post_meta)}`
}
