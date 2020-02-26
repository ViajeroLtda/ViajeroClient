import React from 'react';
import SideBarItem from '../SideBarItem';
import SideBarStyled from './style';

const SideBarComponent = ({ items }) => {
  if (!items) return <span></span>
  return (
    <SideBarStyled>
      {items.map((i, index) => (
        <SideBarItem 
          key={index}
          selected={index === 0 ? true : false}
          icon={i.icon}
          anchor={i.anchor} />
      ))}
    </SideBarStyled>
  )
}

export default SideBarComponent;