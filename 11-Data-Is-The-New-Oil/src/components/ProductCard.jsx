export const ProductCard = ({ details }) => {
	return (
		<div>
			<img
				className='product-img'
				src={
					details.thumbnail
				}
				alt={details.title + ' image'}
			/>
			<h4>{details.title}</h4>
			<p>{details.rating}</p>
		</div>
	)
}
