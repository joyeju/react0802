import React, {useState , useEffect, useRef } from 'react'
//// localhost:3500/todos
import axios from 'axios'

const Todos = () => {
    const [todos, setTodos]=useState([])
    const TODO_URL = `http://localhost:3500/todos`
    const [isLoading, setIsLoading] = useState(true);
    // loading 제어하는 state
   
    const todoRef=useRef();
    const [todo, setTodo] =useState();

    const getHandle = async ()=>{
        // const rows = await fetch(TODO_URL);
        // const datas = await rows.json(); // json전환을 axios 알아서 처리함 
        // setTodos(datas)
        
        const rows = await axios.get(TODO_URL);
        setTodos(rows.data); // data에만 있음 

        setIsLoading(false);
    }
    const postHandle = async ()=>{
        const rows = await axios.post(TODO_URL, {todo});
        setTodos(rows.data); // data에만 있음 
 
        setTodo("");
    }
    const putHandle = async (id)=>{
        const rows = await axios.put(TODO_URL, {id});
        setTodos(rows.data);
    }

    const deleteHandle = async (id)=>{
        const rows = await axios.delete(`${TODO_URL}/${id}`)
        setTodos(rows.data); 
    }

    // 화면이 Loading될때 처리되는 함수
    useEffect(()=>{
         getHandle();
    }, [])
    
  return (
    <div>
        {/* <button  onClick={ getHandle }>GET</button> */}
        <div>
            <input ref={todoRef} value={todo} 
                    onChange={ (e)=>setTodo(e.target.value)}
            />
            <button  onClick={ postHandle }>등록</button>
        </div>
        
        {
            isLoading ? <div>Loading...</div> : 
            !todos.length ? <div>데이터를 찾을 수 없습니다.</div> : 
            <ul>
                {
                    todos.map(todo=>(
                        <li key={todo.todo}>
                            <span>{todo.id}</span>
                            <input type="checkbox"  checked={todo.checked} 
                                onChange={()=>putHandle(todo.id)}
                                id={`complete${todo.id}`}
                            />
                            <label htmlFor={`complete${todo.id}`}
                                   style={{
                                    textDecoration : todo.checked ? "line-through" : "none"
                                   }}
                            >{todo.todo}</label>
                            <button  onClick={ ()=> deleteHandle(todo.id) }>DELETE</button>
                        </li>
                    ))
                }
            </ul>    
        }
    </div>
  )
}

export default Todos

