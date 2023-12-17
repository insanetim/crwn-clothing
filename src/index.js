import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { UserProvider } from './contexts/user.context'
import App from './App'
import './index.scss'

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>
)
