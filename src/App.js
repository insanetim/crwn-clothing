import { Route, Routes } from 'react-router-dom'

import Navigation from './routes/Navigation'
import Authentication from './routes/Authentication'
import Home from './routes/Home'
import Shop from './routes/Shop'
import Checkout from './routes/Checkout'

const App = () => {
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
          path='shop'
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
