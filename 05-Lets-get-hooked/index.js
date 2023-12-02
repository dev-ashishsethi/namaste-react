import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { ProductListing } from './src/components/ProductListing'
import { Search } from './src/components/Search'
import { NavBar } from './src/components/NavBar'

const HeadingComponent = () => (
	<div>
		<NavBar />
		<Search />
		<ProductListing />
	</div>
)
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<HeadingComponent />)
