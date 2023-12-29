import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { signOutStart } from 'src/store/user/actions'
import { selectCurrentUser } from 'src/store/user/selectors'
import { selectIsCartOpen } from 'src/store/cart/selectors'
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
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)

  const signOutUser = () => {
    dispatch(signOutStart())
  }

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
