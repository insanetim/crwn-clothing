import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'
import { store, persistor } from './store'

import './index.scss'

const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <PersistGate
      persistor={persistor}
      loading={null}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
