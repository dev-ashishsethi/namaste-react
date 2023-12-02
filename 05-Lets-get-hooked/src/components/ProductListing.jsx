import { useState } from 'react'
import data from '../data.json'
import { ProductCard } from './ProductCard'

export const ProductListing = () => {
	const [filterdData, setFilteredData] = useState(data.restaurants)

	function handleFilter() {
		setFilteredData((state) =>
			state.filter((product) => Number(product.info.rating.rating_text) >= 4),
		)
	}

	return (
		<>
			<button onClick={handleFilter}>Filter based on Rating</button>
			<div className='products'>
				{filterdData?.length > 0 &&
					filterdData?.map((res) => <ProductCard details={res} />)}
			</div>
		</>
	)
}
