import React, { useState } from 'react'

const Hero = () => {
  const [location, setLocation] = useState('Gbagada')
  const [propertyType, setPropertyType] = useState('Apartment')
  const [bedrooms, setBedrooms] = useState(0)

  const handleFind = () => {
    // replace with actual search/navigation logic
    console.log({ location, propertyType, bedrooms })
  }

  return (
    <>
      <section className="relative bg-cover bg-center bg-[url('https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763633741/d2df34ad07c1f7088ffabea1950a250716545c94_s69fo3.jpg')] h-[700px]">
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/65" aria-hidden="true"></div>

        {/* heading + subtitle */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[700px] flex items-center justify-center flex-col">
          <h1 className="text-center text-4xl sm:text-5xl lg:text-[68px] text-white outfit-bold lg:w-[988px] tracking-wide">
            Browse Our Properties
          </h1>
          <p className="pt-6 text-center outfit-regular text-white text-[18px] sm:text-[20px] lg:text-[26px] mx-auto lg:w-[784px]">
            Find your perfect home among our curated properties. Start browsing now!
          </p>
        </div>

        {/* desktop search card (kept as overlay on md+; hidden on mobile) */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 bottom-12 z-20 w-full px-4">
          <div className="mx-auto max-w-5xl bg-white/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center">
              {/* LOCATION */}
              <div className="flex-1 px-6 py-4">
                <label htmlFor="location-desktop" className="block text-xs font-semibold text-gray-500 mb-1">LOCATION</label>
                <select
                  id="location-desktop"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  <option>Gbagada</option>
                  <option>Lekki</option>
                  <option>Victoria Island</option>
                  <option>Ikeja</option>
                  <option>Festac</option>
                  <option>Ajah</option>
                </select>
              </div>

              <div className="hidden sm:block w-px bg-gray-200" />

              {/* PROPERTY TYPE */}
              <div className="flex-1 px-6 py-4">
                <label htmlFor="propertyType-desktop" className="block text-xs font-semibold text-gray-500 mb-1">PROPERTY TYPE</label>
                <select
                  id="propertyType-desktop"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  <option>Duplex</option>
                  <option>Bedroom Flat</option>
                  <option>Bungalow</option>
                  <option>Studio</option>
                  <option>Terrace</option>
                  <option>Office</option>
                </select>
              </div>

              <div className="hidden sm:block w-px bg-gray-200" />

              {/* BEDROOM COUNTER */}
              <div className="w-40 px-6 py-4 flex flex-col items-start sm:items-center">
                <label className="block text-xs font-semibold text-gray-500 mb-1">BEDROOM</label>
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={() => setBedrooms(Math.max(0, bedrooms - 1))}
                    className="h-9 w-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                    aria-label="Decrease bedrooms"
                  >
                    −
                  </button>
                  <div className="min-w-[34px] text-center text-sm font-medium">{bedrooms}</div>
                  <button
                    type="button"
                    onClick={() => setBedrooms(bedrooms + 1)}
                    className="h-9 w-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                    aria-label="Increase bedrooms"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="hidden sm:block w-px bg-gray-200" />

              {/* FIND BUTTON */}
              <div className="px-4 py-6 flex items-center justify-center sm:justify-end bg-green-600">
                <button
                  onClick={handleFind}
                  className="bg-green-600 hover:bg-green-700 text-white font-medium text-sm px-6 py-3 rounded-md shadow"
                >
                  Find Property
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* mobile-only filter card that sits below the hero for a clean layout */}
      <div className="block sm:hidden px-4 mt-4">
        <div className="mx-auto max-w-3xl bg-white rounded-lg shadow-md p-4">
          <div className="space-y-4">
            <div>
              <label htmlFor="location-mobile" className="block text-xs font-semibold text-gray-500 mb-1">LOCATION</label>
              <select
                id="location-mobile"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm"
              >
                <option>Gbagada</option>
                <option>Lekki</option>
                <option>Victoria Island</option>
                <option>Ikeja</option>
                <option>Yaba</option>
                <option>Surulere</option>
              </select>
            </div>

            <div>
              <label htmlFor="propertyType-mobile" className="block text-xs font-semibold text-gray-500 mb-1">PROPERTY TYPE</label>
              <select
                id="propertyType-mobile"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm"
              >
                <option>Apartment</option>
                <option>Duplex</option>
                <option>Bungalow</option>
                <option>Studio</option>
                <option>Terrace</option>
                <option>Office</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">BEDROOM</label>
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={() => setBedrooms(Math.max(0, bedrooms - 1))}
                    className="h-9 w-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600"
                    aria-label="Decrease bedrooms"
                  >
                    −
                  </button>
                  <div className="min-w-[34px] text-center text-sm font-medium">{bedrooms}</div>
                  <button
                    type="button"
                    onClick={() => setBedrooms(bedrooms + 1)}
                    className="h-9 w-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600"
                    aria-label="Increase bedrooms"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <button
                  onClick={handleFind}
                  className="bg-green-600 hover:bg-green-700 text-white font-medium text-sm px-5 py-2.5 rounded-md shadow"
                >
                  Find
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero