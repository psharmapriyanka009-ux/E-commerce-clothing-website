import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import SectionReveal from '../components/SectionReveal'
import { products, sizeOptions } from '../data/products'
import { useCart } from '../context/CartContext'

function ProductDetailPage() {
  const { productId } = useParams()
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState('M')
  const [feedback, setFeedback] = useState('')

  const product = products.find((item) => item.id === productId)

  const relatedProducts = useMemo(() => {
    if (!product) {
      return []
    }

    return products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3)
  }, [product])

  if (!product) {
    return (
      <div className="container page-shell">
        <div className="empty-state">
          <h2>Product not found.</h2>
          <Link className="button button-dark" to="/collections">
            Back to collections
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, selectedSize)
    setFeedback(`${product.name} added to cart`)
    window.setTimeout(() => setFeedback(''), 1600)
  }

  return (
    <div className="page-shell">
      <section className="container product-detail-grid">
        <div className="product-gallery">
          <img src={product.image} alt={product.name} />
          <img src={product.secondaryImage} alt={`${product.name} alternate view`} />
        </div>

        <div className="product-panel">
          <p className="eyebrow">{product.category === 'men' ? 'Men Collection' : 'Women Collection'}</p>
          <h1>{product.name}</h1>
          <div className="price-row">
            <span className="product-price">${product.price}</span>
            <span>★ {product.rating} rating</span>
          </div>
          <p className="product-description">{product.description}</p>

          <div className="selection-block">
            <p className="selection-label">Available colors</p>
            <div className="chip-row">
              {product.colors.map((color) => (
                <span key={color} className="info-chip">
                  {color}
                </span>
              ))}
            </div>
          </div>

          <div className="selection-block">
            <p className="selection-label">Select size</p>
            <div className="size-grid">
              {sizeOptions.map((size) => (
                <button
                  key={size}
                  className={`size-button ${selectedSize === size ? 'active' : ''}`}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="product-actions-row">
            <button className="button button-dark add-cart-button" type="button" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <Link className="button button-light" to="/checkout">
              Buy Now
            </Link>
          </div>

          <div className={`cart-feedback ${feedback ? 'visible' : ''}`}>{feedback}</div>

          <ul className="detail-list">
            {product.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      </section>

      <SectionReveal className="section-space">
        <div className="container section-heading">
          <div>
            <p className="eyebrow">You may also like</p>
            <h2>Pair it with complementary premium staples.</h2>
          </div>
        </div>
        <div className="container product-grid">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </SectionReveal>
    </div>
  )
}

export default ProductDetailPage
