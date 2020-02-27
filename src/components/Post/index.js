import React from 'react';
import { Divider } from 'semantic-ui-react';
import Gallery from '../Gallery';
import Like from '../Like';

const Post = () => {
  return (
    <>
      <Gallery />
      <Divider />
      <Like numberOfLikes="108532" />
    </>
  )
}

export default Post;