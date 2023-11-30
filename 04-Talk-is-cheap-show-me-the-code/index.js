import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import data from './data.json'
const NavBar = () => (
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

const Search = () => <h3>Search</h3>
const ProductCard = ({ details }) => {
	return (
		<div>
			<img
				className='product-img'
				src={details.info.image.url}
				alt={details.info.name + ' image'}
			/>
			<h4>{details.info.name}</h4>
			<p>{details.info.rating.rating_text}</p>
			<p>{details.order.deliveryTime}</p>
		</div>
	)
}
const ProductListing = () => {
	console.log(data)
	return (
		<div className='products'>
			{data.restaurants.map((res) => (
				<ProductCard details={res} />
			))}
		</div>
	)
}
const HeadingComponent = () => (
	<div>
		<NavBar />
		<Search />
		<ProductListing />
	</div>
)
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<HeadingComponent />)
