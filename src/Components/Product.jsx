import { Link } from "react-router-dom";


function Product({ product }) {
  const { title, thumbnail, description, price, rating, brand, category } = product;

  

  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-8 my-10 cursor-pointer">
      <img className="w-full h-48 object-cover" src={thumbnail} alt={title} />
      <div className="px-6 py-4">
        <Link to={`${product.id}`}><h1 className="font-bold text-xl mb-2">{title}</h1></Link>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {category}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          {brand}
        </span>
      </div>
      <div className="px-6 py-4">
        <span className="text-xl text-gray-900">${price}</span>
      </div>
      <div className="px-6 pb-4">
        <span className="inline-block bg-teal-200 text-teal-800 text-xs font-semibold px-2 py-1 uppercase rounded-full">
          {rating} Stars
        </span>
      </div>
      <div className="px-6 pb-4">
        {/* <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full">
          Add to Cart
        </button> */}
      </div>
    </div>
  );
}

export default Product;
