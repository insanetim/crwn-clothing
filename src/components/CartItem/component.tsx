import { CartItem as CartItemType } from 'src/store/cart/types'
import { CartItemContainer, ItemDetails, Name } from './styled'

type CartItemProps = {
  cartItem: CartItemType
}

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
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
