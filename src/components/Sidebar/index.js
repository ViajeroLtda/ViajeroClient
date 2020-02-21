import React from 'react';
import { Loader } from 'semantic-ui-react';
import SideBarItem from '../SideBarItem';
import SideBarStyled from './style';

const SideBarComponent = ({ items, children }) => {
  if (!items) return <Loader active inverted />
  return (
    <SideBarStyled>
      {items.map(i => (
        <SideBarItem icon={i.icon} anchor={i.anchor} />
      ))}
    </SideBarStyled>
  )
}

export default SideBarComponent;