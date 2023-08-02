import React from 'react'

const Header = ({user}) => {
  return (
    <div>
        <h1>LOGO</h1>
        <div>
        {
            user ? user.name : null
        }

        </div>
    </div>
  )
}

export default Header