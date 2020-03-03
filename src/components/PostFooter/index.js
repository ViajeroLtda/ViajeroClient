import React from 'react';
import { iconDefaultSize } from '../../constants';
import { Icon, Divider } from 'semantic-ui-react';
import Like from '../Like';
import PostLikesSummaryLine from '../PostLikesSummaryLine';
import CommentBox from '../CommentBox';
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
      <Divider hidden />
      <section>
        <CommentBox />
      </section>
    </PostFooterWrapper>
  )
}

export default PostFooter;