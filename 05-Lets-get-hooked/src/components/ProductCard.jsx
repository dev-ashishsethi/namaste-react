export const ProductCard = ({ details }) => {
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
