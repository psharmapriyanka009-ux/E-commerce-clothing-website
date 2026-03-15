import { useMemo, useState } from 'react'
import FilterBar from '../components/FilterBar'
import ProductCard from '../components/ProductCard'
import SectionReveal from '../components/SectionReveal'
import { products } from '../data/products'

function matchesFilter(product, filter) {
  if (filter === 'all') {
    return true
  }

  if (filter === 'men' || filter === 'women') {
    return product.category === filter
  }

  return product.tags.includes(filter)
}

function CollectionPage({ defaultCategory }) {
  const [activeFilter, setActiveFilter] = useState(defaultCategory)
  const [searchValue, setSearchValue] = useState('')

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = matchesFilter(product, activeFilter)
      const searchTerm = searchValue.toLowerCase().trim()
      const matchesSearch =
        searchTerm.length === 0 ||
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)

      return matchesCategory && matchesSearch
    })
  }, [activeFilter, searchValue])

  return (
    <div className="page-shell">
      <section className="page-hero muted-surface">
        <div className="container">
          <p className="eyebrow">Collections</p>
          <h1>Curated apparel built for premium everyday dressing.</h1>
          <p className="page-intro">
            Browse menswear and womenswear edits, explore new arrivals, and discover trending
            statement pieces designed with elevated simplicity.
          </p>
        </div>
      </section>

      <SectionReveal className="section-space">
        <div className="container">
          <FilterBar
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            searchValue={searchValue}
            onSearchChange={setSearchValue}
          />
          <div className="results-copy">
            <p>{filteredProducts.length} products available</p>
          </div>
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length === 0 ? (
            <div className="empty-state">
              <h3>No pieces match your search.</h3>
              <p>Try a different keyword or explore another collection filter.</p>
            </div>
          ) : null}
        </div>
      </SectionReveal>
    </div>
  )
}

export default CollectionPage
