import { useMemo, useState } from 'react'
import OrderSummary from '../components/OrderSummary'
import { useCart } from '../context/CartContext'

const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  city: '',
  country: '',
  postalCode: '',
}

function CheckoutPage() {
  const { cartItems, itemCount, subtotal, shipping, total, clearCart } = useCart()
  const [formState, setFormState] = useState(initialFormState)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const canPlaceOrder = useMemo(() => {
    return cartItems.length > 0 && Object.values(formState).every(Boolean)
  }, [cartItems.length, formState])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState((currentState) => ({ ...currentState, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!canPlaceOrder) {
      return
    }

    setOrderPlaced(true)
    clearCart()
    setFormState(initialFormState)
  }

  return (
    <div className="page-shell">
      <section className="container checkout-layout">
        <div>
          <p className="eyebrow">Checkout</p>
          <h1>Secure your order in one streamlined flow.</h1>
          <p className="page-intro">Add your customer details, review the order summary, and place your order.</p>

          {orderPlaced ? (
            <div className="success-card">
              <h3>Order placed successfully.</h3>
              <p>Your confirmation and shipping updates will be sent to your email shortly.</p>
            </div>
          ) : null}

          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label>
                First name
                <input name="firstName" value={formState.firstName} onChange={handleChange} />
              </label>
              <label>
                Last name
                <input name="lastName" value={formState.lastName} onChange={handleChange} />
              </label>
              <label>
                Email
                <input name="email" type="email" value={formState.email} onChange={handleChange} />
              </label>
              <label>
                Postal code
                <input name="postalCode" value={formState.postalCode} onChange={handleChange} />
              </label>
              <label className="full-width">
                Address
                <input name="address" value={formState.address} onChange={handleChange} />
              </label>
              <label>
                City
                <input name="city" value={formState.city} onChange={handleChange} />
              </label>
              <label>
                Country
                <input name="country" value={formState.country} onChange={handleChange} />
              </label>
            </div>

            <div className="order-preview">
              <h3>Order preview</h3>
              {cartItems.length === 0 ? (
                <p>Your cart is empty. Add products before checkout.</p>
              ) : (
                cartItems.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="summary-row">
                    <span>
                      {item.name} × {item.quantity} <small>(Size {item.size})</small>
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))
              )}
            </div>

            <button className="button button-dark" type="submit" disabled={!canPlaceOrder}>
              Place Order
            </button>
          </form>
        </div>

        <OrderSummary subtotal={subtotal} shipping={shipping} total={total} itemCount={itemCount} />
      </section>
    </div>
  )
}

export default CheckoutPage
