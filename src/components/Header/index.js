import React from 'react';
import { Image } from 'semantic-ui-react';
import Logo_Horizontal from '../../images/viajero_horizontal.png';
import HeaderStyle from './style';

const Header = () => {
  return (
    <HeaderStyle>
      <Image height="30" src={Logo_Horizontal} />
      <Image avatar src="https://instagram.fsyd2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/35275904_599325780467498_6953914173801627648_n.jpg?_nc_ht=instagram.fsyd2-1.fna.fbcdn.net&_nc_ohc=BRx0DAbQfRYAX85QOg9&oh=e2281da8896e028956dd33957cee318c&oe=5E99CE3B" />
    </HeaderStyle>
  )
}

export default Header;
