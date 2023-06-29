import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import PokemonApp from './PokemonApp.tsx'
import './index.css'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <PokemonApp />
    </Provider>
  </React.StrictMode>,
)
