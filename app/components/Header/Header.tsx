import { ThemeSwitcher } from './_ThemeSwitcher.island'

export const Header = () => {
	return (
		<header className="navbar bg-base-100 shadow-sm">
			<div class="flex mx-auto w-2xl lg:w-lg">
				<div className="flex-1 align-middle">
					<a href="/" className="btn btn-ghost text-xl">
						hayapo blog
					</a>
				</div>
				<div className="flex-none">
					<ThemeSwitcher />
				</div>
			</div>
		</header>
	)
}
