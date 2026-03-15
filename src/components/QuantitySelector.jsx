function QuantitySelector({ value, onChange }) {
  return (
    <div className="quantity-selector" aria-label="Quantity selector">
      <button type="button" onClick={() => onChange(Math.max(1, value - 1))}>
        −
      </button>
      <span>{value}</span>
      <button type="button" onClick={() => onChange(value + 1)}>
        +
      </button>
    </div>
  )
}

export default QuantitySelector
