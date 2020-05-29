import React, { useContext } from 'react';
import { Image } from 'semantic-ui-react';
import Context from '../../context';
import Logo_Horizontal from '../../images/viajero_horizontal.png';
import HeaderStyle from './style';

const Header = () => {
  const { state: { currentUser: { picture } } } = useContext(Context);
  return (
    <HeaderStyle>
      <Image height="30" src={Logo_Horizontal} />
      <Image avatar src={picture} />
    </HeaderStyle>
  )
}

export default Header;
