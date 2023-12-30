// src/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  // State to store the fetched products
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://rablo-backend-3rrt.onrender.com/api/products');
        // Set the fetched products in the state
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array to run the effect only once (on mount)

  return (
    <div className="container mx-auto p-4">
      <div className='container mx-auto flex items-center justify-between'>
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <Link to="/add"><button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-300 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">Add Product</button></Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded p-4 shadow-md transition duration-300 hover:bg-gray-100 hover:shadow-lg">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-800">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
