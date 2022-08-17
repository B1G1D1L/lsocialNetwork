import React from 'react'

import {processAuth} from 'processes/auth'
import { WithProviders } from './providers'
import { Routing } from 'pages'
import { Header } from 'widgets/header/ui'
import { Navbar } from 'widgets/navbar/ui'

import './index.css'

function App() {
  React.useEffect(() => {
    processAuth.pageMounted()
  }, [])

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

