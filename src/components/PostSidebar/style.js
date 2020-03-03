import styled from 'styled-components';

const PostSidebarWrapper = styled.aside`
  height: 100%;
  width: 75px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  margin-right: .5em;
  i {
    margin: 0;
  }
  span {
    line-height: 2rem;
    margin-bottom: 10px;
  }
`;

export default PostSidebarWrapper;