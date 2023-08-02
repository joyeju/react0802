import React, {useState , useEffect, useRef } from 'react'
//// localhost:3500/todos
import axios from 'axios'

const Todos = () => {
    const [todos, setTodos]=useState([])
    const TODO_URL = `http://localhost:3500/todos`
    //const makeup = `http://makeup-api.herokuapp.com/api/v1/products.json`

    const todoRef=useRef();
    const [todo, setTodo] =useState();

    const getHandle = async ()=>{
        // const rows = await fetch(TODO_URL);
        // const datas = await rows.json();
        // setTodos(datas)

        // fetch(TODO_URL)
        // .then(res=>res.json()) // axios 생략
        // .then( res=>{
        //     //console.log(res)
        //     setTodos(res);
        // })

        axios({
            method:'get',
            url: TODO_URL,
        }).then(res=>setTodos(res.data)); // res.data 사용
    }
    const postHandle = async ()=>{
        axios({
            method:'post',
            url: TODO_URL,
            data : {todo} // body, heades를 알아서 지정
        }).then(res=>setTodos(res.data)); 
    }
    const putHandle = async (id)=>{
        axios({
            method:'put',
            url: TODO_URL,
            data : {id} // body, heades를 알아서 지정
        }).then(res=>setTodos(res.data)); 
    }

    const deleteHandle = async (id)=>{
        axios({
            method:'delete',
            url: `${TODO_URL}/${id}`,
            data : {todo} // body, heades를 알아서 지정
        }).then(res=>setTodos(res.data)); 
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
        
        {/* <button  onClick={ ()=> putHandle(1) }>PUT</button> */}
        

        {
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

