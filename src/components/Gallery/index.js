import React from 'react';
import { Image } from 'semantic-ui-react';
import Tags from '../Tags';

const Gallery = () => {
  return (
    <>
      <Image.Group size="tiny">
        <Image src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80" fluid />
        <Image src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" />
        <Image src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2156&q=80" />
        <Image src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" />
        <Image src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80" />
        <Image src="https://images.unsplash.com/uploads/1411400493228e06a6315/ad711a20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80" />
        <Image src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" />
      </Image.Group>
      <Tags />
    </>
  )
}

export default Gallery;