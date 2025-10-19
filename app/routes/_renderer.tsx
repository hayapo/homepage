import { css, Style } from 'hono/css'
import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, Script } from 'honox/server'
import { Header } from '../components/Header/Header'

export default jsxRenderer(({ children }) => {
	const bodyCss = css`
	:-hono-global {
		body {
			min-height: 100vh;
		}
	}
	`

	return (
		<html lang="ja">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
				<Script src="/app/theme.ts" />
				<Link href="/app/style.css" rel="stylesheet" />
				<Style />
				<Script src="/app/client.ts" async />
			</head>
			<body class={bodyCss}>
				<Header />
				{children}
			</body>
		</html>
	)
})
