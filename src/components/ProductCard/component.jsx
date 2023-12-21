import { useDispatch, useSelector } from 'react-redux'

import { addItemToCart } from 'src/store/cart/actions'
import { selectCartItems } from 'src/store/cart/selectors'
import Button, { BUTTON_TYPE_CLASSES } from '../Button'
import { ProductCardContainer, Footer } from './styled'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product))
  }

  return (
    <ProductCardContainer>
      <img
        src={imageUrl}
        alt={name}
      />
      <Footer>
        <span>{name}</span>
        <span>{price}</span>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard
