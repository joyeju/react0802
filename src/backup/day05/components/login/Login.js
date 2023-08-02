import React, { useState, useRef } from 'react'
// hook : 
// document.querySelector()

const Login = () => {
    const [ userId, setUserId] = useState("")
    const [ userPwd, setUserPwd] = useState("")
    const userIdRef = useRef(); // document.querySelector()
    // userIdRef = { current : userId }
    const userPwdRef = useRef();
    // userPwdRef = { current : userId }

    // userIdRef.current.focus();
    console.log( userPwdRef );
    const idChangehandle = (e)=>{
        setUserId(e.target.value); // 화면에 보이지 않아도 되면 안써도 됨
        console.log(userIdRef.current.value)
    }
    const submitHandle = (event) =>{
        event.preventDefault()
    }
    const loginHandle = ()=>{
        //console.log(document.querySelector('#user_id').value);
        const user = { userId, userPwd }
        console.log(user);
        // setUserId("");
        // setUserPwd("");
        userIdRef.current.value=""
        userPwdRef.current.value=""
    }
  return (
    <div>
        <form className='form'  onSubmit={(e)=>e.preventDefault()}>
        {/* <form className='form'  onSubmit={(event)=> submitHandle(event) }> */}
            <div>
                <label htmlFor='user_id'> 아이디 </label>
                <input type="text" id="user_id" 
                        onChange={(e)=>idChangehandle(e)}
                        value={userId}
                        ref={ userIdRef }
                />
            </div>
            <div>
                <label htmlFor='user_pwd'> 비밀번호 </label>
                <input type="password" id="user_pwd" 
                        onChange={(e)=>setUserPwd(e.target.value)}
                        value={userPwd}
                        ref={ userPwdRef}
                />
            </div>
            <button onClick={ loginHandle }>로그인</button>
        </form>
    </div>
  )
}

export default Login