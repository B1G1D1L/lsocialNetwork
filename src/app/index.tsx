import React from 'react'

import { WithProviders } from './providers'
import { Routing } from 'pages'
import { Header } from 'widgets/header/ui'

import './index.css'
import { Navbar } from 'widgets/navbar/ui'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Navbar />
        <Routing />
      </div>
    </div>
  )
}

export default WithProviders(App)

