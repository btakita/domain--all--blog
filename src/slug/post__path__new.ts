import { type SearchItem } from '../search'
import { post__slug__new } from './post__slug__new.ts'
export function post__path__new(item:SearchItem) {
	return `/posts/${post__slug__new(item)}`
}
