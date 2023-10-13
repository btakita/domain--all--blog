import { window__ctx__set } from '@ctx-core/dom'
import { ctx_ } from '@ctx-core/object'
export function blog__ctx__new() {
  const ctx = ctx_()
  window__ctx__set(ctx)
  return ctx
}
