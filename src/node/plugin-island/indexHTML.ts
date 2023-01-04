import type { Plugin } from 'vite'
import { readFile } from 'fs/promises'
import { CLIENT_ENTRY_PATH } from '../constants'
export function pluginIndexHtml(): Plugin {
  return {
    name: 'island:index-html',
    transformIndexHtml(html) {
      return {
        html,
        tags: [
          {
            tag: 'script',
            attrs: {
              type: 'module',
              src: `/@fs/${CLIENT_ENTRY_PATH}`,
            },
            injectTo: 'body',
          },
        ],
      }
    },
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          // 1. 读取 template.html 内容
          let content = await readFile(
            'index.html',
            'utf-8'
          )
          // 热更新
          content = await server.transformIndexHtml(
            req.url,
            content,
            req.originalUrl
          )
          // 2. 响应 html 浏览器
          res.setHeader('Content-Type', 'text/html')

          res.end(content)
        })
      }
    },
  }
}
