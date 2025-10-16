import React from 'react'

const Props = ({movies,keyval}) => {
  return (
    <div>
      <h1>Favourite movies</h1>
      <ol>
       {movies.map((m)=>
      (
        <li>{m}</li>
      ))}
      </ol>
      
    </div>
  )
}

export default Props;
