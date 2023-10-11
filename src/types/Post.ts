import { z } from 'zod'
import type { ZodType } from 'zod/lib/types'
export const Post__schema = z.object({
	title: z.string(),
	description: z.string(),
	// Transform string to Date object
	pub_date: z.coerce.date(),
	updated_date: z.coerce.date().optional(),
	hero_image: z.string().optional(),
} as {
	[k in keyof Post]: ZodType<Post[k]>
})
export interface Post {
	title:string
	description:string
	pub_date:Date
	updated_date?:Date
	hero_image?:string
}
