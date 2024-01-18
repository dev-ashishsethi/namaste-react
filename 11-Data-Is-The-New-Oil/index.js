import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { ProductListing } from './src/components/ProductListing'
import { Search } from './src/components/Search'
import { NavBar } from './src/components/NavBar'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import About from './src/components/About'
import SingleProduct from './src/components/SingleProduct'

const HeadingComponent = () => (
	<div>
		<NavBar />
		<Outlet />
	</div>
)

const router = createBrowserRouter([
	{
		path: '/',
		element: <HeadingComponent />,
		children: [
			{
				path: '/',
				element: <ProductListing />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/product/:id',
				element: <SingleProduct />,
			},
		],
	},
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={router} />)