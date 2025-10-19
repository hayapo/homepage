import { initTheme, mediaQueryListener } from "./util/theme"

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', mediaQueryListener)
initTheme()
