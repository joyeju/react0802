import React from 'react'
import Line01 from './Line01'
import Line02 from './Line02'
import Line03 from './Line03'
import Bar01 from './Bar01'
import Bar02 from './Bar02'
import Bar03 from './Bar03'
import Pie01 from './Pie01'
import Pie02 from './Pie02'
import Pie03 from './Pie03'
// npm i recharts
// 데이터 시각화하는 측면에서 많이 사용됨 

const App = () => {
  return (
    <div>
        <Pie01 />
        <Pie02 />
        <Pie03 />
        <Bar02 />
        <Bar03 />
    </div>
  )
}

export default App