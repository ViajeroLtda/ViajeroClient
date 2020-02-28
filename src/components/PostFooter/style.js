import styled from 'styled-components';

const PostFooterWrapper = styled.footer`
  width: 100%;
  section {
    width: 100%;
    display: flex;
    flex-direction: row;
    i:not(:first-of-type) {
      margin-left: 20px;
    }
    i:last-of-type {
      margin-left: auto;
    }
  }
`;

export default PostFooterWrapper;