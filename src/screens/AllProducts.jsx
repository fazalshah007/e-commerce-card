import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AllProducts = () => {

    const navigate = useNavigate()

    const [allProducts, setAllProducts] = useState(null)

    useEffect(() => {
        requestData()
    },[])

    const requestData = async () => {
      const res =  await axios.get(`https://fakestoreapi.com/products`)
        setAllProducts(res.data)
    }

    
    if(allProducts){

        return (
            <>
            <div className=' bg-gray-200'>
        
            <h1 className='text-3xl text-center p-8 font-bold uppercase'>All Product</h1>
            <div className='w-full min-h-screen p-4 grid grid-cols-3 place-items-center gap-4'>
        
                {/* wrapper div card  */}
             
             {
                allProducts && allProducts.map((e,i) => {
                    return (
                    
                <div key={e.id} className='bg-white w-[20rem] p-4 rounded-2xl'>
                    <div className='w-full h-96 rounded-2xl overflow-hidden'>
                        <img className='w-full h-full object-cover object-center' width={400} src={e.image} alt="" />
                    </div>
                    <div className='flex justify-between p-2'>
                        <h1 className='text-xl font-bold'>{e.title.slice(0,10)}</h1>
                        <h1 className='text-xl font-bold'>Rs: {e.price} </h1>
                    </div>
                    <p className='text-[13px] text-gray-500 p-2'>{e.description.slice(0,80)}</p>
                    <div className='w-full'>
                    <button onClick={() => { navigate(`/product/${e.id}`) }} className='w-full hover:cursor-pointer inline-block mb-1 rounded-xl px-4 py-1 font-bold text-[13px] uppercase bg-gray-300' >View Card</button>
                    </div>
                </div>
                )
        
                })
             }
            
            </div>
            </div>
            </>
          )

    } else {
        return <>
        <h1 className='text-4xl font-bold uppercase text-center mt-48'>Loading ...</h1>
        </>
    }

  
}

export default AllProducts