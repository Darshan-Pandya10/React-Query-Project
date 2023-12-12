import { useParams } from 'react-router-dom';
import { useMutation, useQuery , useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

function SingleProduct() {
    const { productid } = useParams();
    const queryClient = useQueryClient()


    const getSingleProduct = async () => {
        const response = await axios.get(`https://dummyjson.com/products/${productid}`);
        // console.log(response.data)
        return response.data;

    };

    const { isPending, error, data } = useQuery({
        queryKey: ['singleProduct', productid],
        queryFn: getSingleProduct,
        staleTime: 10000,
    });

    // console.log(data)

    // mutation 


    const updateProductName = async (newTitle) => {
        console.log(newTitle)
        const response = await axios.put(`https://dummyjson.com/products/${productid}`, { title: newTitle.title });
        console.log(response)
        return response.data;
    };

  const mutation = useMutation({
        mutationFn : updateProductName,
        onSuccess: () => {
            console.log('Mutation Successful')
            queryClient.invalidateQueries(['singleProduct', productid])
        },
        staleTime : 10000
    })

  
    // Dummy review data with only positive reviews
    const dummyReviews = [
        { id: 1, comment: 'Great product, exceeded my expectations!', rating: 5 },
        { id: 2, comment: 'Excellent quality, worth the price.', rating: 4 },
        { id: 3, comment: 'Fantastic purchase, highly recommended.', rating: 5 },
    ];

    // Dummy variant data
    const dummyVariants = [
        { id: 1, name: 'Color', price: 10 },
        { id: 2, name: 'Size', price: 15 },
        // Add more variants as needed
    ];

    if (isPending) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading product</div>;
    }

    return (
        <div className="singleProduct max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-10">
            <div className="grid grid-cols-2">
                <div className="p-6">
                    <h1 className="font-bold text-3xl mb-2">{data.title}</h1>
                    <p className="text-gray-700 text-lg mb-4">{data.description}</p>
                    <div className="mb-4">
                        <span className="text-2xl text-gray-900">${data.price}</span>
                        <span className="inline-block bg-teal-200 text-teal-800 text-xs font-semibold px-2 py-1 ml-4 uppercase rounded-full">
                            {data.rating} Stars
                        </span>
                    </div>
                    <div className="mb-4">
                        <h2 className="font-bold text-lg mb-2">Variants</h2>
                        <ul>
                            {dummyVariants.map((variant) => (
                                <li key={variant.id}>
                                    {variant.name}: ${variant.price}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h2 className="font-bold text-lg mb-2">Product Details</h2>
                        <ul>
                            <li>Brand: {data.brand}</li>
                            <li>Category: {data.category}</li>
                            {/* Add more details as needed */}
                        </ul>
                    </div>
                    <div className="mb-4 flex items-center">
                        <label className="block text-sm font-medium text-gray-700">Quantity:</label>
                        <input
                            type="number"
                            className="ml-2 p-2 border rounded-md w-16 focus:outline-none focus:ring focus:border-blue-300"
                            defaultValue="1"
                            min="1"
                        />
                    </div>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">
                        Add to Cart
                    </button>
                </div>
                <div className="flex items-center justify-center flex-col">
                    <img className="w-full h-auto object-cover" src={data.thumbnail} alt={data.title} />
                    <button className="bg-yellow-500 m-4 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full" 
             onClick={() => mutation.mutate({title : 'motorola g 60'})}>
                Update Product Name
            </button>
                </div>
            </div>
            <div className="px-6 py-4">
                <h2 className="font-bold text-lg mb-2">Customer Reviews</h2>
                <ul>
                    {dummyReviews.map((review) => (
                        <li key={review.id} className="mb-2">
                            {review.comment} - {review.rating} Stars
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    );
}

export default SingleProduct;
