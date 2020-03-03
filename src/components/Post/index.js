import React from 'react';
import { Divider } from 'semantic-ui-react';
import PostContent from '../PostContent';
import PostHeader from '../PostHeader';
import PostFooter from '../PostFooter';

const Post = () => {
  return (
    <>
      <PostHeader />
      <Divider />
      <PostContent />
      <Divider />
      <PostFooter />
    </>
  )
}

export default Post;