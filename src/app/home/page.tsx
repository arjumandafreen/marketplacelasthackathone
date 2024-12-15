"use client";  // Add this line

import Image from "next/image";
import { useState } from "react";
import couples from "../components/images/carrot.png";
import img1 from "../components/images/pic1.png";
import img2 from "../components/images/pic2.png";
import img3 from "../components/images/pic3.png";
import img4 from "../components/images/pic4.png";
import img5 from "../components/images/pic5.png";
import img6 from "../components/images/pic6.png";
import img7 from "../components/images/pic7.png";
import img8 from "../components/images/pic8.png";
import img9 from "../components/images/banner.jpg";
import img10 from "../components/images/gogo.png";

// Hero Section Component
const Herosection = () => {
  const productData = [
    { name: "Product 1", price: "$20", image: img1 },
    { name: "Product 2", price: "$25", image: img2 },
    { name: "Product 3", price: "$30", image: img3 },
    { name: "Product 4", price: "$35", image: img4 },
    { name: "Product 5", price: "$40", image: img5 },
    { name: "Product 6", price: "$45", image: img6 },
    { name: "Product 7", price: "$50", image: img7 },
    { name: "Product 8", price: "$55", image: img8 },
  ];

  const [selectedColor, setSelectedColor] = useState<string[]>(new Array(productData.length).fill(""));

  const handleColorChange = (index: number, color: string) => {
    const updatedColors = [...selectedColor];
    updatedColors[index] = color;
    setSelectedColor(updatedColors);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] sm:h-[716px] bg-cover">
        <div className="relative w-full h-full">
          <Image
            src={img9}
            alt="Banner"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start p-8 sm:p-12 text-white">
            <div className="w-full sm:w-[599px] h-auto gap-[25px] text-center sm:text-left">
              <h5 className="font-montserrat font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[0.1px]">
                SUMMER 2020
              </h5>
              <h1 className="font-montserrat font-bold text-[30px] sm:text-[58px] leading-[40px] sm:leading-[80px] tracking-[0.2px]">
               NEW COLLECTION  
              </h1>
              <h4 className="font-montserrat font-normal text-[14px] sm:text-[20px] leading-[20px] sm:leading-[30px] tracking-[0.2px] w-full sm:w-[376px]">
                We understand the behavior of large objects, but things at a smaller scale behave differently
              </h4>
              <br />
              <button className="w-[60%] sm:w-[170px] bg-[#2DC071] py-[12px] sm:px-[40px] px-[30px] rounded-[5px] gap-[10px] text-white font-montserrat">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <p className="text-xl text-center mb-8">Browse exclusive collections</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productData.map((product, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
              <div className="flex flex-col items-center">
                <Image
                  src={product.image}
                  alt={`Product ${index + 1}`}
                  className="w-full h-auto object-cover"
                  height={300}
                  width={300}
                />
                <div className="mt-4 w-full text-center">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600 mt-2">{product.price}</p>
                  <div className="flex mt-4 justify-center gap-4">
                    {['red', 'blue', 'green', 'yellow'].map((color) => (
                      <button
                        key={color}
                        className={`w-8 h-8 rounded-full ${selectedColor[index] === color ? 'border-4 border-black' : ''}`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorChange(index, color)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Green Section */}
      <div className="w-full bg-[#23856D] py-10 lg:py-20">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-12">
          <div className="flex-1 text-center lg:text-left">
            <h4 className="text-[16px] font-Montserrat font-medium leading-6 text-white">SUMMER 2024</h4>
            <h1 className="text-[32px] lg:text-[58px] font-Montserrat font-bold leading-10 lg:leading-[72px] text-white mt-2">
              Luma Elite Product
            </h1>
            <p className="text-[14px] lg:text-[16px] font-Montserrat font-medium leading-6 text-white mt-4">
              Uncover the excellence of our products
            </p>
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mt-6">
              <h3 className="text-[24px] font-Montserrat font-bold text-white">$16.48</h3>
              <button className="bg-[#2DC071] text-white font-Montserrat font-medium px-6 py-3 rounded-md">
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={img10}
              alt="Green Man"
              width={500}
              height={500}
              className="mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>

      {/* White Section (added below the Green Section) */}
      <div className="w-full h-auto mt-[50px]">
        <div className="w-full max-w-[1440px] flex flex-col lg:flex-row gap-[30px] px-4 lg:px-0">
          <div className="relative w-full lg:w-[707px] h-[400px] lg:h-[682px] flex justify-center">
            <Image
              src={couples}
              alt="couple"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full lg:w-[573px] h-auto flex flex-col gap-[20px] justify-center items-center lg:items-start text-center lg:text-left mt-[20px] lg:mt-0">
            <h5 className="text-[14px] lg:text-[16px] font-Montserrat font-bold leading-[24px] text-[#BDBDBD]">
              SUMMER 2020
            </h5>
            <h2 className="lg:w-[375px] text-[24px] lg:text-[40px] font-Montserrat font-bold leading-[32px] lg:leading-[50px] text-[#252B42]">
              Part of the Neural Universe
            </h2>
            <h4 className="lg:w-[375px] text-[16px] lg:text-[20px] font-Montserrat font-normal leading-[24px] lg:leading-[30px] text-[#737373]">
              We know how large objects will act, but things on a small scale.
            </h4>
            <div className="flex flex-wrap justify-center lg:justify-start gap-[10px]">
              <button className="w-[140px] lg:w-[156px] h-[52px] rounded-[5px] py-[12px] px-[20px] lg:px-[40px] bg-[#2DC071] flex justify-center items-center">
                <h1 className="text-[14px] font-Montserrat font-bold text-white">
                  BUY 
                </h1>
              </button>
              <button className="w-[140px] lg:w-[156px] h-[52px] rounded-[5px] py-[12px] px-[20px] lg:px-[40px] border border-[#2DC071] flex justify-center items-center">
                <h1 className="text-[14px] font-Montserrat font-bold whitespace-nowrap text-[#2DC071]">
                  READ MORE
                </h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
