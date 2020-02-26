import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Loader } from 'semantic-ui-react';
import SideBarItemStyle from './style';

const SideBarItem = ({ icon, anchor, selected }) => {
  return (
    <SideBarItemStyle selected={selected}>
      <Link to={anchor.toLowerCase()}>
        {icon ? <Icon name={icon} /> : <Loader size="mini" active /> }
        <p>{anchor}</p>
      </Link>
    </SideBarItemStyle>
  )
}

export default SideBarItem;