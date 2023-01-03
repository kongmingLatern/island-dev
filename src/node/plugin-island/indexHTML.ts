import type { Plugin } from 'vite'
import { readFile } from 'fs/promises'
export function pluginIndexHtml(): Plugin {
  return {
    name: 'island:index-html',
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          // 1. 读取 template.html 内容
          const content = await readFile(
            'template.html',
            'utf-8'
          )
          // 2. 响应 html 浏览器
          res.setHeader('Content-Type', 'text/html')

          res.end(content)
        })
      }
    },
  }
}
