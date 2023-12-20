import { CartItemContainer, ItemDetails, Name } from './styled'

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem

  return (
    <CartItemContainer>
      <img
        src={imageUrl}
        alt={name}
      />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem
