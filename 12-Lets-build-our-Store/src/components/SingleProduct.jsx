import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addItems } from '../store/cartSlice'

const SingleProduct = () => {
  const { id } = useParams()
  const [singleProduct, setSingleProduct] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    fetchProduct()
  },[])

  async function fetchProduct(){
    const response = await fetch(`https://dummyjson.com/products/${id}`).then(res=>res.json())
    console.log('single product',response);
    setSingleProduct(response);
  }
  return (
    <div className='flex flex-col flex-wrap'>
      <div>
        <h1 className='text-2xl font-bold'>{singleProduct?.title}</h1>
        <img src={singleProduct?.thumbnail} alt="" />
      </div>
      <div className='p-4'>
        <h1 className='text-2xl font-bold'>{singleProduct?.brand + ' ' + singleProduct?.title}</h1>
        <button className='bg-slate-800 text-white p-2 basis-1' onClick={()=>dispatch(addItems(singleProduct))}>Add to Cart</button>
      </div>
    </div>
  )
}

export default SingleProduct