import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase'
import { setCurrentUser } from './store/user/actions'
import Navigation from './routes/Navigation'
import Authentication from './routes/Authentication'
import Home from './routes/Home'
import Shop from './routes/Shop'
import Checkout from './routes/Checkout'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      dispatch(setCurrentUser(user))
    })

    return unsubscribe
  }, [dispatch])

  return (
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
  )
}

export default App
