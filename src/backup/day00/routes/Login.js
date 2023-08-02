import React, {useRef, useEffect , useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useAuth } from '../contexts/auth'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const auth = useAuth(); // {user, login, logout }

    const [ userid, setUserid] = useState("");
    const [ userpw, setUserpw] = useState("");

    const [ show, setShow ] = useState(false);
    const [ pwdType, setPwdType ] = useState('password');
    const useridRef = useRef();
    const userpwRef = useRef();
    
    const navigate = useNavigate(); 

    useEffect(()=>{
        useridRef.current.focus();
    }, [])

    const login = ()=>{
        if( useridRef.current.value === '' || userpwRef.current.value === ''){
            alert('아이디 또는 비밀번호를 입력하세요.');
            useridRef.current.focus();
            return false; 
        }
        console.log( userid, userpw )

        setUserid( useridRef.current.value );
        setUserpw( userpwRef.current.value );

        alert(`${useridRef.current.value}님 환영합니다.`);
        useridRef.current.value = '';
        userpwRef.current.value = '';
        //다른 url로 넘어가기

        auth.login(userid); /// 로그인한 정보를 저장 
        navigate('/'); // 페이지로 이동 
    }

    const onPassWordShow = ()=>{
        setShow(!show);
        setPwdType( show ? "password" : "text")
    }
 
  return (
    <div>
        <div>
             <input type="text"  ref={useridRef} placeholder='아이디'
                  onChange={ e=>setUserid(e.target.value)}

             />
        </div>
        <div>
            <input type={pwdType}  ref={userpwRef} placeholder='비밀번호'
                 onChange={ e=>setUserpw(e.target.value)}
            />
            <input type="checkbox"  onChange={onPassWordShow}  id="showpw" />
            <label htmlFor="showpw">
                {
                    show ? <AiFillEye /> : <AiFillEyeInvisible /> 
                }
            </label>
        </div>
        <button onClick={login}> 로그인 </button>
    </div>
  )
}

export default Login