import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Loader } from 'semantic-ui-react';

const SideBarItem = ({ icon, anchor }) => {
  return (
    <Link to={anchor}>
      {icon ? <Icon name={icon} /> : <Loader size="mini" active /> }
      <p>{anchor}</p>
    </Link>
  )
}

export default SideBarItem;