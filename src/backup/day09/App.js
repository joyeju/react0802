import React, { useContext, useState , createContext} from 'react' 
// props, props driling
// state > 하위 컴포넌트에서 사용하려면 props 전달 
// 공통적으로 사용되는 state : user, theme
// context : props 드릴링  없이 직접 사용하도록 설정하기 위함 
// reduer, 리덕스, 몹엑스 

const CountContext = createContext();// 나는 공유 데이터야 


const App = () => {
  const [ count, setCount ] = useState(0);

  return (
     <CountContextProvider>
        <div>
            <SubComp1 count={count} setCount={setCount} />
        </div>
     </CountContextProvider>
  )
}

export default App

const SubComp1 = ( )=>{
    return (
        <div>
            SubComp1
            <SubComp2   />
        </div>
    )
}
const SubComp2 = ( )=>{
    return (
        <div>
            SubComp2
            <SubComp3   />
        </div>
    )
}

/// 마지막 컴포넌트에서 직접 데이터를 사용 
const SubComp3 = ()=>{
    const {count, setCount} = useContext(CountContext )
    return (
        <div>
            SubComp3 { count }

            <button onClick={()=>setCount(count+1)}> count </button>
        </div>
    )
}