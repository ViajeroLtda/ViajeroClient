import React from 'react';
import { Divider } from 'semantic-ui-react';
import { iconDefaultSize } from '../../constants';
import { Icon } from 'semantic-ui-react';
import Like from '../Like';
import PostLikesSummaryLine from '../PostLikesSummaryLine';
import PostFooterWrapper from './style';

const PostFooter = () => {
  return (
    <PostFooterWrapper>
      <section>
        <Like />
        <Icon size={iconDefaultSize} name="comment outline" />
        <Icon size={iconDefaultSize} name="bookmark outline" />
      </section>
      <p></p>
      <section>
        <PostLikesSummaryLine />
      </section>
    </PostFooterWrapper>
  )
}

export default PostFooter;