import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import React from 'react';
import Image from 'next/image';
import Footer from "../components/Footer";

import img1 from "../components/images/card1.png";
import img2 from "../components/images/card2.png";
import img3 from "../components/images/card3.png";
import img4 from "../components/images/pic41.png";
import img5 from "../components/images/pic42.png";
import img6 from "../components/images/cardonly.png";
import img7 from "../components/images/evo.png";
import img8 from "../components/images/bio.png";
import img9 from "../components/images/chair.png";
import img10 from "../components/images/cryp.png";
import img11 from "../components/images/deo.png";
import img12 from "../components/images/zool.png";
import img13 from "../components/images/long.png";





const products = [
  { id: 1, name: 'Product 1', price: 10.99, image: img1 },
  { id: 2, name: 'Product 2', price: 20.99, image: img2 },
  { id: 3, name: 'Product 3', price: 30.99, image: img3 },
  { id: 4, name: 'Product 4', price: 40.99, image: img4 },
  { id: 5, name: 'Product 5', price: 50.99, image: img5 },
  { id: 6, name: 'Product 6', price: 60.99, image: img6 },
  { id: 7, name: 'Product 7', price: 70.99, image: img7 },
  { id: 8, name: 'Product 8', price: 80.99, image: img8 },
  { id: 9, name: 'Product 9', price: 90.99, image: img9 },
  { id: 10, name: 'Product 10', price: 100.99, image: img10 },
  { id: 11, name: 'Product 11', price: 110.99, image: img11 },
  { id: 12, name: 'Product 12', price: 120.99, image: img12 },
];

const Products = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold ml-8 mt-10">Shop</h1>

      <div className="flex justify-center mt-8 space-x-4 flex-wrap">
        {products.slice(0, 4).map((product) => (
          <div key={product.id} className="w-60 h-80 bg-white shadow-lg rounded-lg mb-8">
            <Image
              src={product.image} // Dynamic image path
              alt={product.name}
              className="h-full w-full object-cover rounded-t-lg"
              width={240}
              height={240}
            />
          </div>
        ))}
      </div>

      {/* Showing results and buttons */}
      
    

      <div className="mt-10">
        <h2 className="text-3xl font-bold text-center mb-6">More Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={product.image} // Dynamic image path
                alt={product.name}
                className="w-full h-48 object-cover"
                width={240}
                height={240}
              />
              <footer className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600 mt-2">${product.price}</p>
                <div className="flex justify-center gap-2 mt-2">
                  <button className="w-6 h-6 bg-red-500 rounded-full border border-gray-300 focus:ring-2 ring-red-400" title="Red"></button>
                  <button className="w-6 h-6 bg-blue-500 rounded-full border border-gray-300 focus:ring-2 ring-blue-400" title="Blue"></button>
                  <button className="w-6 h-6 bg-green-500 rounded-full border border-gray-300 focus:ring-2 ring-green-400" title="Green"></button>
                </div>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;


