import React from 'react'
import { Link  } from 'react-router-dom'
import './Pagination.css'

// 총 li 개수 
// coins.length / 한화면에 보여질 개수 
// active : 현재 보여질 개수 
// coinTotals={coins.length} 
//                 postsPerPage={postsPerPage}   
//                 currentPage={currentPage}
//                 setCurrentPage={setCurrentPage}
const Pagination = ({
   coinTotals, postsPerPage, currentPage, setCurrentPage
}) => {
  
  // 102
  // 1*10, 2*10, 3*10, 4*10, 5*10, 6*10, 7*10, 8*10, 9*10, 10*10, 2
   const pageNumbers = [];
   for( let i=1; i<=Math.ceil(coinTotals/postsPerPage); i++ ){
      pageNumbers.push(i)
   }
  
   const updatePagerNumber = (number)=>{
      // 처리 
      //  if( number < pageNumbers[0] ){
      //     return false; 
      //  }else if ( number > pageNumbers.length ){
      //     return false; 
      //  }
       setCurrentPage( number );
   }

  return (
    <div className='pager-container'>
        {/* <h2>Pagination</h2> */}
        <button onClick={()=>updatePagerNumber(currentPage-1)}
                style={{ display : currentPage === pageNumbers[0] ? "none" : "block"}}
        >이전</button>
        <ul className='pagers'>
          {
            pageNumbers.map((number,index)=>(
                <li className={ number === currentPage ? "active" : "" }
                    onClick={()=>setCurrentPage(number)}
                >{number}</li>
            ))
          }
        </ul>
        <button onClick={()=>updatePagerNumber(currentPage+1)}
                style={{ display : currentPage === pageNumbers.length  ? "none" : "block"}}
        >이후</button>
    </div>
  )
}

export default Pagination