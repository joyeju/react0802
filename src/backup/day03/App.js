import React from 'react'
import { Collepse } from './components/collepse/Collepse'
import Accordion from './components/accordion/Accordion'
import Tabs from './components/tabs/Tabs'
import Sidebar from './components/sidebar/Sidebar'
import './App.css'
import Counter from './Counter'

const App = () => {
  return (
    <div>
      {/* <Collepse />
      <Accordion /> */}
      <Tabs />
      <Sidebar />
      <Counter />
    </div>
  )
}

export default App