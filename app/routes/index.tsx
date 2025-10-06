import { createRoute } from 'honox/factory'
import { getEntries } from '../lib/entries'

export default createRoute(c => {
	const entries = getEntries()
	// console.log(entries)
	return c.render(
		<div className="py-8 text-center">
			<h1>コンテンツが入るよ</h1>
		</div>,
	)
})
