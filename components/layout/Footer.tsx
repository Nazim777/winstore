import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#393939] text-white pt-16 pb-0">
      <div className="container mx-auto max-w-[1403px] px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight">
                <span className="border-b-4 border-white pb-1">WIN</span>
                <span className="font-light ml-1 text-2xl">store</span>
              </h2>
              <div className="absolute -bottom-2 left-1 flex gap-4">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-win-primary font-medium text-lg mb-2">
              Got questions? Call us 24/7!
            </h4>
            <div className="text-sm text-gray-300 space-y-1">
              <p>03 111 666 144</p>
              <p>0317 1777015</p>
            </div>
          </div>

          <div>
            <h4 className="text-win-primary font-medium text-lg mb-2">
              Contact info
            </h4>
            <p className="text-sm text-gray-300">info@winstore.pk</p>
          </div>

          <div className="flex gap-6 text-xl">
            <a href="#" className="hover:text-win-primary transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-win-primary transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-win-primary transition-colors">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="hover:text-win-primary transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Trending */}
        <div>
          <h3 className="text-win-primary font-medium text-xl mb-6">
            Trending
          </h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Installments
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Electronics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Grocery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Health & Beauty
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Home Appliances
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Mobile Accessories
              </a>
            </li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-win-primary font-medium text-xl mb-6">
            Information
          </h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Shipping & Return
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-win-primary font-medium text-xl mb-6">
            Customer Care
          </h3>
          <ul className="space-y-4 text-sm text-gray-300 mb-8">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Track Your Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Recently Viewed
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Compare
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Become a Vendor
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Payment Icons Row */}
      <div className="container mx-auto px-4 md:px-12 flex justify-end gap-3 pb-12">
        <div className="bg-white rounded px-3 py-1 flex items-center h-10 shadow-sm overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
            className="h-5"
            alt="Visa"
          />
        </div>
        <div className="bg-white rounded px-3 py-1 flex items-center h-10 shadow-sm overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
            className="h-6"
            alt="Mastercard"
          />
        </div>
        <div className="bg-white rounded px-3 py-1 flex items-center h-10 shadow-sm overflow-hidden text-black font-bold text-xs uppercase text-center leading-tight">
          <div className="flex flex-col items-center">
            <span className="text-[10px] tracking-widest text-gray-800">
              CASH
            </span>
            <i className="fas fa-truck text-orange-500 text-[10px]"></i>
          </div>
        </div>
        <div className="bg-white rounded px-3 py-1 flex items-center h-10 shadow-sm overflow-hidden">
          <div className="bg-[#14A3B8] text-white text-[8px] px-1 py-0.5 font-bold leading-none text-center">
            EASY
            <br />
            INSTALLMENT
            <br />
            PLANS
          </div>
        </div>
      </div>

      {/* Copyright Strip */}
{/* Copyright Strip */}
<div className="bg-[#161616]">
  <div className="mx-auto h-[60px] w-full max-w-[1404px] flex items-center px-4 md:px-12 text-white text-lg">
    <p>© 2021 Winstore. All Rights Reserved.</p>
  </div>
</div>


    </footer>
  );
};

export default Footer;
