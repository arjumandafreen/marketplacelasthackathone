"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

import couples from "../components/images/carrot.png";
import img9 from "../components/images/banner.jpg";
import img10 from "../components/images/gogo.png";
import Link from "next/link";
import { Products } from "../../../types/products";

const Herosection = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Products[] = await client.fetch(allProducts);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const handleClick = (product: Products) => {
    console.log("Product added to cart:", product);
    setSuccessMessage("Your product has been added to the cart successfully!");
    setTimeout(() => setSuccessMessage(null), 3000); // Clear message after 3 seconds
  };

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] sm:h-[716px] bg-cover">
        <div className="relative w-full h-full">
          <Image src={img9} alt="Banner" fill style={{ objectFit: "cover" }} />
          <div className="absolute inset-0 opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start p-8 sm:p-12 text-white">
            <div className="w-full sm:w-[599px] text-center sm:text-left">
              <h5 className="font-bold text-[14px] sm:text-[16px]">SUMMER 2020</h5>
              <h1 className="font-bold text-[30px] sm:text-[58px]">NEW COLLECTION</h1>
              <h4 className="text-[14px] sm:text-[20px] sm:w-[376px]">We understand the behavior of large objects, but things at a smaller scale behave differently.</h4>
              <br />
              <button className="w-[60%] sm:w-[170px] bg-[#2DC071] py-[12px] px-[30px] sm:px-[40px] rounded text-white">Shop Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8 text-red-800">Featured Products</h2>

        {products.length > 0 ? (
          <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">Our Products</h1>
            <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product._id} className="bg-white rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
                  <div className="relative w-full h-56">
                    {product.image && (
                      <Image
                        src={urlFor(product.image).url()}
                        alt={product.name}
                        priority={true}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "cover", borderRadius: "0.5rem" }}
                      />
                    )}
                  </div>
                  <div className="p-4 text-center space-y-2">
                    <h2 className="text-xl font-semibold text-gray-800 truncate">{product.name}</h2>
                    <p className="text-green-600 text-lg font-bold">${product.price}</p>
                    {product.discountPercent > 0 && (
                      <p className="text-red-500 text-sm font-semibold">{product.discountPercent}% Off</p>
                    )}
                    <Link href={`/product/${product.slugCurrent}`}>
                      <button className="mt-4 mb-2 bg-purple-600 text-white text-xs font-medium py-1 px-3 rounded hover:bg-purple-700">
                        View Details
                      </button>
                    </Link>
                    <button
                      onClick={() => handleClick(product)}
                      className="mt-4 mb-2 bg-purple-600 text-white text-xs font-medium py-1 px-3 rounded hover:bg-purple-700"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center">Loading products...</p>
        )}
      </section>

      {/* Success Message */}
      {successMessage && (
        <div className="fixed top-0 left-0 right-0 bg-green-500 text-white p-4 text-center">
          {successMessage}
        </div>
      )}

      {/* Other Sections */}
      <div className="w-full bg-[#23856D] py-10 lg:py-20">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-12">
          <div className="flex-1 text-center lg:text-left">
            <h4 className="text-white">SUMMER 2024</h4>
            <h1 className="text-[32px] lg:text-[58px] font-bold text-white">Luma Elite Product</h1>
            <p className="text-white">Uncover the excellence of our products</p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
              <h3 className="text-white">$16.48</h3>
              <button className="bg-[#2DC071] text-white px-6 py-3 rounded-md">ADD TO CART</button>
            </div>
          </div>
          <div className="flex-1">
            <Image src={img10} alt="Green Man" width={500} height={500} className="mx-auto lg:mx-0" />
          </div>
        </div>
      </div>

      <div className="w-full h-auto mt-[50px]">
        <div className="max-w-[1440px] flex flex-col lg:flex-row gap-[30px] px-4 lg:px-0">
          <div className="relative w-full lg:w-[707px] h-[400px] lg:h-[682px]">
            <Image src={couples} alt="couple" className="object-cover w-full h-full" />
          </div>
          <div className="w-full lg:w-[573px] flex flex-col gap-[20px] items-center lg:items-start text-center lg:text-left">
            <h5 className="text-[#BDBDBD]">SUMMER 2020</h5>
            <h2 className="lg:w-[375px] text-[#252B42]">Part of the Neural Universe</h2>
            <h4 className="lg:w-[375px] text-[#737373]">We know how large objects will act, but things on a small scale.</h4>
            <div className="flex flex-wrap justify-center lg:justify-start gap-[10px]">
              <button className="bg-[#2DC071] text-white py-[12px] px-[20px] rounded">BUY</button>
              <button className="border-[#2DC071] text-[#2DC071] border py-[12px] px-[20px] rounded">WATCH TRAILER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;


