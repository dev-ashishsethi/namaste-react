import { useEffect, useState } from 'react'
import data from '../data.json'
import { ProductCard } from './ProductCard'
import ShimmerUI from './ShimmerUI'
import { useOnlineStatus } from '../utils/useOnlineStatus'

export const ProductListing = () => {
	const [restaurantData, setRestaurantData] = useState([])
	const [filterdData, setFilteredData] = useState([])
	const [search, setSearch] = useState('')
	const onlineStatus = useOnlineStatus()
	function handleFilter(type) {
		switch (type) {
			case 'search':
				setFilteredData(
					restaurantData?.filter((data) => data?.info?.name?.includes(search)),
					)
					break
					case 'rating':
						setFilteredData(
							filterdData.filter(
								(product) => Number(product.info.avgRatingString) >= 4,
								),
								)

								break
								default:
									break
								}
	}

	async function fetchData() {
		const response = await fetch(
			'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',
			)
			.then((res) => res.json())
			.catch((e) => console.error('data fetching error', e.target.value))
			console.log(
				'res',
				response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
				)
				setRestaurantData(
					response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
					)
				setFilteredData(
						response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
					)
			}
					
			function searchOnChange(searchKeyword) {
						setSearch(searchKeyword)
	}
	useEffect(() => {
			fetchData()
	}, [])
					
	if(!onlineStatus) return <h1>you are offline</h1>
	return (
		<>
			<div>
				<input
					type='text'
					placeholder='Search for a Restaurant Here'
					value={search}
					onChange={(e) => searchOnChange(e.target.value)}
				/>
				<button onClick={() => handleFilter('search')}>Search</button>
			</div>
			<button onClick={() => handleFilter('rating')}>
				Filter based on Rating
			</button>
			<div className='products'>
				{filterdData?.length > 0 && (
					filterdData?.map((res) => <ProductCard details={res} />)
				) }
			</div>
		</>
	)
}
