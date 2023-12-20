import { Outlet } from 'react-router-dom'

import Directory from '../../components/Directory'

const Home = () => {
  return (
    <>
      <Directory />
      <Outlet />
    </>
  )
}

export default Home
