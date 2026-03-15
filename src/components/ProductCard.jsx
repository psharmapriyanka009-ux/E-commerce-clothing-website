import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link className="product-image-wrap" to={`/product/${product.id}`}>
        <img className="product-image primary" src={product.image} alt={product.name} />
        <img className="product-image secondary" src={product.secondaryImage} alt="" aria-hidden="true" />
        <span className="product-badge">{product.tags[0]?.replace('-', ' ')}</span>
      </Link>
      <div className="product-copy">
        <div>
          <p className="product-category">{product.category === 'men' ? 'Men' : 'Women'}</p>
          <Link className="product-title" to={`/product/${product.id}`}>
            {product.name}
          </Link>
        </div>
        <div className="product-meta">
          <span>${product.price}</span>
          <span>★ {product.rating}</span>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
