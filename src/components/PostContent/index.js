import React from 'react';
import Gallery from '../Gallery';
import PostText from '../PostText';
import PostSidebar from '../PostSidebar';
import PostContentWrapper from './style';

const PostContent = () => {
  return (
    <PostContentWrapper>
      <PostSidebar />
      <div>
        <PostText />
        <Gallery />
      </div>
    </PostContentWrapper>
  )
}

export default PostContent;