// https://github.com/azukiazusa1/sapper-blog-app/blob/main/app/src/utils/darkTheme.ts
export type Theme = 'system' | 'winter' | 'dim'

export const initTheme = () => {
	if (!('theme' in localStorage) || localStorage.theme === 'system') {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.setAttribute('data-theme', 'dim')
		} else {
			document.documentElement.setAttribute('data-theme', 'winter')
		}
		localStorage.theme = 'system'
	} else if (localStorage.theme === 'dim') {
		document.documentElement.setAttribute('data-theme', 'dim')
	} else {
		document.documentElement.setAttribute('data-theme', 'winter')
	}
}

export const getTheme = (): Theme => {
	if (!('theme' in localStorage)) {
		return 'system'
	} else if (localStorage.theme === 'winter') {
		return 'winter'
	} else if (localStorage.theme === 'dim') {
		return 'dim'
	} else {
		return 'system'
	}
}

export const changeTheme = (value: Theme) => {
	switch (value) {
		case 'system':
			localStorage.setItem('theme', 'system')
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.setAttribute('data-theme', 'dim')
			} else {
				document.documentElement.setAttribute('data-theme', 'winter')
			}
			break
		case 'winter':
			localStorage.setItem('theme', 'winter')
			document.documentElement.setAttribute('data-theme', 'winter')
			break
		case 'dim':
			localStorage.setItem('theme', 'dim')
			document.documentElement.setAttribute('data-theme', 'dim')
			break
	}
}
