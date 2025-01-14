import Products from '@/components/Products';
import Title from '@/components/Title'

const getData = async() => {
  const res = await fetch("https://jsonserver.reactbd.com/phonecase")
  if (!res.ok){
    throw new Error ("Failed to fetch data");
  }
  return res.json();
};

const PhoneCase = async () => {
  const products = await getData();
  return (
    <div>
      <Title title='Make your Phone looks cool with beautiful Phone Case' />
      <Products products={products} />
      </div>
  )
}

export default PhoneCase

