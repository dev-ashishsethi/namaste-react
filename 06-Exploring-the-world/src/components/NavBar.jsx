export const NavBar = () => (
	<nav className='navbar'>
		<img
			src='https://i.ibb.co/2hvzt4K/attachment-98157495-e1571110518414.png'
			alt='Logo'
			className='nav-logo'
		/>
		<div>
			<ul className='nav-list'>
				<li>Home</li>
				<li>About Us</li>
				<li>Contact Us</li>
			</ul>
		</div>

		<div>
			<ul className='nav-list'>
				<li>
					<img
						src='https://api.iconify.design/material-symbols-light:shopping-cart.svg'
						alt='cart-icon'
						className='nav-icon'
					/>
				</li>
				<li>
					<img
						src='https://api.iconify.design/material-symbols:account-circle-full.svg'
						alt='account-icon'
						className='nav-icon'
					/>
				</li>
			</ul>
		</div>
	</nav>
)
