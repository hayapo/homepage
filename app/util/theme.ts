// https://github.com/azukiazusa1/sapper-blog-app/blob/main/app/src/utils/darkTheme.ts
export type Theme = 'system' | 'light' | 'dark'

export const initTheme = () => {
	if (!('theme' in localStorage) || localStorage.theme === 'system') {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.setAttribute('data-theme', 'dark')
		} else {
			document.documentElement.setAttribute('data-theme', 'light')
		}
		localStorage.theme = 'system'
	} else if (localStorage.theme === 'dark') {
		document.documentElement.setAttribute('data-theme', 'dark')
	} else {
		document.documentElement.setAttribute('data-theme', 'light')
	}
}

export const getTheme = (): Theme => {
	if (!('theme' in localStorage)) {
		return 'system'
	} else if (localStorage.theme === 'light') {
		return 'light'
	} else if (localStorage.theme === 'dark') {
		return 'dark'
	} else {
		return 'system'
	}
}

export const changeTheme = (value: Theme) => {
	switch (value) {
		case 'system':
			localStorage.setItem('theme', 'system')
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.setAttribute('data-theme', 'dark')
			} else {
				document.documentElement.setAttribute('data-theme', 'light')
			}
			break
		case 'light':
			localStorage.setItem('theme', 'light')
			document.documentElement.setAttribute('data-theme', 'light')
			break
		case 'dark':
			localStorage.setItem('theme', 'dark')
			document.documentElement.setAttribute('data-theme', 'dark')
			break
	}
}

export const mediaQueryListener = (e: MediaQueryListEvent) => {
	if (localStorage.theme === 'system') {
		if (e.matches) {
			document.documentElement.setAttribute('data-theme', 'dark')
		} else {
			document.documentElement.setAttribute('data-theme', 'light')
		}
	}
}
