import React from 'react';
import { Image, Icon, Header } from 'semantic-ui-react';
import PostHeaderWrapper from './style';


const PostHeader = () => {
  return (
    <>
      <PostHeaderWrapper>
        <Image 
          style={{ marginRight: '15px' }} 
          src="https://images.unsplash.com/photo-1503523258171-3a5244c91dfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2847&q=80"
          avatar
        />
        <Header as="h1">
          Como comprar um Opal Card na Australia para usar o transporte público ?
        </Header>
        <Icon name="ellipsis horizontal" />
      </PostHeaderWrapper>
      <p>Asked <strong>3 months ago</strong></p>
    </>
  );
}

export default PostHeader;