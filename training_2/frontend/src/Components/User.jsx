import React, { useContext } from "react";
import { UserContext } from "../App";

const User = ({ age }) => {
  const name = useContext(UserContext);

  const skills = ["React", "JavaScript", "CSS"];

  return (
    <div>
      <h1>Hi I am {name} from {age} department</h1>

      <ol>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ol>
    </div>
  );
};

export default User;
