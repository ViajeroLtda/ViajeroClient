import styled from 'styled-components';

const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  img:not(:first-of-type) {
    margin-left: auto;
  }
`;

export default HeaderStyle;