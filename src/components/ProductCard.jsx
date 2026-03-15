import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <article className="product-card" style={{ border: 'none', boxShadow: 'none', background: 'transparent' }}>
      <Link className="product-image-wrap editorial-image-wrap" to={`/product/${product.id}`}>
        <img className="product-image primary" src={product.image} alt={product.name} />
        <img className="product-image secondary" src={product.secondaryImage} alt="" aria-hidden="true" />
      </Link>
      <div className="product-copy" style={{ padding: '1rem 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <Link className="product-title" to={`/product/${product.id}`} style={{ fontFamily: 'var(--font-sans)', textTransform: 'uppercase', fontWeight: '700', fontSize: '1rem' }}>
            {product.name}
          </Link>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: '500' }}>${product.price}</span>
        </div>
        <p className="product-category" style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>{product.category === 'men' ? 'Premium Menswear' : 'Luxury Womenswear'}</p>
      </div>
    </article>
  )
}

export default ProductCard
