"use client";

import { Menu, ShoppingCart, Search, Heart } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCartEmpty, setIsCartEmpty] = useState(true); // State to track if the cart is empty
  const [cartClicked, setCartClicked] = useState(false); // State to track if cart icon was clicked

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleCartClick = () => {
    setCartClicked(true); // Mark cart as clicked
    setIsCartEmpty(true); // Set the cart as empty when clicked
    alert("Your cart is empty"); // Display an alert or other message
  };

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/shop", label: "Shop" },
    { href: "/price", label: "Price" },
    { href: "/contact", label: "Contact" },
    { href: "/productlist", label: "Product List" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-2xl font-bold">
            BANDAGE
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex space-x-2 mx-auto">
          {navLinks.map((item, idx) => (
            <Link key={idx} href={item.href} className="px-6 py-2 rounded-full">
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Side Icons and Buttons */}
        <div className="flex items-center space-x-6">
          <div className="hidden sm:flex space-x-4">
            {[Search, Heart].map((Icon, idx) => (
              <Icon key={idx} size={24} className="cursor-pointer" />
            ))}
            {/* Shopping Cart Icon */}
            <ShoppingCart
              size={24}
              className="cursor-pointer"
              onClick={handleCartClick} // Handle click for cart icon
            />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="sm:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col items-center space-y-3 bg-white p-4">
          {navLinks.map((item, idx) => (
            <Link key={idx} href={item.href} className="text-black" onClick={toggleMenu}>
              {item.label}
            </Link>
          ))}
        </div>
      )}

      
    </nav>
  );
}

