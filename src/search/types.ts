import { type Post } from '../post/index.js'
export interface SearchItem extends Partial<Post> {
	title:string
	description:string
	slug:string
	data:Post['data']
}
export interface SearchResult {
	item:SearchItem
	refIndex:number
}
