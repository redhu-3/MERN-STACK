import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

const GetUserDetails = () => {
  const [user, setUser] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
  }, [id])

  if (!user) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <h1>User Details</h1>

      <h2>
        {user.name.firstname} {user.name.lastname}
      </h2>
      <h3>Email: {user.email}</h3>
      <h4>Password: {user.password}</h4>
    </div>
  )
}

export default GetUserDetails
