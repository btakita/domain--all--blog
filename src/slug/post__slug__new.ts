import { slug } from 'github-slugger'
import { type Post } from '../post'
export function post__slug__new(post:Post|Post['data']) {
	return (
		post.data
			? post.slug
				? slug(post.slug)
				: slug(post.data.title)
			: post.slug
				? slug(post.slug)
				: slug(post.title))
}
