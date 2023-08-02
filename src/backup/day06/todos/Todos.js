import React, { useRef, useState } from 'react'

const items = [
    {
        id:1,
        checked:false,
        todo:"html"
    },
    {
        id:2,
        checked:false,
        todo:"css"
    }
]

const Todos = () => {
    const [ todo, setTodo ] = useState("");// 낱개
    const [ todos, setTodos ] = useState(items);// 모든 todo
    const todoRef = useRef();

    const addItem = ()=>{
        //const todo = document.querySelector("#inputtodo").value
        const id = todos[todos.length - 1].id + 1; 
        const todo = todoRef.current.value;
        const newItem = {
            id, checked : false, todo 
        }
        //console.log(todo);
        // items.push(item); // 화면을 갱신하지 않는다.
        // setTodos(todos.push(item)) // push()
        setTodos([...todos, newItem])
        todoRef.current.value = ""
    }

    const checkedHandle = (id)=>{
        console.log(id);
        const update = todos.map(todo=>todo.id === id ? 
            { ...todo, checked :  !todo.checked  }: todo);
            //주의
        setTodos( update )
    }
    const deleteHandle = (id)=>{
        console.log(id);
        const filtered = todos.filter(todo=>todo.id !== id );
            //주의
        setTodos( filtered )
    }
  return (
    <div>
        <form onSubmit={(e)=>e.preventDefault()}>
            <div>할일을 등록하세요.</div>
            <input  type="text" id="inputtodo"  ref={todoRef}/>
            <button onClick={addItem}>등록</button>
        </form>
        <div className='todos-list'>
            <ul>
            {
                todos.map(todo=>(
                    <li>
                        <span>{todo.id}</span>
                        <input type="checkbox"  
                               checked={todo.checked}  
                               id={`todo${todo.id}`}
                               onChange={()=>checkedHandle(todo.id)}       
                        /> 
                        <label htmlFor={`todo${todo.id}`}
                               style={{textDecoration : todo.checked ? "line-through" : "none"}}
                        >{todo.todo}</label>
                        <button onClick={ ()=>deleteHandle(todo.id)}>삭제</button>
                    </li>
                ))
            }
            </ul>
        </div>
    </div>
  )
}

export default Todos