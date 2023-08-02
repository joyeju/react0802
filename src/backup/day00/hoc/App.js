import React from 'react'
import Click from './Click'
import MouseOver from './MouseOver'

const App = () => {
  return (
    <div>
        <Click  name={"my click"} />
        <MouseOver name={"my mouse over"} />
    </div>
  )
}

export default App