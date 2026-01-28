import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

const GetUser = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])

  return (
    <div>
      <h1>Users</h1>

      {user.map((u) => (
        <div key={u.id}>
          <h2>
            {u.name.firstname}
          </h2>
          <h3>{u.email}</h3>
          <Link to={`/users/${u.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  )
}

export default GetUser
