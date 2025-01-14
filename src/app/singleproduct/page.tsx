// import { getSingleProduct } from '@/helpers';
// import Image from 'next/image';

// type Props = {
//     searchParams: { [key: string]: string | string[] | undefined }
// }

// const SingleProduct = async ({ searchParams }: Props) => {
//     const _idString = searchParams?._id;
//     const _id = _idString? Number(_idString): NaN;
//     const product = await getSingleProduct(_id);

//     return (
//         <div className='pt-10 py-20 max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-10 p-6'>
//             <Image 
//                 src={product?.image} 
//                 alt= 'Product image'
//                 width={500}
//                 height={500}
//                 className='object-cover rounded-lg shadow-lg'
//             />
//             <div className='flex flex-col gap-4'>
//                 <p className='text-2xl font-semibold'>{product?.title}</p>
//                 <p className='text-gray-700'>{product?.description}</p>
//                 <p className='text-lg font-semibold text-green-600'>Price: ${product?.price}</p>
//                 <p className='text-sm text-gray-500'>Category: {product?.category}</p>
//                 {product?.isNew && <p className='text-sm font-medium text-blue-500'>New Item</p>}
//             </div>
//         </div>
//     )
// }

// export default SingleProduct;

import { getSingleProduct } from '@/helpers';
import Image from 'next/image';

type Props = {
    searchParams: Record<string, string>;
};

const SingleProduct = async ({ searchParams }: Props) => {
    // Ensure _id is handled correctly
    const _idString = searchParams["_id"];
    const _id = Number(_idString);

    // Validate _id before fetching data
    if (isNaN(_id)) {
        return <p className="text-red-500">Invalid Product ID</p>;
    }

    try {
        const product = await getSingleProduct(_id);

        if (!product) {
            return <p className="text-red-500">Product not found</p>;
        }

        return (
            <div className='pt-10 py-20 max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-10 p-6'>
                <Image 
                    src={product.image} 
                    alt='Product image'
                    width={500}
                    height={500}
                    className='object-cover rounded-lg shadow-lg'
                />
                <div className='flex flex-col gap-4'>
                    <p className='text-2xl font-semibold'>{product.title}</p>
                    <p className='text-gray-700'>{product.description}</p>
                    <p className='text-lg font-semibold text-green-600'>Price: ${product.price}</p>
                    <p className='text-sm text-gray-500'>Category: {product.category}</p>
                    {product.isNew && <p className='text-sm font-medium text-blue-500'>New Item</p>}
                </div>
            </div>
        )
    } catch (error) {
        console.error("Error fetching product:", error);
        return <p className="text-red-500">Error loading product. Please try again later.</p>;
    }
}

export default SingleProduct;
