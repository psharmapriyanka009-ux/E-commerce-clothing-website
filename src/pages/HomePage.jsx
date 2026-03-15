import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import NewsletterCard from '../components/NewsletterCard'
import SectionReveal from '../components/SectionReveal'
import { products } from '../data/products'

const featuredProducts = products.slice(0, 4)
const trendingProducts = products.filter((product) => product.tags.includes('trending')).slice(0, 4)

function HomePage() {
  return (
    <div>
      <section className="hero-section">
        <div className="container asymmetric-grid">
          <div className="hero-main-panel animate-reveal">
            <div className="editorial-image-wrap">
              <img
                src="/hero-image.png"
                alt="Premium fashion collection storefront"
              />
              <div className="overlapping-text">
                <h1 className="animate-reveal delay-1">VERVE</h1>
              </div>
            </div>
          </div>
          <div className="hero-side-panel animate-reveal delay-2">
            <span className="tag-label">The best look anytime anywhere</span>
            <h3>Paris / Achievement is about beauty</h3>
            <p>
              Bringing you the elements of style. Clothes that matter.
              Designed for sharp silhouettes and refined everyday wardrobe.
            </p>
            <div className="hero-actions" style={{ marginTop: '2rem' }}>
              <Link className="button button-dark dynamic-border" to="/collections">
                Take Style Seriously
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="asymmetric-grid" style={{ alignItems: 'end' }}>
            <div style={{ gridColumn: '1 / 6' }}>
              <h2 className="animate-reveal">Get Decorated With Our Clothes</h2>
              <p className="animate-reveal delay-1">Bringing you the elements of style.</p>
            </div>
            <div style={{ gridColumn: '7 / 13' }}>
              <div className="editorial-image-wrap animate-reveal delay-2">
                <img 
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80" 
                  alt="Fashion bag" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionReveal className="section-space">
        <div className="container section-heading">
          <div>
            <p className="eyebrow">Featured products</p>
            <h2>Designed to deliver a polished wardrobe foundation.</h2>
          </div>
          <Link to="/collections">View all products</Link>
        </div>
        <div className="container product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </SectionReveal>

      <SectionReveal className="section-space collection-preview-wrap">
        <div className="container split-grid">
          <article className="collection-preview dark-card">
            <p className="eyebrow">Men Collection</p>
            <h3>Sharp tailoring, refined layers, and smart everyday staples.</h3>
            <Link className="button button-light" to="/men">
              Shop Men
            </Link>
          </article>
          <article className="collection-preview image-card">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80"
              alt="Menswear preview"
            />
          </article>
        </div>
      </SectionReveal>

      <SectionReveal className="section-space collection-preview-wrap reverse">
        <div className="container split-grid reverse">
          <article className="collection-preview image-card">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80"
              alt="Womenswear preview"
            />
          </article>
          <article className="collection-preview muted-card">
            <p className="eyebrow">Women Collection</p>
            <h3>Elegant lines, premium textures, and pieces made to stand out.</h3>
            <Link className="button button-dark" to="/women">
              Shop Women
            </Link>
          </article>
        </div>
      </SectionReveal>

      <SectionReveal className="section-space">
        <div className="container section-heading">
          <div>
            <p className="eyebrow">Trending now</p>
            <h2>High-demand looks with elevated details and best-selling appeal.</h2>
          </div>
        </div>
        <div className="container product-grid">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </SectionReveal>

      <SectionReveal className="section-space brand-story-section">
        <div className="container story-grid">
          <div>
            <p className="eyebrow">Brand Story</p>
            <h2>We build quiet luxury for people who want confidence without compromise.</h2>
          </div>
          <p>
            Luxe Thread Co. blends minimalist aesthetics with elevated craftsmanship, creating
            apparel that balances comfort, movement, and timeless style. Every product is chosen
            to feel modern now and relevant later.
          </p>
        </div>
      </SectionReveal>

      <section className="section-space">
        <div className="container">
          <NewsletterCard />
        </div>
      </section>
    </div>
  )
}

export default HomePage
