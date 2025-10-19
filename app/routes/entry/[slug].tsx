import { ssgParams } from 'hono/ssg'
import { createRoute } from 'honox/factory'
import { getEntries, getEntryByEntryName } from '../../lib/entries'

export default createRoute(
	ssgParams(() =>
		getEntries().map(entry => ({
			slug: entry.id,
		})),
	),
	async c => {
		const slug = c.req.param('slug')
		const entry = getEntryByEntryName(slug)
		if (!entry) {
			return c.render(<h2>記事が見つからないよ &gt;&lt; </h2>)
		}
		return c.render(<div class="max-w-4xl mx-auto">{entry.Component({})}</div>)
	},
)
