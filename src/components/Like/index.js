import React, { useState, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';

const Like = ({ liked, numberOfLikes }) => {
  const [ isLiked, setIsLiked ] = useState(liked || false);
  const [ formatedNumberOfLikes, formatnumberOfLikes ] = useState("");
  useEffect(() => {
    formatnumberOfLikesToK(numberOfLikes || 0);
  }, [numberOfLikes]);

  const formatnumberOfLikesToK = (numberOfLikes) => {
    return (
      Math.abs(numberOfLikes) > 999 ? (
        formatnumberOfLikes(`${Math.sign(numberOfLikes) * ((Math.abs(numberOfLikes)/1000).toFixed(1))}k`)
      ) : (
        formatnumberOfLikes(Math.sign(numberOfLikes) * Math.abs(numberOfLikes))
      )
    )
  }
  return (
    <>
      <Icon
        color={isLiked && 'red'} name={`heart${!isLiked ? ' outline' : ''}`}
        onClick={() => setIsLiked(!isLiked)}
      />
      {formatedNumberOfLikes < 1 ? null : formatedNumberOfLikes}
    </>
  )
}

export default Like;
