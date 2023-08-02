import React, { useState, useRef } from 'react'
import './Login.css'
import { BsFillEyeFill, BsEyeSlashFill } from "react-icons/bs";

const Login = ({user, setUser}) => {
  const [ pwShow, setPwShow ] = useState(false);
  const useridRef = useRef();
  const userpwRef = useRef();

  const loginHandle = ()=>{
       // error
       if( useridRef.current.value === ""){
            alert('id를 입력하세요.');
            useridRef.current.focus();
            // ref사용용도
       }else{
          const currentUser = {
            // name : document.querySelector('#user_id').value
            name : useridRef.current.value
          }
          setUser(currentUser);

          // setUserid("")
          // setUserpw("")
          useridRef.current.value = ""
          userpwRef.current.value = ""
       } 
  } 
  return (
    <div className='login-container'>
      <form className='login-content'
            onSubmit={ (e)=>e.preventDefault()}
      >
          <input  type="text" 
                  placeholder='아이디'
                  autoFocus
                  id="user_id"
                  ref={useridRef}
          />
          <input  type={ !pwShow ? "password" : "text"}
                  placeholder='비밀번호'
                  
                  id="user_pw"
                  ref={ userpwRef }
          />
          <div role="button" className='button'
               onClick={()=>setPwShow(!pwShow)}
          >
          {
            pwShow ? <BsFillEyeFill /> : <BsEyeSlashFill />
          }
          </div>
          
          <button onClick={ loginHandle }>로그인</button>
      </form>
    </div>
  )
}

export default Login