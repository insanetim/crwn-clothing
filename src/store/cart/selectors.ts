import { createSelector } from 'reselect'

import { RootState } from 'src/store'
import { CartState } from './reducer'

const selectCartReducer = (state: RootState): CartState => state.cart

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  cartSlice => cartSlice.isCartOpen
)

export const selectCartItems = createSelector(
  [selectCartReducer],
  cartSlice => cartSlice.cartItems
)

export const selectCartCount = createSelector([selectCartItems], cartItems => {
  return cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity
  }, 0)
})

export const selectCartTotal = createSelector([selectCartItems], cartItems => {
  return cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price
  }, 0)
})
