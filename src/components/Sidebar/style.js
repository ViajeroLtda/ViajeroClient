import styled from 'styled-components';

const SideBarStyled =  styled.aside`
  background: #e8e8e8;
  height: 100vh;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left:0;
    top: -2rem;
    width: 100%;
    height: 2rem;
    background: inherit;
  }
`;

export default SideBarStyled;