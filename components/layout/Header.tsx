'use client'
import React from "react";
import {
  ChevronDown,
  Search,
  Headset,
  User,
  Heart,
  ShoppingCart,
  Menu,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const router = useRouter()
  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* Top Header Section */}
      <div className="bg-[#03484C] px-4 md:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-teal-900">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="relative">
            <h1 className="text-white text-3xl cursor-pointer font-bold tracking-tight" onClick={()=>router.push('/')}>
              <span className="border-b-2 border-white pb-0.5">WIN</span>
              <span className="font-light ml-1">store</span>
            </h1>
            <div className="absolute -bottom-1.5 left-1 flex gap-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex w-full max-w-2xl bg-white rounded overflow-hidden h-11 shadow-sm">
          <div className="relative flex items-center px-4 border-r border-gray-200 bg-white">
            <select className="appearance-none bg-transparent pr-6 text-sm text-gray-500 outline-none cursor-pointer">
              <option>All categories</option>
              <option>Electronics</option>
              <option>Fashion</option>
            </select>

            <ChevronDown className="absolute right-3 w-3 h-3 text-gray-400 pointer-events-none" />
          </div>

          <input
            type="text"
            placeholder="Search for products"
            className="flex-grow px-4 text-sm outline-none text-gray-700"
          />

          <button className="bg-gray-400 text-white px-5 flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Utility / User Actions */}
        <div className="flex items-center gap-6 text-white shrink-0">
          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-3">
            <Headset className="w-6 h-6 cursor-pointer" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-medium text-gray-300 leading-none">
                Call Us Now
              </span>
              <span className="text-sm font-bold leading-tight">
                +011 5827918
              </span>
              <button className="text-[11px] text-left hover:text-win-primary transition-colors leading-none mt-0.5 cursor-pointer">
                Sign In
              </button>
            </div>
          </div>

          <div className="flex items-center gap-5 text-xl">
            <button className="hover:text-win-primary transition-colors cursor-pointer">
              <User className="w-5 h-5" />
            </button>

            <button className="hover:text-win-primary transition-colors cursor-pointer">
              <Heart className="w-5 h-5" />
            </button>

            <button className="flex items-center gap-2 hover:text-win-primary transition-colors relative cursor-pointer">
              <div className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2.5 -right-2.5 bg-yellow-400 text-win-dark text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border border-win-dark">
                  3
                </span>
              </div>
              <span className="text-sm font-medium ml-1">Cart</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#0E3B3E] text-white px-4 md:px-12 py-3 flex items-center justify-between text-sm">
        <div className="flex items-center gap-8">
          <button className="flex items-center gap-3 font-medium hover:text-win-primary transition-colors cursor-pointer">
            <Menu className="w-5 h-5" />
            <span className="tracking-wide">Browse By Category</span>
          </button>

          <div className="hidden md:flex items-center gap-8 text-gray-300">
            <a href="#" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Easy Monthly Installments
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Shop by Brands
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Become a Vendor
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-win-primary transition-colors cursor-pointer">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-win-primary transition-colors cursor-pointer">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-win-primary transition-colors cursor-pointer">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-win-primary transition-colors cursor-pointer">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
