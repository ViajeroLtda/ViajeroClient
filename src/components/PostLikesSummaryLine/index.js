import React from 'react';
import { Image } from 'semantic-ui-react';
import { likesNumberFormatter } from '../../helpers';

const PostLikesSumaryLine = ({ numberOfLikes }) => {
  return (
    <small>
      Viewed by&nbsp;
      <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
      <span>UserXPTO</span> and other&nbsp;
      {likesNumberFormatter(12312 - 1)}
    </small>
  )
}

export default PostLikesSumaryLine;