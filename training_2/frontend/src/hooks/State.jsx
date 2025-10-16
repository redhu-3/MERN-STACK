import React, { useState } from 'react';

const State = () => {
  const [count, setCount] = useState(0);
  const [like, setLike] =useState(0);
  const [dislike,setDislike]=useState(0);
  const handleLike=()=>
  {
    setLike(like+1);
  }
  const handleDislike=()=>
  {
    setDislike(dislike+1);
  }

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Like:{like}</h1>
      <h1>Dislike:{dislike}</h1>
      <button className="inc" onClick={handleIncrement}>Increment</button>
      <button className="dec" onClick={handleDecrement}>Decrement</button>
      <button className="rese" onClick={handleReset}>Reset</button>
      <button className='like' onClick={handleLike}>Like</button>
      <button className='dislike' onClick={handleDislike}>Dislike</button>
    </div>
  );
};

export default State;
