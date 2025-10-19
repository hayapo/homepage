import { createRoute } from 'honox/factory'

export default createRoute(c => {
	return c.render(
		<div className="py-8">
			<h1>トップページだよ</h1>
		</div>,
	)
})
