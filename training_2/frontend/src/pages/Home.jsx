import React from 'react'
import {Link} from "react-router-dom"

const home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to='/state'>usestate</Link>
        </li>
      </ul>
    </div>
  )
}

export default home
