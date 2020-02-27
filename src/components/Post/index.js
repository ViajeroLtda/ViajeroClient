import React from 'react';
import { Divider } from 'semantic-ui-react';
import Gallery from '../Gallery';
import PostHeader from '../PostHeader';
import PostFooter from '../PostFooter';

const Post = () => {
  return (
    <>
      <PostHeader />
      <Divider />
      <Gallery />
      <Divider />
      <PostFooter />
    </>
  )
}

export default Post;