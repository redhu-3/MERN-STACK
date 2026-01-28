import React, { useState } from 'react'
import { Link } from "react-router-dom"
import User from "../Components/User"
import { UserContext } from '../App'

const Home = () => {
  const [user, setUser] = useState("abcd")

  return (
    <div>
      <h1>Home</h1>

      <ul>
        <li>
          <Link to='/state'>useState</Link>
        </li>
        <li>
          <Link to='/effect'>useEffect</Link>
        </li>
        <li>
          <Link to='/reducer'>useReducer example</Link>
        </li>
        <li>
          <Link to='/contact'>Form example</Link>
        </li>
      </ul>

      <UserContext.Provider value={user}>
        <User age={33} />
      </UserContext.Provider>
    </div>
  )
}

export default Home
