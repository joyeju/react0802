import React from 'react'

const WrapLayout = (Component, id, className) => function HOC(){
  return (
    <div id={id} className={className}>
        <Component />
    </div>
  )
}

export default WrapLayout