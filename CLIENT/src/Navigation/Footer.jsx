import React from 'react'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#03341d] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: Brand & Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className='p'>
                <p className="lg:text-[23.61px] poppins-bold bg-green-500 p-1.5 my-1 rounded-4xl text-white">BH</p>
              </div>
              <span className="text-2xl font-bold">BetaHouse</span>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Discover, rent, and find your ideal home hassle-free with BetaHouse. Take control of your rental journey today!
            </p>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span>95 Tinubu Estate, Lekki, Lagos</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="flex-shrink-0" />
                <span>+234 675 8935 675</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="flex-shrink-0" />
                <span>support@rentbetahouse.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/Properties" className="hover:text-white transition-colors">Properties</Link></li>
              <li><Link to="/About Us" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/Contact Us" className="hover:text-white transition-colors">Contact us</Link></li>
              <li><Link to="/Blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Column 3: More */}
          <div>
            <h3 className="text-lg font-bold mb-6">More</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/Agents" className="hover:text-white transition-colors">Agents</Link></li>
              <li><Link to="/Affordable Houses" className="hover:text-white transition-colors">Affordable Houses</Link></li>
              <li><Link to="/FAQ's" className="hover:text-white transition-colors">FAQ's</Link></li>
            </ul>
          </div>

          {/* Column 4: Popular Search */}
          <div>
            <h3 className="text-lg font-bold mb-6">Popular Search</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/search?q=sale" className="hover:text-white transition-colors">Apartment for sale</Link></li>
              <li><Link to="/search?q=rent" className="hover:text-white transition-colors">Apartment for rent</Link></li>
              <li><Link to="/search?q=3bed" className="hover:text-white transition-colors">3 bedroom flat</Link></li>
              <li><Link to="/search?q=bungalow" className="hover:text-white transition-colors">Bungalow</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>Copyright 2023 BetaHouse | Designed by Michael.fig</p>
          <Link to="/privacy" className="hover:text-white transition-colors mt-4 md:mt-0">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer