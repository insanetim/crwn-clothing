import { screen } from '@testing-library/react'

import { renderWithProviders } from 'src/utils/test-utils'
import CartIcon from '../component'

describe('Cart Icon tests', () => {
  test('Uses preloaded state to render', () => {
    const initialCartItems = [
      { id: 1, name: 'Item A', imageUrl: 'test', price: 10, quantity: 1 },
    ]

    renderWithProviders(<CartIcon />, {
      preloadedState: {
        cart: {
          cartItems: initialCartItems,
        },
      },
    })

    const CartLogo = screen.getByText('1')
    expect(CartLogo).toHaveTextContent('1')
  })
})
