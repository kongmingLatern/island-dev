import { build as viteBuild } from 'vite'
import {
  CLIENT_ENTRY_PATH,
  SERVER_ENTRY_PATH,
} from './constants'
export async function bundle(root: string) {
  console.log(CLIENT_ENTRY_PATH, SERVER_ENTRY_PATH)

  try {
    const clientBuild = async () => {
      return viteBuild({
        mode: 'production',
        root,
        build: {
          outDir: 'build',
          rollupOptions: {
            input: CLIENT_ENTRY_PATH,
            output: {
              format: 'esm',
            },
          },
        },
      })
    }
    const serverBuild = async () => {
      return viteBuild({
        mode: 'production',
        root,
        build: {
          outDir: '.temp',
          rollupOptions: {
            input: SERVER_ENTRY_PATH,
            output: {
              format: 'cjs',
            },
          },
        },
      })
    }
    await clientBuild()
    await serverBuild()
  } catch (e) {}
}
export async function build(root: string = process.cwd()) {
  await bundle(root)
}
