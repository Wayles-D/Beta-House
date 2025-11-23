import React, { useState } from 'react'
import { useProperties } from '../hooks/useProperties'

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

const Body = ({ filters }) => {
  const { properties: fetchedProperties, isLoading, error } = useProperties()
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('default')
  const [page, setPage] = useState(1)
  const perPage = 9

  if (isLoading) return <div className="text-center mt-10">Loading properties...</div>
  if (error) return <div className="text-center mt-10 text-red-600">{error}</div>

  const properties = fetchedProperties.map(p => ({
    ...p,
    id: p._id, // map _id to id
    img: p.image // map image to img
  }))

  // simple filtering + sorting demo
  const filtered = properties
    .filter(p => {
      // Text search filter
      const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase()) || p.location.toLowerCase().includes(query.toLowerCase())

      // Hero filters
      const matchesLocation = !filters?.location || p.location.toLowerCase().includes(filters.location.toLowerCase())
      const matchesType = !filters?.propertyType || p.title.toLowerCase().includes(filters.propertyType.toLowerCase()) || p.tag.toLowerCase().includes(filters.propertyType.toLowerCase())
      const matchesBedrooms = !filters?.bedrooms || p.bedrooms >= filters.bedrooms

      return matchesQuery && matchesLocation && matchesType && matchesBedrooms
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return Number(a.price.replace(/\D/g, '')) - Number(b.price.replace(/\D/g, ''))
      if (sort === 'price-desc') return Number(b.price.replace(/\D/g, '')) - Number(a.price.replace(/\D/g, ''))
      return 0
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