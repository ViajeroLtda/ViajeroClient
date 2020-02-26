import styled from 'styled-components';

const SideBarItemStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  height: 35px;
  a {
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    padding-left: 15px;
    color: #454545;
    &:hover {
      opacity: .8;
    }
    i {
      width: 20px;
      height: 20px;
    }
    p {
      font-weight: ${props => props.selected ? 'bolder' : 'normal'};
      margin-left: 10px;
    }
  }
`;

export default SideBarItemStyle;