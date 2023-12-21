import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { selectCurrentUser } from 'src/store/user/selectors'
import { selectIsCartOpen } from 'src/store/cart/selectors'
import { signOutUser } from 'src/utils/firebase'
import CartIcon from 'src/components/CartIcon'
import CartDropdown from 'src/components/CartDropdown'
import CrwnLogo from 'src/assets/crown.svg'
import {
  NavigationContainer,
  LogoContainer,
  Logo,
  NavLinks,
  NavLink,
} from './styled'

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)

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
