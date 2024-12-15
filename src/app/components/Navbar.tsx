"use client";

import { Menu, ShoppingCart, Search, Heart } from 'lucide-react';
import { useState } from "react";
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleShopDropdown = () => setShopDropdownOpen(!shopDropdownOpen);

  const navLinks = [
    { href: '/home', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/price', label: 'Price' },
    { href: '/contact', label: 'Contact' },
    { href: '/productlist', label: 'Product List' },
  ];

  const mobileLinks = [
    { href: '/home', label: 'Home' },
    { href: '/productlist', label: 'Shop' },
    { href: '/about', label: 'About' },
    { href: '/price', label: 'Price' },
    { href: '/contact', label: 'Contact' },
    { href: '/details', label: 'Details' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Menu size={30} className="cursor-pointer sm:hidden" onClick={toggleMenu} />
          <Link href="/" className="text-2xl font-bold">BANDAGE</Link>
        </div>

        <div className="hidden sm:flex space-x-2 mx-auto">
          <div className="relative">
            <button className="px-6 py-2 rounded-full" onClick={toggleShopDropdown}>Shop</button>
            {shopDropdownOpen && (
              <div className="absolute top-12 left-0 w-full bg-white shadow-md rounded-lg">
                <ul>
                  <li><Link href="/home" className="block px-4 py-2">Clothing</Link></li>
                  <li><Link href="/productlist" className="block px-4 py-2">Products</Link></li>
                </ul>
              </div>
            )}
          </div>
          {navLinks.map((item, idx) => (
            <Link key={idx} href={item.href} className="px-6 py-2 rounded-full">{item.label}</Link>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          {[
            { href: '/contact', label: 'Login' },
            { href: '/detail', label: 'Details' },
          ].map((item, idx) => (
            <Link key={idx} href={item.href} className="hidden sm:block">{item.label}</Link>
          ))}
          <div className="flex items-center space-x-4">
            {[Search, Heart, ShoppingCart].map((Icon, idx) => (
              <Icon key={idx} size={24} className="cursor-pointer" />
            ))}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden flex flex-col items-center space-y-3 bg-white-600 p-4">
          {mobileLinks.map((item, idx) => (
            <Link key={idx} href={item.href} className="text-black" onClick={toggleMenu}>{item.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
