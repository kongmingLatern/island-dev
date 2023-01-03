import { createServer } from 'vite'

export function createDevServer(root = process.cwd()) {
  return createServer({
    root,
  })
}
