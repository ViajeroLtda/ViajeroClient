import React from 'react';
import { Image, Icon } from 'semantic-ui-react';
import PostHeaderWrapper from './style';


const PostHeader = () => {
  return (
    <PostHeaderWrapper>
      <Image src="https://images.unsplash.com/photo-1503523258171-3a5244c91dfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2847&q=80" avatar />
      <span>#Tailândia</span>
      <Icon name="ellipsis horizontal" />
    </PostHeaderWrapper>
  );
}

export default PostHeader;