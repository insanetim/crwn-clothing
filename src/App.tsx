import { useEffect, lazy, Suspense } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import Spinner from './components/Spinner'
import { checkUserSession } from './store/user/actions'

const Navigation = lazy(() => import('./routes/Navigation'))
const Home = lazy(() => import('./routes/Home'))
const Shop = lazy(() => import('./routes/Shop'))
const Checkout = lazy(() => import('./routes/Checkout'))
const Authentication = lazy(() => import('./routes/Authentication'))

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route
          path='/'
          element={<Navigation />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path='shop/*'
            element={<Shop />}
          />
          <Route
            path='checkout'
            element={<Checkout />}
          />
          <Route
            path='auth'
            element={<Authentication />}
          />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
