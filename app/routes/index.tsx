import { createRoute } from 'honox/factory'
import { getEntries } from '../lib/entries'

export default createRoute(c => {
	const entries = getEntries()
	// console.log(entries)
	return c.render(
		<div className="py-8">
			<h1>コンテンツが入るよ</h1>
			<div className="mockup-code w-full">
				<pre>
					<code>const a = 'hoge'</code>
				</pre>
			</div>
		</div>,
	)
})
