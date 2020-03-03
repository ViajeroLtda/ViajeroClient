import React, { useState } from 'react';
import { iconDefaultSize } from '../../constants';
import { Icon } from 'semantic-ui-react';

const Like = ({ liked }) => {
  const [ isLiked, setIsLiked ] = useState(liked || null);
  return (
    <>
      <Icon
        size={iconDefaultSize}
        color={isLiked ? 'red' : null} name={`heart${!isLiked ? ' outline' : ''}`}
        onClick={() => setIsLiked(!isLiked)}
      />
    </>
  )
}

export default Like;
