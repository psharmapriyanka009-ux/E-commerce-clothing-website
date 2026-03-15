import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'luxe-thread-cart'

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = window.localStorage.getItem(STORAGE_KEY)
    return storedCart ? JSON.parse(storedCart) : []
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product, size, quantity = 1) => {
    setCartItems((currentItems) => {
      const existingItemIndex = currentItems.findIndex(
        (item) => item.id === product.id && item.size === size,
      )

      if (existingItemIndex >= 0) {
        const nextItems = [...currentItems]
        nextItems[existingItemIndex] = {
          ...nextItems[existingItemIndex],
          quantity: nextItems[existingItemIndex].quantity + quantity,
        }
        return nextItems
      }

      return [
        ...currentItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size,
          quantity,
          category: product.category,
        },
      ]
    })
  }

  const updateQuantity = (id, size, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id, size)
      return
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity } : item,
      ),
    )
  }

  const removeFromCart = (id, size) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => !(item.id === id && item.size === size)),
    )
  }

  const clearCart = () => setCartItems([])

  const value = useMemo(() => {
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const shipping = subtotal > 0 ? 18 : 0
    const total = subtotal + shipping

    return {
      cartItems,
      itemCount,
      subtotal,
      shipping,
      total,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
    }
  }, [cartItems])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
