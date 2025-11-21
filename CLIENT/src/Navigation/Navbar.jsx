import React from 'react'
import { Link } from 'react-router-dom'
import { CgMenuRight } from 'react-icons/cg';
import { GrClose } from 'react-icons/gr';

const Navbar = () => {
const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/Properties" },
    { name: "About Us", path: "/About Us" },
    { name: "Blog", path: "/Blog" },
    { name: "Contact Us", path: "/Contact Us" },
  ];

  return (
    <>
     <header className="backdrop-blur-sm md:shadow-md md:border-b md:border-[#34170D] fixed top-0 left-0 w-full pt-2 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center space-x-1">
              <div className="gap-y-0 gap-x-0.5 flex">
                <div className='p'>
              <p className="lg:text-[23.61px] poppins-bold bg-green-500 p-1.5 my-1 rounded-4xl text-white">BH</p>
                </div>
              <h1 className="lg:text-[28.33px] poppins-medium text-white my-2 lg:h-[31px]">BetaHouse</h1>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-white font-bold text-center after:content-[''] after:block after:h-0.5 after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-700 hover:after:scale-x-100 exo-2-medium "
              >
                {item.name}
              </Link>
            ))}
          </nav>
           <div className='hidden md:flex gap-[34px] exo-2-regular'>
            <Link to={'/Signin'}>
            <button className='border-2 border-accent rounded-xl p-2 lg:w-[120px] lg:h-12 text-white hover:bg-white/30 hover:font-semibold'>Sign In</button>
            </Link>
            <Link to={'/Login'}>
            <button className='bg-green-500 p-2 rounded-xl lg:w-[120px] lg:h-12 hover:bg-green-700 text-white hover:font-semibold'>Login</button>
            </Link>
           </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black p-2"
            >
              {isMenuOpen ? <GrClose size={24} className='text-white'/> : <CgMenuRight size={24} className='text-white'/>}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 text-white hover:text-white/60 font-medium hover:bg-green-500 hover:rounded-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>

    </>
  )
}

export default Navbar