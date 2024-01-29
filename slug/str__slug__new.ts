import { slug } from 'github-slugger'
export function str__slug__new(str:string) {
	return slug(str)
}
