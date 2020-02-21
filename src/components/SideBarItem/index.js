import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Loader } from 'semantic-ui-react';
import SideBarItemStyle from './style';

const SideBarItem = ({ icon, anchor, selected }) => {
  console.log({ icon });
  return (
    <SideBarItemStyle>
      <Link to={anchor}>
        {icon ? <Icon name={icon} /> : <Loader size="mini" active /> }
        <p selected={selected}>{anchor}</p>
      </Link>
    </SideBarItemStyle>
  )
}

export default SideBarItem;