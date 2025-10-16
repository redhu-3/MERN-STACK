import React from 'react'


const User = ({name,dep,skills}) => {
  return (
    <div>

      <h1>Hi Iam {name} from {dep} department </h1>
      <ol>
        {skills.map((skill)=>
        (
            <li>{skill}</li>
        ))}

      </ol>
      
    </div>
  )
}

export default User
