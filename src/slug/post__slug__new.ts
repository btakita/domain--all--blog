import { slug } from 'github-slugger'
import { type Post } from '../post/index.js'
import { type SearchItem } from '../search/index.js'
export function post__slug__new(post:Post|SearchItem) {
	return (
		post.slug
			? slug(post.slug)
			: slug(post.data.title)
	)
}
