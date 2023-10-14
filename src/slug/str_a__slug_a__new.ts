import { str__slug__new } from './str__slug__new'
export function str_a__slug_a__new(str_a:string[]) {
	return str_a.map(str=>str__slug__new(str))
}
