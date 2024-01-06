import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Elements } from '@stripe/react-stripe-js'

import App from './App'
import { store, persistor } from './store'
import { stripePromise } from './utils/stripe'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <PersistGate
      persistor={persistor}
      loading={null}
    >
      <BrowserRouter>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </BrowserRouter>
    </PersistGate>
  </Provider>
)

serviceWorkerRegistration.register()
