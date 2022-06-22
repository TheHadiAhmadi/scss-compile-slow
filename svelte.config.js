import preprocess from 'svelte-preprocess'
import path from 'path'
import adapter from '@sveltejs/adapter-auto'

/**
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
	preprocess: preprocess({
		scss: {
			importer(url) {
				console.log(url)
				if (url[0] === '~') {
					url = path.resolve('node_modules', url.substr(1))
				}
				console.log('returning: ', url)
				return { file: url }
			},
		},
	}),

	kit: {
		adapter: adapter(),
	},
}

export default config
