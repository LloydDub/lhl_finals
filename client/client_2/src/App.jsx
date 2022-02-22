import { useState } from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Welcome, NavBar, Footer, Transaction, CollectionCard, SignUp} from './components'
import MultipleItems from './components/CollectionCard'

function App() {
 

  return (
  
    <div className="min-h-screen">
     <div className="gradient-bg-welcome">
       <NavBar />
       <Welcome />
     </div>
     <MultipleItems />
     <div className="gradient-bg-welcome">
       <SignUp />
     </div>
     {/* <Transaction />
     <Footer /> */}
    </div>
  )
}

export default App
