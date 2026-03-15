import { categoryOptions } from '../data/products'

function FilterBar({ activeFilter, onFilterChange, searchValue, onSearchChange }) {
  return (
    <div className="filter-bar">
      <div className="filter-pills" role="tablist" aria-label="Product filters">
        {categoryOptions.map((option) => (
          <button
            key={option.value}
            className={`pill ${activeFilter === option.value ? 'active' : ''}`}
            type="button"
            onClick={() => onFilterChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
      <label className="search-field">
        <span className="sr-only">Search products</span>
        <input
          type="search"
          placeholder="Search products"
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </label>
    </div>
  )
}

export default FilterBar
