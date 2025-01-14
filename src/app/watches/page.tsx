import Products from '@/components/Products'
import Title from '@/components/Title'

const getData = async() => {
  const res = await fetch("https://jsonserver.reactbd.com/watch")
  if (!res.ok){
    throw new Error ("Failed to Fetch Data");
  }
  return res.json();
};
const Watches = async () => {
  const products = await getData();
  return (
    <div>
      <Title title='Find Your Dream Watch' />
      <Products products={products} />
    </div>
  )
}

export default Watches

