import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CartItem } from 'src/store/cart/types'
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from 'src/store/cart/actions'
import { selectCartItems } from 'src/store/cart/selectors'
import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Arrow,
  Value,
  Price,
  RemoveButton,
} from './styled'

type CheckoutItemProps = {
  cartItem: CartItem
}

const CheckoutItem: React.FC<CheckoutItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const addItemHandler = () => {
    dispatch(addItemToCart(cartItems, cartItem))
  }
  const removeItemHandler = () => {
    dispatch(removeItemFromCart(cartItems, cartItem))
  }
  const clearItemHandler = () => {
    dispatch(clearItemFromCart(cartItems, cartItem))
  }

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img
          src={imageUrl}
          alt={name}
        />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
})

export default CheckoutItem
