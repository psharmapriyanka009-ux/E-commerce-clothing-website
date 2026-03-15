import { Link } from 'react-router-dom'
import OrderSummary from '../components/OrderSummary'
import QuantitySelector from '../components/QuantitySelector'
import { useCart } from '../context/CartContext'

function CartPage() {
  const { cartItems, itemCount, subtotal, shipping, total, updateQuantity, removeFromCart } = useCart()

  return (
    <div className="page-shell">
      <section className="container cart-layout">
        <div>
          <p className="eyebrow">Shopping Cart</p>
          <h1>Your selected pieces</h1>
          <p className="page-intro">Review quantities, adjust sizes, and move seamlessly to checkout.</p>

          {cartItems.length === 0 ? (
            <div className="empty-state left-aligned">
              <h3>Your cart is empty.</h3>
              <p>Add premium essentials to start building your order.</p>
              <Link className="button button-dark" to="/collections">
                Browse collections
              </Link>
            </div>
          ) : (
            <div className="cart-list">
              {cartItems.map((item) => (
                <article key={`${item.id}-${item.size}`} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-copy">
                    <div>
                      <h3>{item.name}</h3>
                      <p>Size {item.size}</p>
                      <p>${item.price.toFixed(2)}</p>
                    </div>
                    <div className="cart-item-actions">
                      <QuantitySelector
                        value={item.quantity}
                        onChange={(quantity) => updateQuantity(item.id, item.size, quantity)}
                      />
                      <button type="button" onClick={() => removeFromCart(item.id, item.size)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <OrderSummary subtotal={subtotal} shipping={shipping} total={total} itemCount={itemCount} />
      </section>

      {cartItems.length > 0 ? (
        <div className="container checkout-cta-row">
          <Link className="button button-dark" to="/checkout">
            Proceed to Checkout
          </Link>
        </div>
      ) : null}
    </div>
  )
}

export default CartPage
