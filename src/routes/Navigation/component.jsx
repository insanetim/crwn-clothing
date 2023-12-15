import { Outlet, Link } from 'react-router-dom'

import CrwnLogo from '../../assets/crown.svg'
import './styles.scss'

const Navigation = () => {
  return (
    <>
      <div className='navigation'>
        <Link
          className='logo-container'
          to='/'
        >
          <img
            className='logo'
            src={CrwnLogo}
            alt='logo'
          />
        </Link>
        <div className='nav-links-container'>
          <Link
            className='nav-link'
            to='/shop'
          >
            SHOP
          </Link>
          <Link
            className='nav-link'
            to='/sign-in'
          >
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
