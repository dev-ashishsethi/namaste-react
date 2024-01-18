import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
  const { id } = useParams()
  const [singleProduct, setSingleProduct] = useState([]);
  
  useEffect(() => {
    fetchProduct()
  },[])

  async function fetchProduct(){
    const response = await fetch(`https://dummyjson.com/products/${id}`).then(res=>res.json())
    console.log('single product',response);
    setSingleProduct(response);
  }
  return (
    <div className='flex flex-wrap'>
      <div>
        <h1 className='text-2xl font-bold'>{singleProduct.title}</h1>
        <img src={singleProduct.thumbnail} alt="" />
      </div>
      <div>
        <h1 className='text-2xl font-bold'>{singleProduct.brand + ' ' + singleProduct.title}</h1>
      </div>
    </div>
  )
}

export default SingleProduct