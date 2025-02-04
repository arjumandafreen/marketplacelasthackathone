"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { Products } from "../../../types/products";
import Link from "next/link";

const Shop = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Products[] = await client.fetch(allProducts);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  const handleClick = (product: Products) => {
    console.log("Product added to cart:", product);
    setSuccessMessage("Your product has been added to the cart successfully!");
    setTimeout(() => setSuccessMessage(null), 3000); // Clear message after 3 seconds
  };

  return (
    <>
      {/* Product Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8 text-red-800">Fabulous Products</h2>

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
    </>
  );
};

export default Shop;
