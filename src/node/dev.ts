import { createServer } from 'vite'
import { pluginIndexHtml } from './plugin-island/indexHTML'

export function createDevServer(root = process.cwd()) {
  return createServer({
    root,
    plugins: [pluginIndexHtml()],
  })
}
