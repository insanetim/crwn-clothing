import { useContext } from 'react'
import { Outlet } from 'react-router-dom'

import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'
import { signOutUser } from '../../utils/firebase'
import CartIcon from '../../components/CartIcon'
import CartDropdown from '../../components/CartDropdown'
import CrwnLogo from '../../assets/crown.svg'
import {
  NavigationContainer,
  LogoContainer,
  Logo,
  NavLinks,
  NavLink,
} from './styled'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo
            src={CrwnLogo}
            alt='logo'
          />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink
              as='span'
              onClick={signOutUser}
            >
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation
