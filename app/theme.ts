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

const mediaQueryListener = (e: MediaQueryListEvent) => {
	if (localStorage.theme === 'system') {
		if (e.matches) {
			document.documentElement.setAttribute('data-theme', 'dark')
		} else {
			document.documentElement.setAttribute('data-theme', 'light')
		}
	}
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', mediaQueryListener)
initTheme()
