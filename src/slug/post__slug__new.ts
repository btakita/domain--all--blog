import { slug } from 'github-slugger'
import { type Post } from '../post'
import { type SearchItem } from '../search'
export function post__slug__new(post:Post|SearchItem) {
	return (
		post.slug
			? slug(post.slug)
			: slug(post.data.title)
	)
}
