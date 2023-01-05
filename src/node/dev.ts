import { createServer } from 'vite'
import { pluginIndexHtml } from './plugin-island/indexHTML'
import pluginReact from '@vitejs/plugin-react'

export function createDevServer(root: string) {
  return createServer({
    root,
    plugins: [pluginIndexHtml(), pluginReact()],
  })
}
