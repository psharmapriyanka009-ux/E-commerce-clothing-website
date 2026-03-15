function OrderSummary({ subtotal, shipping, total, itemCount }) {
  return (
    <aside className="summary-card">
      <p className="eyebrow">Order Summary</p>
      <div className="summary-row">
        <span>Items ({itemCount})</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="summary-row">
        <span>Shipping</span>
        <span>${shipping.toFixed(2)}</span>
      </div>
      <div className="summary-row total">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </aside>
  )
}

export default OrderSummary
