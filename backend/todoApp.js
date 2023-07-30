// mkdir backend : 폴더만들기 
// cd backend : 폴더로 들어오기
// npm init -y :프로젝트 만들기 
// npm i express : 서버툴 설치 

const exp = require('constants');
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
// react서버와 node서버가 다른 위치에 있음 
// 서로 공유 가능 

// DATABASE에서 읽어오기
let todoList = [
    {
        id:1,
        checked:false,
        todo:'HTML'
    },
    {
        id:2,
        checked:false,
        todo:'CSS'
    },
    {
        id:3,
        checked:false,
        todo:'JAVASCRIPT'
    }
]

app.use((req, res, next)=>{
    console.log(`${req.url} ${req.method}`);
    next();
})
app.use(express.json())
app.use(express.urlencoded({extended:false}))


// CRUD : GET, POST, UPDATE, DELETE
// GET : localhost:3500/todos
// POST : localhost:3500/todos
// {
//     "todo":"React.js"
// }
// PUT : localhost:3500/todos
// {
//     "id":2
// }
// DELETE : localhost:3500/todos/1

app.get('/todos', (req, res)=>{
    res.json(todoList);
})

app.post('/todos', (req, res)=>{
    const { todo }= req.body; 
    console.log( JSON.stringify(req.body))
    const newTodo = {
        id : todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
        checked : false, 
        todo,
    }

    todoList.push(newTodo);

    res.json(todoList);
})

app.put('/todos', (req, res)=>{
    const id = req.body.id; 
    
    const todos = todoList.map( todo => todo.id === id ?
        { ...todo, checked :!todo.checked } : todo
        )

    todoList = todos; 

    res.json(todoList);
})

app.delete('/todos/:id', (req, res)=>{
    const id = req.params.id; 
    const todos = todoList.filter( todo => todo.id !== Number(id ) )
    todoList = todos; 
    console.log( todos.length )
    res.json(todoList);
})

app.listen(3500, ()=>{
    console.log('express server : ', 3500)
})