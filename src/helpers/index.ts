import Products from "@/components/Products";

// const getData = async() => {
//     const res = await fetch("https://jsonserver.reactbd.com/phone")
//     if (!res.ok){
//       throw new Error ("Failed to fetch data");
//     }
//     return res.json();
//   }

//   export const getSingleProduct = async(_id:number) => {
//     const item = await getData()
//     const singleItem = await item.find((Products: any) => Products._id === _id) 
//     return singleItem;
//   }

const getData = async() => {
  try {
    const[phonesRes, phoneCasesRes,watchRes, AccessoryRes] = await Promise.all([
      fetch("https://jsonserver.reactbd.com/phone"),
      fetch("https://jsonserver.reactbd.com/phonecase"),
      fetch("https://jsonserver.reactbd.com/watch"),
      fetch ("https://jsonserver.reactbd.com/accessories")
  ]);

  if (!phonesRes.ok || !phoneCasesRes.ok || !watchRes.ok || !AccessoryRes.ok) {
      throw new Error("Failed to fetch data from one or both endpoints");
  }

  const phones = await phonesRes.json();
  const phoneCases = await phoneCasesRes.json();
  const watch = await watchRes.json();
  const accessories = await AccessoryRes.json();
  
  return [...phones, ...phoneCases, ...watch, ...accessories]; // Merging both datasets
} catch (error) {
  console.error("Error fetching data:", error);
  return [];  // Return an empty array in case of an error
}
};

export const getSingleProduct = async (_id: number) => {
  try {
      const items = await getData();
      const singleItem = items.find((product: { _id: number }) => product._id === _id);
      if (!singleItem) {
          throw new Error(`Product with ID ${_id} not found`);
      }
      return singleItem;
  } catch (error) {
      console.error("Error fetching single product:", error);
      return null;
  }
};
