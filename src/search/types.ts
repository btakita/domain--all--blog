import { type Post } from '../post'
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
