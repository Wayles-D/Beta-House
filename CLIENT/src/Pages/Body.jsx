import React, { useState } from 'react'

const mockProperties = [
  { id: 1, title: 'Real House Luxury Villa', location: 'Victoria Island, Lagos', price: '₦3,340,000,000', bedrooms: 6, bathrooms: 3, featured: true, tag: 'For Sale', img: 'https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763672564/b-11.jpg_3_tumagb.png' },
  { id: 2, title: 'Exquisite Haven Villa', location: 'Festac, Lagos', price: '₦4,000,000/Year', bedrooms: 5, bathrooms: 3, featured: true, tag: 'For Rent', img: 'https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763672524/b-11.jpg_2_dpeclb.png' },
  { id: 3, title: 'Luxe Palatial Villa', location: 'Gbagada, Lagos', price: '₦5,350,000,000', bedrooms: 7, bathrooms: 5, featured: true, tag: 'For Sale', img: 'https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763672384/b-11.jpg_iplcex.png' },
  { id: 4, title: 'Harmony Luxury Villa', location: 'Ikoyi, Lagos', price: '₦4,000,000/Year', bedrooms: 4, bathrooms: 3, featured: true, tag: 'For Rent', img: 'https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763671693/b-11.jpg_4_rqj29n.svg' },
  { id: 5, title: 'Real House Luxury Villa', location: 'Lekki-Ajah, Lagos', price: '₦350,000,000', bedrooms: 6, bathrooms: 4, featured: true, tag: 'For rent', img: 'https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763671607/b-11.jpg_3_npo5mg.svg' },
  { id: 6, title: 'Real House Luxury Villa', location: 'Lekki-Ajah, Lagos', price: '₦4,200,000/Year', bedrooms: 5, bathrooms: 3, featured: true, tag: 'For Sale', img: 'https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763671583/b-11.jpg_2_wpqmod.svg' },
  { id: 7, title: 'Infinite Bliss Villa', location: 'Ajah, Lagos', price: '₦2,350,000,000', bedrooms: 5, bathrooms: 3, featured: true, tag: 'For Sale', img: 'https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763671538/b-11.jpg_1_hgasq0.svg' },
  { id: 8, title: 'Real House Luxury Villa', location: 'Ikeja GRA, Lagos', price: '₦3,350,000/Year', bedrooms: 4, bathrooms: 3, featured: true, tag: 'For Rent', img: 'https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763671499/b-11.jpg_uy0w82.svg' },
  { id: 9, title: 'Real House Luxury Villa', location: 'Ikeja, Lagos', price: '₦600,000,000', bedrooms: 6, bathrooms: 4, featured: true, tag: 'For Sale', img: 'https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763671425/b-11.jpg_1_e6mkov.png' },
  { id: 10, title: 'Real House Luxury Villa', location: 'Ikeja, Lagos', price: '₦600,000,000', bedrooms: 6, bathrooms: 4, featured: true, tag: 'For Sale', img: 'https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763671425/b-11.jpg_1_e6mkov.png' },
  { id: 11, title: 'Real House Luxury Villa', location: 'Ikeja, Lagos', price: '₦600,000,000', bedrooms: 6, bathrooms: 4, featured: true, tag: 'For Sale', img: 'https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763671425/b-11.jpg_1_e6mkov.png' },
  { id: 12, title: 'Harmony Luxury Villa', location: 'Ikoyi, Lagos', price: '₦4,000,000/Year', bedrooms: 4, bathrooms: 3, featured: true, tag: 'For Rent', img: 'https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763671693/b-11.jpg_4_rqj29n.svg' },
  { id: 13, title: 'Exquisite Haven Villa', location: 'Festac, Lagos', price: '₦4,000,000/Year', bedrooms: 5, bathrooms: 3, featured: true, tag: 'For Rent', img: 'https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763672524/b-11.jpg_2_dpeclb.png' },
  { id: 14, title: 'Infinite Bliss Villa', location: 'Ajah, Lagos', price: '₦2,350,000,000', bedrooms: 5, bathrooms: 3, featured: true, tag: 'For Sale', img: 'https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763671538/b-11.jpg_1_hgasq0.svg' },
  { id: 15, title: 'Real House Luxury Villa', location: 'Ikeja GRA, Lagos', price: '₦3,350,000/Year', bedrooms: 4, bathrooms: 3, featured: true, tag: 'For Rent', img: 'https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763671499/b-11.jpg_uy0w82.svg' },
  // add more mock items as needed
]

