import { useDispatch, useSelector } from 'react-redux'

import { setIsCartOpen } from 'src/store/cart/actions'
import { selectCartCount, selectIsCartOpen } from 'src/store/cart/selectors'
import { CartIconContainer, ShoppingIcon, ItemCount } from './styled'

const CartIcon = () => {
  const dispatch = useDispatch()
  const isCartOpen = useSelector(selectIsCartOpen)
  const cartCount = useSelector(selectCartCount)

  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen))
  }

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
