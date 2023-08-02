import React, {useState, useEffect } from 'react'
import './Posts.css'
import { Link }  from 'react-router-dom'
import { useContext } from 'react'
import { DataContext} from '../contexts/DataContext';

const Posts = () => {
  const  {
      setSearch, 
      searchPosts,
      isPostsLoading 
  } = useContext(DataContext)

  return (
    <div>
      {
        isPostsLoading ?  <div>Loading...</div> 
        : <form  onSubmit={ e=>e.preventDefault() }>
          <input type="text" 
                  id="search" 
                  onChange={ (e)=>setSearch(e.target.value) }
                  autoComplete='off'
                  placeholder='검색어를 입력하세요.'
          />
        </form>
      }
      {
        searchPosts.length &&  <ul>
            {
              searchPosts.map(post=>(
                <li key={post.datetime}>
                  <span>id : { post.id}</span>
                  <Link to={`/posts/${post.id}`}>
                      <span>{ post.title}</span>
                  </Link>
                  <span>{ post.body}</span>
                  <span>{ post.datetime}</span>
                </li>
              ))
            }
        </ul>
      }
    </div>
  )
}

export default Posts