const Card = ({ p }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
    <div className="relative">
      <img src={p.img} alt={p.title} className="w-full h-44 sm:h-48 object-cover" />
      {p.featured && <span className="absolute left-3 top-3 bg-green-600 text-white text-xs px-2 py-1 rounded">Featured</span>}
      <span className="absolute right-3 top-3 bg-white/90 text-xs text-gray-700 px-2 py-1 rounded">{p.tag}</span>
      <div className="absolute right-3 bottom-3 flex space-x-2">
        <button className="bg-white/50 p-1 rounded shadow text-gray-600"><img src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763676539/Vector_sacxwm.png" alt="" /></button>
        <button className="bg-white/50 p-1 rounded shadow text-gray-600"><img src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763676702/Vector_1_hpi4gy.png" alt="" /></button>
        <button className="bg-white/50 p-1 rounded shadow text-gray-600"><img src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763676779/Vector_2_ofztfl.png" alt="" /></button>
      </div>
    </div>

    <div className="p-4">
      <h3 className="text-sm font-semibold text-gray-800">{p.title}</h3>

      <div className="mt-1">
        {/* location with map-pin icon */}
        <p className="text-xs text-gray-500 flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763679193/Vector_5_wf4ske.png"
            alt="location pin"
            className="w-3 h-3"
          />
          <span>{p.location}</span>
        </p>

        {/* bedrooms + bathrooms on one line */}
        <div className="mt-2 flex items-center text-[12px] text-gray-500 space-x-6">
          <span className="flex items-center gap-2">
            <img src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763676854/Vector_3_mwsxmk.png" alt="beds" className="w-3 h-3" />
            <span>{p.bedrooms} bedrooms</span>
          </span>

          <span className="flex items-center gap-2">
            <img src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763676883/Vector_4_hx5jan.png" alt="baths" className="w-3 h-3" />
            <span>{p.bathrooms} bathroom</span>
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="text-sm font-bold text-gray-900">{p.price}</div>
      </div>
    </div>
  </div>
)

const Body = () => {
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('default')
  const [page, setPage] = useState(1)
  const perPage = 9

  // simple filtering + sorting demo
  const filtered = mockProperties
    .filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.location.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'price-asc') return Number(a.price.replace(/\D/g, '')) - Number(b.price.replace(/\D/g, ''))
      if (sort === 'price-desc') return Number(b.price.replace(/\D/g, '')) - Number(a.price.replace(/\D/g, ''))
      return a.id - b.id
    })

  const total = filtered.length
  const pages = Math.max(1, Math.ceil(total / perPage))
  const start = (page - 1) * perPage
  const pageItems = filtered.slice(start, start + perPage)

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* header / controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 space-y-3 sm:space-y-0">
          <div className="flex items-center space-x-3">
            <button className="text-sm px-3 py-1 border rounded-md text-gray-700">More Filter</button>
            <div className="text-sm text-gray-600">Showing {start + 1} - {Math.min(start + perPage, total)} of {total} results</div>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="search"
              placeholder="Search location or title"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setPage(1) }}
              className="border px-3 py-2 rounded-md text-sm w-48"
            />
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="border px-3 py-2 rounded-md text-sm">
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pageItems.map(p => <Card key={p.id} p={p} />)}
        </div>

        {/* pagination */}
        <div className="mt-8 flex items-center justify-center space-x-3">
          <button
            onClick={() => setPage(prev => Math.max(1, prev - 1))}
            className="px-3 py-1 border rounded disabled:opacity-50"
            disabled={page === 1}
          >
            Prev
          </button>

          <div className="flex items-center space-x-2">
            {Array.from({ length: pages }).map((_, i) => {
              const pNum = i + 1
              return (
                <button
                  key={pNum}
                  onClick={() => setPage(pNum)}
                  className={`px-3 py-1 rounded ${page === pNum ? 'bg-green-600 text-white' : 'border text-gray-700'}`}
                >
                  {pNum}
                </button>
              )
            })}
          </div>

          <button
            onClick={() => setPage(prev => Math.min(pages, prev + 1))}
            className="px-3 py-1 border rounded disabled:opacity-50"
            disabled={page === pages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default Body