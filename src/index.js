import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { UserProvider } from './contexts/user.context'
import { CategoriesProvider } from './contexts/categories.context'
import { CartProvider } from './contexts/cart.context'
import App from './App'
import './index.scss'

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>
  </BrowserRouter>
)
