import { client } from "@/sanity/lib/client";
import { Products } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Products> {
  return client.fetch(
    groq`*[_type == "products" && slug.current == $slug][0]{
      _id,
      name,
      description,
      price,
      discountPercent,
      sizes,
      image,
      colors,
      category,
      "slugCurrent": slug.current
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const post = await getProduct(slug);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {post.image && (
            <Image
              src={urlFor(post.image).url()}
              alt={post.name}
              width={500} // Adjusted image size
              height={500}
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
            />
          )}
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{post.name}</h2>

          <p className="text-xl text-gray-600 mb-4">{post.description}</p>

          <div className="flex items-center mb-4">
            <p className="text-2xl font-bold text-gray-800">
              ${post.price}
            </p>
            {post.discountPercent && (
              <span className="ml-4 text-xl text-red-500">
                {post.discountPercent}% OFF
              </span>
            )}
          </div>

          {/* Category */}
          <p className="text-lg text-gray-500 mb-4">
            Category: <span className="font-semibold text-gray-800">{post.category}</span>
          </p>

          {/* Sizes */}
          {post.sizes && (
            <p className="text-lg text-gray-500 mb-4">
              Available Sizes:{" "}
              <span className="font-semibold text-gray-800">{post.sizes.join(", ")}</span>
            </p>
          )}

          {/* Colors */}
          {post.colors && (
            <p className="text-lg text-gray-500 mb-4">
              Available Colors:{" "}
              <span className="font-semibold text-gray-800">{post.colors.join(", ")}</span>
            </p>
          )}

          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
             Call Now
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
