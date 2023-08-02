import React, { useEffect, useState} from 'react'
import './PostDetail.css'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { DataContext} from '../contexts/DataContext';


const PostDetail = () => {
  const {
    posts, 
    onDeleteHandle, 
    updatePost, 
    setUpdatePost
  } = useContext(DataContext);

  const { id } = useParams();
  const [ findPost, setFindPost ] = useState(null);
  const navigate = useNavigate();
  // 컴포넌트내의 함수에서 라우트에 접근하기위한 것

  useEffect(()=>{
        const find = posts.find( post => Number(post.id) === Number(id) );
        setFindPost(find);
  },[])
 
  return (
    <div>
        <h3>PostDetail {id} </h3>
        <h4>{findPost && findPost.title}</h4>
        <p>{findPost && findPost.body}</p>

        {/* <Link to='/posts'>뒤로가기</Link> */} 
        <button  onClick={ ()=>navigate('/posts') }>뒤로가기</button>
        <button  onClick={ ()=>setUpdatePost(!updatePost) }>
            {
                updatePost ? "수정" : 
            }
        </button>
        <button  onClick={ ()=> onDeleteHandle(id )}>삭제</button>
    </div>
  )
}

export default PostDetail