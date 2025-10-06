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

const mediaQueryListener = (e: MediaQueryListEvent) => {
	if (localStorage.theme === 'system') {
		if (e.matches) {
			document.documentElement.setAttribute('data-theme', 'dim')
		} else {
			document.documentElement.setAttribute('data-theme', 'winter')
		}
	}
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', mediaQueryListener)
initTheme()
