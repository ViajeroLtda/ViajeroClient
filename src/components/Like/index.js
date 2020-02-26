import React, { useState, useContext, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';

const Like = ({ liked, likesNumber }) => {
  const [ isLiked, setIsLiked ] = useState(liked || false);
  const [ formatedLikesNumber, formatLikesNumber ] = useState("");
  useEffect(() => {
    formatLikesNumberToK(likesNumber || 0);
  }, []);

  const formatLikesNumberToK = (likesNumber) => {
    console.log(formatLikesNumber(
      Math.abs(likesNumber) > 999 ? (
        `${Math.sign(likesNumber)*((Math.abs(likesNumber)/1000).toFixed(1))}k`
      ) : (
        Math.sign(likesNumber)*Math.abs(likesNumber)
      )
    ));
  }
  return (
    <>
      <Icon color={liked && 'red'} name={`heart${!liked ? ' outline' : ''}`} />
      {formatedLikesNumber < 1 ? 0 : formatedLikesNumber}
    </>
  )
}

export default Like;
