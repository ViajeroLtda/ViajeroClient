import React from 'react';
import { Icon } from 'semantic-ui-react';
import Like from '../Like';
import PostFooterWrapper from './style';

const PostFooter = () => {
  return (
    <PostFooterWrapper>
      <Like numberOfLikes="108532" />
      <Icon name="comment outline" />
      <Icon name="paper plane outline" />
    </PostFooterWrapper>
  )
}

export default PostFooter;