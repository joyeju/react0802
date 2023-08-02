import React, { useEffect, useState, useRef } from 'react'
import './PostDetail.css'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { DataContext} from '../contexts/DataContext';
import { format } from 'date-fns'


const PostDetail = () => {
  const {
    posts, setPosts, onDeleteHandle,
    updatePost, setUpdatePost,
    postTitle, setPostTitle,
    postBody, setPostBody
  } = useContext(DataContext);

  const { id } = useParams();
  const [ findPost, setFindPost ] = useState(null);
  const navigate = useNavigate();
  // 컴포넌트내의 함수에서 라우트에 접근하기위한 것

  useEffect(()=>{
        const find = posts.find( post => Number(post.id) === Number(id) );
        if( !find ) return navigate('/posts');

        setFindPost(find);
        // 
        setPostTitle(find.title);
        setPostBody(find.body);
  },[])

  const updateTitleRef = useRef();
  const updateHandle = ()=>{
      updateTitleRef.current.focus();// 커서깜박거리게 함 
      setPostTitle(postTitle);
      setPostBody(postBody);
      console.log("updatePost", updatePost,  postTitle);

      setUpdatePost(!updatePost);

      // 수정한 객체 만들기 
      const newPost = { 
        id, 
        title : postTitle, 
        body : postBody, 
        datetime : format(new Date(), 'yyyy-MM-dd')
      }

      // 기존데이터 지우고 
      const filter = posts.filter(post=>Number(post.id) !== Number(id));
      const allPosts = [...filter, newPost];
      // id기준으로 역순 나열 
      const sortPosts = allPosts.sort((prev, next)=>next.id-prev.id);
      setPosts( sortPosts );
  }
 
  return (
    <div>
        <h3>PostDetail {id} </h3>
        {/* <h4>{findPost && findPost.title}</h4>
        <p>{findPost && findPost.body}</p> */}

        <input type="text"
               value={postTitle}
               readOnly={!updatePost}
               ref={ updateTitleRef }
               onChange={ (e)=>setPostTitle(e.target.value)}
        />

        <textarea 
                  value={postBody}
                  readOnly={!updatePost}
                  onChange={ (e)=> setPostBody(e.target.value) }
            />
 
        <button  onClick={ ()=>navigate('/posts') }>뒤로가기</button>
        <div>
            {
                !updatePost ? 
                <button  onClick={ updateHandle }>수정</button> 
                : <button  onClick={ ()=>setUpdatePost(!updatePost) }>완료</button> 
            }
        </div>
        <button  onClick={ ()=> onDeleteHandle(id )}>삭제</button>
    </div>
  )
}

export default PostDetail