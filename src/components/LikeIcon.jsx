import React, { useEffect, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';

const LikeIcon = () => {
  //either add + to convert it to string or put the whole logic in  JSON.parse(); to convert it back to string

  const [count, setCount] = useState(+localStorage.getItem('count') || 0);
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(!liked);
    console.log('liked');
  };
  //issue resolved
  useEffect(() => localStorage.setItem('count', count), []);

  useEffect(() => {
    if (liked) {
      setCount(count + 1);
      localStorage.setItem('count', count + 1);
    }
    console.log(count, liked);
  }, [liked]);

  // useEffect(() => {
  //   if (liked) setCount((count) => count + 1);
  //   else {
  //     if (count > 0) setCount((count) => count - 1);
  //   }
  //   localStorage.setItem('count', count);
  // }, [liked]);

  return (
    <>
      <h1>Like Icon</h1>
      <button
        onClick={handleLike}
        style={liked ? { color: 'red' } : { color: 'black' }}
      >
        <FaRegHeart /> Like
      </button>
      {/* <span>{count}</span> */}
    </>
  );
};

export default LikeIcon;
