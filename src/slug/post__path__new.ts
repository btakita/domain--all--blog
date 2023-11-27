import { type SearchItem } from '../search/index.js'
import { post__slug__new } from './post__slug__new.js'
export function post__path__new(item:SearchItem) {
	return `/posts/${post__slug__new(item)}`
}
