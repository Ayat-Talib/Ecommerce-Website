'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ProductProps{
    _id: number,
    title: string,
    price: number,
    previousPrice:number,
    description: string,
    category: number,
    isNew: boolean,
    brand: string,
    quantity: number,
    image: string,
}

interface Props{
    products: ProductProps[];
}

const Products = ({products} : Props) => {
  return (
    <div className='max-w-screen-xl mx-auto grid 
    grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-10 px-4'>
      {products.map((item) =>
    <Link href={{pathname: '/singleproduct',query:{_id: item?._id}}}
     key={item._id}>
        <div className='border-[1px] border-gray-300 rounded-md overflow-hidden
        hover:border-gray-950 duration-300'>
            <Image src={item.image}
            width={500}
            height={500}
            alt='Product Image'
            className='w-full h-80 object-cover'
             />
             <div className='px-4 pb-2 text-sm flex flex-col gap-1'>
             
                <p className='text-gray-600'>{item?.title}</p>
                <p className='font-semibold'>${item?.price}</p>
                <div className='flex items-center justify-between'>
                <button>Add to cart</button>
                <button className='uppercase text-xs font-semibold hover:text-blue-700 duration-200 '>More Info</button>
             
              </div>
             </div> 
             </div>
    </Link>)}
    </div>
  )
}

export default Products

