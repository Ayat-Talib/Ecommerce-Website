import Products from "@/components/Products";
import Title from "@/components/Title";

const getData =async () => {
  const res = await fetch('https://jsonserver.reactbd.com/accessories')
   if (!res.ok){
    throw new Error ("Failed to fetch Data")
   }
   return res.json();
}

const Accessories =async () => {
  const products = await getData();
  return (
    <div>
      <Title title="All Accessories You need" />
      <Products products={products} />
    </div>
  )
}

export default Accessories


