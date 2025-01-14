import Products from '@/components/Products';
import React from 'react'

const getData = async() => {
  const res = await fetch("https://jsonserver.reactbd.com/phone")
  if (!res.ok){
    throw new Error ("Failed to fetch data");
  }
  return res.json();
}
export default async function Home() {
  const products = await getData();
 
  return (
    <main>
      <h1 className='text-black text-3xl font-bold text-center pt-10 pb-2'>Get Your Favourite Phone</h1>
<Products products={products} />
    </main>
  );
}

