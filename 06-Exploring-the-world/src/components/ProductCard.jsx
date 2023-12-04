export const ProductCard = ({ details }) => {
	return (
		<div>
			<img
				className='product-img'
				src={
					'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
					details.info.cloudinaryImageId
				}
				alt={details.info.name + ' image'}
			/>
			<h4>{details.info.name}</h4>
			<p>{details.info.avgRatingString}</p>
			<p>{details.info.sla.deliveryTime + ' mins'}</p>
		</div>
	)
}
