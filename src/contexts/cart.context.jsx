import { createContext, useMemo, useState } from 'react'

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartItemCount: 0,
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const cartItemCount = useMemo(() => {
    return cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity
    }, 0)
  }, [cartItems])

  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartItemCount,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
