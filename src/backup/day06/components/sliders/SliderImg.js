import React from 'react'

const SliderImg = ({banner}) => {
  return (
    <div className='slider-img' >
        <h2>{banner.title}</h2>
        <img src={banner.icon} />
        <div>{banner.description}</div>
    </div>
  )
}

export default SliderImg