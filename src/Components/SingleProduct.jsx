import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function SingleProduct() {
    const  {productid} = useParams();
    console.log('Product ID:', productid);

    const getSingleProduct = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${productid}`);
            console.log('API Response:', response);
            return response.data;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    };

    const { isLoading, error, data } = useQuery(['singleProduct', productid], getSingleProduct, {
        staleTime: 10000,
    });

    console.log('Query Data:', data);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading product</div>;
    }

    return (
        <div className='singleProduct'>
            <h2>{data.title}</h2>
            {/* Display other product details as needed */}
        </div>
    );
}

export default SingleProduct;
