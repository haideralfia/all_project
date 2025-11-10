import React, { useEffect, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';

const LikeIcon = () => {
  //either add + to convert it to string or put the whole logic in  JSON.parse(); to convert it back to string
  
  const [count, setCount] = useState(+localStorage.getItem('count') || 0);
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(!liked);
    console.log('liked');
    setCount(count + 1);
  };
  //issue here
  const handleCount = () => {
    setCount(count - 1);
  };
  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);
  return (
    <>
      <h1>Like Icon</h1>
      <button
        onClick={handleLike}
        onDoubleClick={handleCount}
        style={liked ? { color: 'red' } : { color: 'black' }}
      >
        <FaRegHeart /> Like
      </button>
    </>
  );
};

export default LikeIcon;
