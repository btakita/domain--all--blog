import { type nullish, nullish__none_ } from '@ctx-core/function'
export function estimate_read_time_html__new(_text:string|nullish) {
	return nullish__none_([_text], text=>{
		const minutes = Math.ceil(text!.split(' ').length / 200)
		return `READING TIME<span class="mx-2 text-gray-300">•</span>${minutes} minute${minutes > 1 ? 's' : ''}`
	})
}
