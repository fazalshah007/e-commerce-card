import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {

    const { id } = useParams()

    const [allProducts, setAllProducts] = useState(null)

    useEffect(() => {
        requestData()
    },[])

    const requestData = async () => {
      const res =  await axios.get(`https://fakestoreapi.com/products/${id}`)
        setAllProducts(res.data)
    }

    if (allProducts) {

        return (
            <>
            <div className='w-full h-screen grid place-items-center'>
                {/* wrapper card product  */}
        
                <div className='w-[70%] h-[80%] flex overflow-hidden rounded-2xl p-2 bg-slate-300'>
                    <div className='min-w-96'>
                        <img className='w-full h-full object-cover object-center rounded-2xl' src={ allProducts && allProducts.image} alt="" />
                    </div>
                    <div className='p-12'>
                        <h1 className='text-2xl font-bold uppercase mb-4'>{ allProducts && allProducts.title}</h1>
                        <h1 className='text-2xl text-purple-700'>Rs: <span className='text-4xl'>{ allProducts && allProducts.price}</span></h1>
                        <p className='mt-4 text-slate-600'>{ allProducts && allProducts.description}</p>
                        <button className='hover:cursor-pointer bg-purple-700 text-white px-6 py-2 mt-8 rounded'>Buy Now</button>
                    </div>
                </div>
            </div>
            </>
          )
        
    }else{
        return <>
        <h1 className='text-4xl font-bold uppercase text-center mt-48'>Loading ...</h1>
        </>
    }

 
}

export default Product