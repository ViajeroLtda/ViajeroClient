import React from 'react';
import { Loader } from 'semantic-ui-react';
import SideBarStyled from './style';

const SideBarComponent = ({ items, children }) => {
  if (!items) return <Loader active inverted />
  return (
    <SideBarStyled>
      {items.map(i => (
        <span>{i.title}</span>
      ))}
    </SideBarStyled>
  )
}

export default SideBarComponent;