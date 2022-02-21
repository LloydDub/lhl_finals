import { useState } from 'react'
import {Welcome, Navbar, Footer, Transaction, CollectionCard} from './components'
import MultipleItems from './components/CollectionCard'

function App() {
 

  return (
    <div className="min-h-screen">
     <div className="gradient-bg-welcome">
       <Navbar />
       <Welcome />
     </div>
     <MultipleItems />
     <Transaction />
     <Footer />
    </div>
  )
}

export default App
