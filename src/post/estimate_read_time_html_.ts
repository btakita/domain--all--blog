export function estimate_read_time_html_(text:string) {
	const minutes = Math.ceil(text.split(' ').length / 200)
	return `READING TIME<span class="mx-2 text-gray-300">•</span>${minutes} minute${minutes > 1 ? 's' : ''}`
}
