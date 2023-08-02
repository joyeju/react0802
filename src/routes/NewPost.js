import React, { useState } from 'react' 
import { useContext } from 'react';
import { DataContext} from '../contexts/DataContext'; 

const NewPost = () => {
  const {
    postTitle, setPostTitle, 
    postBody, setPostBody, 
    onSubmit
  }  = useContext(DataContext);

  return (
    <div className='NewPost'>
        <h2>문의하기</h2>
        <form onSubmit={ onSubmit }>
            <label  htmlFor='postTitle'>제목</label>
            <input id='postTitle'
                    type='text'
                    required
                    value={ postTitle }
                    onChange={ (e)=> setPostTitle(e.target.value) }
                    autoComplete='off'
            />
            <label  htmlFor='postBody'>내용</label>
            <textarea id='postBody' 
                    required
                    value={ postBody }
                    onChange={ (e)=> setPostBody(e.target.value) }
            />
            <button type="submit"> 문의 </button>
        </form>
    </div>
  )
}

export default NewPost