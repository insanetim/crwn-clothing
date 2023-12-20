import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../contexts/cart.context'
import Button from '../Button'
import CartItem from '../CartItem'
import { CartDropdownContainer, CartItems, EmptyMessage } from './styled'

const CartDropdown = () => {
  const navigate = useNavigate()
  const { cartItems, setIsCartOpen } = useContext(CartContext)

  const goToCheckoutHandler = () => {
    setIsCartOpen(false)
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(item => (
            <CartItem
              key={item.id}
              cartItem={item}
            />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown
