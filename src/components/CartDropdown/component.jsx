import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'
import Button from '../Button'
import CartItem from '../CartItem'
import './styles.scss'
import { useNavigate } from 'react-router-dom'

const CartDropdown = () => {
  const navigate = useNavigate()
  const { cartItems } = useContext(CartContext)

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            cartItem={item}
          />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown
