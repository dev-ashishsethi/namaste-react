import React from 'react'

const withDiscountPercentage = (Component) => {
  return (props)=>(
    <div>
      <label>{ props.details?.discountPercentage }% OFF</label>
      <Component {...props} />
      </div>
  )
}

export default withDiscountPercentage