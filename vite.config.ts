import build from '@hono/vite-build/cloudflare-workers'
import adapter from '@hono/vite-dev-server/cloudflare'
import ssg from '@hono/vite-ssg'
import mdx from '@mdx-js/rollup'
import tailwindcss from '@tailwindcss/vite'
import honox from 'honox/vite'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkBreaks from 'remark-breaks'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkRehype from 'remark-rehype'
import { defineConfig } from 'vite'

const entry = './app/server.ts'

export default defineConfig({
	plugins: [
		honox({
			devServer: { adapter },
			client: { input: ['/app/client.ts', '/app/style.css'] },
		}),
		ssg({ entry }),
		mdx({
			jsxImportSource: 'hono/jsx',
			remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm, remarkBreaks, remarkRehype],
			rehypePlugins: [[rehypePrettyCode, { theme: 'dark-plus' }]],
		}),
		tailwindcss(),
		build(),
	],
})
