import { Link } from "react-router-dom"
import { useUser } from "../context/UserContext"
import { useSelector } from "react-redux"

export const NavBar = () => {
	const { userName } = useUser()
	const  items  = useSelector(state => state.cart.items)
	console.log('items',items);
	return <nav className='navbar'>
		<Link to={'/'}>
			<img
				src='https://i.ibb.co/2hvzt4K/attachment-98157495-e1571110518414.png'
				alt='Logo'
				className='nav-logo'
			/>
		</Link>
		<div>
			<ul className='nav-list'>
				<Link to={'/'}>Home</Link>
				<Link to={'/about'}>About Us</Link>
				<Link to={'/contact'}>Contact Us</Link >
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
					{ items&& items.length}
				</li>
				<li>
					<img
						src='https://api.iconify.design/material-symbols:account-circle-full.svg'
						alt='account-icon'
						className='nav-icon'
					/>
				</li>
				<span>{ userName}</span>
			</ul>
		</div>
	</nav>
}
