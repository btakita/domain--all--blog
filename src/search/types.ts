import { type Post } from '../post'
export type SearchItem = {
	title:string
	description:string
	post__data:Post['data']
}
export interface SearchResult {
	item:SearchItem
	refIndex:number
}
