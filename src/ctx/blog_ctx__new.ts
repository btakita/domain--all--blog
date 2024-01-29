import { window__ctx__set } from 'ctx-core/dom'
import { ctx_ } from 'ctx-core/be'
export function blog_ctx__new() {
	const ctx = ctx_()
	window__ctx__set(ctx)
	return ctx
}
