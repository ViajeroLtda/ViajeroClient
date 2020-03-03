import React from 'react';
import PostSidebarWrapper from './style';
import { Icon } from 'semantic-ui-react';

const favorited = false;
const PostSidebar = () => {
  return (
    <PostSidebarWrapper>
      <Icon name="caret up" />
      <span>10</span>
      <Icon name="caret down" />
      <Icon
        style={{ marginTop: '1em', fontSize: '1.5rem' }}
        name={`star${!favorited ? ' outline' : ''}`}
      />
    </PostSidebarWrapper>
  );
}

export default PostSidebar;