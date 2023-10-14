import { atom_ } from '@ctx-core/nanostores'
import { be_atom_memo_tuple5_ } from '@ctx-core/solid-nanostores'
import { type Post } from '../post'
export const [
	search_item_a$_,
	search_item_a_,
	search_item_a__set,
	search_item_a__memo,
	search_item_a__memo_,
] = be_atom_memo_tuple5_(()=>
	atom_<SearchItem[]>([]))
export type SearchItem = {
	title:string
	description:string
	post__data:Post['data']
}
export interface SearchResult {
	item:SearchItem
	refIndex:number
}
