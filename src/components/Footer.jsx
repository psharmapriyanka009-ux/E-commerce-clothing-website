import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="eyebrow">VERVE</p>
          <h3>Premium wardrobe essentials, designed for confident everyday wear.</h3>
          <p style={{ marginTop: '1rem', fontWeight: '600' }}>
            Contact Us: <a href="tel:945919514" style={{ color: 'inherit', textDecoration: 'none' }}>945919514</a>
          </p>
        </div>
        <div>
          <p className="footer-title">Explore</p>
          <div className="footer-links">
            <Link to="/men">Men</Link>
            <Link to="/women">Women</Link>
            <Link to="/collections">Collections</Link>
          </div>
        </div>
        <div>
          <p className="footer-title">Company</p>
          <div className="footer-links">
            <Link to="/about">About Brand</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/checkout">Checkout</Link>
          </div>
        </div>
        <div>
          <p className="footer-title">Social</p>
          <div className="footer-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer">
              Pinterest
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              X / Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 VERVE</span>
        <span>Crafted for a premium shopping experience.</span>
      </div>
    </footer>
  )
}

export default Footer
