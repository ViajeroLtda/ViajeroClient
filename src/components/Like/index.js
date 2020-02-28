import React, { useState, useEffect } from 'react';
import { iconDefaultSize } from '../../constants';
import { Icon } from 'semantic-ui-react';

const Like = ({ liked, numberOfLikes }) => {
  const [ isLiked, setIsLiked ] = useState(liked || false);
  return (
    <>
      <Icon
        size={iconDefaultSize}
        color={isLiked && 'red'} name={`heart${!isLiked ? ' outline' : ''}`}
        onClick={() => setIsLiked(!isLiked)}
      />
    </>
  )
}

export default Like;
