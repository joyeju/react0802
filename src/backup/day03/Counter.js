import React from 'react'
import { useState, useEffect } from 'react'


const App = () => {
   
  return (
    <div>
       <Counter  />
       <Counter number={5} />
       <Counter number={22} />
    </div>
  )
}
 

const Counter = (props)=>{
  //const [counter, setCounter ] = useState(props.number);
  const [counter, setCounter ] = useState(props.counter);
  const countFunc = ()=>{
          setCounter( counter + props.number );
  }
  return(
      <div>
          <button onClick={ countFunc }> counter {counter} </button>
      </div>
  )
}

Counter.defaultProps ={
  counter  : 0
}

// Counter.defaultProps ={
//   number  : 1
// }
export default App