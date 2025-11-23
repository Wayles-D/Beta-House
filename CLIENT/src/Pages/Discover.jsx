import React, { useRef } from 'react'
import { useProperties } from '../hooks/useProperties'
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Discover = () => {
    const { properties, isLoading, error } = useProperties()
    const scrollRef = useRef(null)

    const scroll = (direction) => {
        const { current } = scrollRef
        if (current) {
            const scrollAmount = 300 // Adjust based on card width
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    if (isLoading) return null
    if (error) return null

    // Take first 4 or any 4 properties. 
    // If you want "Popular", we could filter by 'featured' or just take the first few.
    const displayProperties = properties.slice(0, 6) // Fetching a few more to allow scrolling if needed, or just 4.

    return (
        <div className="py-16 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0D1B2A] mb-10">
                    Discover Our Popular Properties
                </h2>

                <div className="relative group">
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg text-gray-800 transition-all hidden md:block"
                    >
                        <FaArrowLeft />
                    </button>

                    {/* Scrollable Container */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide snap-x snap-mandatory"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {displayProperties.map((property) => (
                            <div
                                key={property._id}
                                className="min-w-[280px] md:min-w-[300px] lg:min-w-[320px] h-[400px] rounded-2xl overflow-hidden relative snap-center shadow-lg cursor-pointer group/card"
                            >
                                {/* Background Image */}
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">

                                    <h3 className="text-xl font-bold mb-1">{property.title}</h3>
                                    <p className="text-lg font-semibold mb-2">{property.price}</p>

                                    <div className="flex items-center text-xs space-x-3 mb-2 opacity-90">
                                        <span className="flex items-center gap-1"><FaBed /> {property.bedrooms} Bed</span>
                                        <span className="flex items-center gap-1"><FaBath /> {property.bathrooms} Bath</span>
                                        <span className="flex items-center gap-1"><FaRulerCombined /> 720 sq ft</span>
                                    </div>

                                    <div className="flex items-center text-xs opacity-90">
                                        <FaMapMarkerAlt className="mr-1" />
                                        {property.location}
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-green-600 hover:bg-green-700 p-3 rounded-full shadow-lg text-white transition-all hidden md:block"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Discover
