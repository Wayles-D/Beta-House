import React from 'react'
import Hero from './Pages/Hero'
import Body from './Pages/Body'
import Discover from './Pages/Discover'

const Homepage = () => {
  const [filters, setFilters] = React.useState({
    location: '',
    propertyType: '',
    bedrooms: 0
  })

  const handleSearch = (searchCriteria) => {
    setFilters(searchCriteria)
  }

  return (
    <>
      <Hero onSearch={handleSearch} />
      <Body filters={filters} path={'/Properties'}/>
      <Discover />
    </>
  )
}

export default Homepage