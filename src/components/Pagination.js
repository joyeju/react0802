import React from 'react'
import './Pagination.css'

const Pagination = ({ 
    currentPage, setCurrentPage, postsPerPage, setPostPerPage,
    prevPageHandle, nextPageHandle
}) => {

    const pageNumbers = [];
    for(let i=1; i<= Math.ceil(100/postsPerPage); i++){
        pageNumbers.push(i) 
    }
  return (
    <div>Pagination
        <button onClick={prevPageHandle}
              style={{ display : currentPage === 1 ?  "none" : "block"}}
        > prev </button>
        <ul className='pagination'
        >
        {
            pageNumbers.map(number=>(
                <li onClick={ ()=>setCurrentPage(number)}>{number}</li>
            ))
        }
        </ul>
        <button onClick={nextPageHandle}
                style={{ display : currentPage === pageNumbers.length ?  "none" : "block"}}
        > next </button>
    </div>
  )
}

export default Pagination