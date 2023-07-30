import React, {useState, useEffect } from 'react'
import './Posts.css'

const datas = [
  {
    id : 1, 
    title: `스텔라루멘(XLM), 아쿠아(AQUA) 서비스 안정화를 위한 입출금 일시 중단 안내`,
    body : `스텔라루멘(XLM), 아쿠아(AQUA) 서비스 안정화를 위한 입출금 일시 중단 안내

    안녕하세요, 코인원입니다.
    
    스텔라루멘(XLM), 아쿠아(AQUA) 서비스 안정화를 위한 입출금 일시 중단을 다음과 같이 안내드립니다.
   
    - 중단 시점: 2023년 7월 27일(목), 14:05 (KST) ~ 2023년 7월 27일(목), 17:27 (KST)
    
    - 중단 사유: 스텔라루멘(XLM), 아쿠아(AQUA) 서비스 안정화
    
    - 중단 영향: 기간 내 스텔라루멘(XLM) 입출금, 아쿠아(AQUA) 출금 중단
    
    
    
    유의 사항
    
    ⁃ 입출금 재개 시점은 네트워크 안정성 확인 후 본 공지 업데이트 내용을 통해 안내 드리겠습니다.
    
    ⁃ 입출금 중단과 무관하게 스텔라루멘(XLM), 아쿠아(AQUA) 거래는 정상 이용 가능합니다.
    
    ⁃ 입출금 중단 기간동안 입금되는 스텔라루멘(XLM), 아쿠아(AQUA)의 경우 반영이 되지 않을 수 있으니 주의하시기 바랍니다.
    
    
    
    이용에 불편을 드린 점 양해 부탁드립니다.
    
    
    
    감사합니다.
    `,
    datetime : `2023-07-27`
  },
  {
    id : 2, 
    title: `스텔라루멘(XLM), 아쿠아(AQUA) 서비스 안정화를 위한 입출금 일시 중단 안내`,
    body : `스텔라루멘(XLM), 아쿠아(AQUA) 서비스 안정화를 위한 입출금 일시 중단 안내

    안녕하세요, 코인원입니다.
    
    스텔라루멘(XLM), 아쿠아(AQUA) 서비스 안정화를 위한 입출금 일시 중단을 다음과 같이 안내드립니다.
   
    - 중단 시점: 2023년 7월 27일(목), 14:05 (KST) ~ 2023년 7월 27일(목), 17:27 (KST)
    
    - 중단 사유: 스텔라루멘(XLM), 아쿠아(AQUA) 서비스 안정화
    
    - 중단 영향: 기간 내 스텔라루멘(XLM) 입출금, 아쿠아(AQUA) 출금 중단
    
    
    
    유의 사항
    
    ⁃ 입출금 재개 시점은 네트워크 안정성 확인 후 본 공지 업데이트 내용을 통해 안내 드리겠습니다.
    
    ⁃ 입출금 중단과 무관하게 스텔라루멘(XLM), 아쿠아(AQUA) 거래는 정상 이용 가능합니다.
    
    ⁃ 입출금 중단 기간동안 입금되는 스텔라루멘(XLM), 아쿠아(AQUA)의 경우 반영이 되지 않을 수 있으니 주의하시기 바랍니다.
    
    
    
    이용에 불편을 드린 점 양해 부탁드립니다.
    
    
    
    감사합니다.
    `,
    datetime : `2023-07-25`
  },
  {
    id : 3, 
    title: `스텔라루멘(XLM), 아쿠아(AQUA) 서비스 안정화를 위한 입출금 일시 중단 안내`,
    body : `스텔라루멘(XLM), 아쿠아(AQUA) 서비스 안정화를 위한 입출금 일시 중단 안내

    안녕하세요, 코인원입니다.
    
    스텔라루멘(XLM), 아쿠아(AQUA) 서비스 안정화를 위한 입출금 일시 중단을 다음과 같이 안내드립니다.
   
    - 중단 시점: 2023년 7월 27일(목), 14:05 (KST) ~ 2023년 7월 27일(목), 17:27 (KST)
    
    - 중단 사유: 스텔라루멘(XLM), 아쿠아(AQUA) 서비스 안정화
    
    - 중단 영향: 기간 내 스텔라루멘(XLM) 입출금, 아쿠아(AQUA) 출금 중단
    
    
    
    유의 사항
    
    ⁃ 입출금 재개 시점은 네트워크 안정성 확인 후 본 공지 업데이트 내용을 통해 안내 드리겠습니다.
    
    ⁃ 입출금 중단과 무관하게 스텔라루멘(XLM), 아쿠아(AQUA) 거래는 정상 이용 가능합니다.
    
    ⁃ 입출금 중단 기간동안 입금되는 스텔라루멘(XLM), 아쿠아(AQUA)의 경우 반영이 되지 않을 수 있으니 주의하시기 바랍니다.
    
    
    
    이용에 불편을 드린 점 양해 부탁드립니다.
    
    
    
    감사합니다.
    `,
    datetime : `2023-07-20`
  },
]

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isPostsLoading, setPostsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchPosts, setSearchPosts] = useState([]);

  useEffect(()=>{
      // axios 
      setPosts( datas );
      setPostsLoading( false );
  }, [])

  return (
    <div>
      {
        isPostsLoading ?  <div>Loading...</div> 
        : <form  onSubmit={ e=>e.preventDefault() }>
          <input type="text" id="search" onChange={ (e)=>setSearch(e.target.value) }/>
        </form>
      }
      {
        posts.length &&  <ul>
            {
              posts.map(post=>(
                <li key={post.datetime}>
                  <span>id : { post.id}</span>
                  <span>{ post.title}</span>
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