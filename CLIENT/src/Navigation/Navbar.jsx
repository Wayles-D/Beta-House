import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CgMenuRight } from 'react-icons/cg';
import { GrClose } from 'react-icons/gr';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const location = useLocation();

  const navigationItems = [
    { name: "Home", path: "/", active: true },
    { name: "Properties", path: "/Properties", active: false },
    { name: "About Us", path: "/About Us", active: false },
    { name: "Blog", path: "/Blog", active: false },
    { name: "Contact Us", path: "/Contact Us", active: false },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
  };

  // Determine if we should show the transparent navbar
  // Only on homepage and when not scrolled
  const isTransparent = location.pathname === '/' && !scrolled;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full pt-2 z-50 transition-all duration-300 ${
          isTransparent 
            ? 'backdrop-blur-sm bg-transparent md:border-b md:border-[#03341d]' 
            : 'bg-[#03341d] shadow-md'
        }`}
      >
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
                item.active ? (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="relative text-white font-bold text-center after:content-[''] after:block after:h-0.5 after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-700 hover:after:scale-x-100 exo-2-medium"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span
                    key={item.name}
                    className="relative text-white/40 font-bold text-center cursor-not-allowed exo-2-medium"
                    title="Coming soon"
                  >
                    {item.name}
                  </span>
                )
              ))}
            </nav>

            <div className='hidden md:flex gap-[34px] exo-2-regular items-center'>
              {!user ? (
                <>
                  <Link to={'/Signin'}>
                    <button className='border-2 border-accent rounded-xl p-2 lg:w-[120px] lg:h-12 text-white hover:bg-white/30 hover:font-semibold'>Sign Up</button>
                  </Link>
                  <Link to={'/Login'}>
                    <button className='bg-green-500 p-2 rounded-xl lg:w-[120px] lg:h-12 hover:bg-green-700 text-white hover:font-semibold'>Login</button>
                  </Link>
                </>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity"
                  >
                    <img
                      src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763917697/f60dce9333b77882aa2234aec8a7c61cb6d9edfa_z4gqdo.png"
                      alt="Profile"
                      className="w-10 h-10 rounded-full object-cover border-2 border-white"
                    />
                    <span className="text-lg font-medium">
                      {user.firstName}
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                      <div className="px-4 py-2 text-sm text-gray-700 border-b">
                        Signed in as <br />
                        <span className="font-bold">{user.email}</span>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              {user && (
                <div className="flex items-center gap-2">
                  <img
                    src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763917697/f60dce9333b77882aa2234aec8a7c61cb6d9edfa_z4gqdo.png"
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover border border-white"
                  />
                </div>
              )}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black p-2"
              >
                {isMenuOpen ? <GrClose size={24} className='text-white' /> : <CgMenuRight size={24} className='text-white' />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item) => (
                  item.active ? (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-3 py-2 text-white hover:text-white/60 font-medium hover:bg-green-500 hover:rounded-xl"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span
                      key={item.name}
                      className="block px-3 py-2 text-white/40 font-medium cursor-not-allowed"
                    >
                      {item.name} (Coming soon)
                    </span>
                  )
                ))}
                {user ? (
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-white hover:text-white/60 font-medium hover:bg-red-500 hover:rounded-xl"
                  >
                    Sign Out
                  </button>
                ) : (
                  <div className="flex flex-col gap-2 mt-4">
                    <Link to={'/Signin'} onClick={() => setIsMenuOpen(false)}>
                      <button className='w-full border-2 border-accent rounded-xl p-2 text-white'>Sign Up</button>
                    </Link>
                    <Link to={'/Login'} onClick={() => setIsMenuOpen(false)}>
                      <button className='w-full bg-green-500 p-2 rounded-xl text-white'>Login</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

    </>
  )
}

export default Navbar