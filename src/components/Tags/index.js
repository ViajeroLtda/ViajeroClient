import React from 'react';
import { Label } from 'semantic-ui-react';

const tags = ['Ajuda', 'Australia', 'Lost & Found'];

const Tags = () => {
  return (
    <>
      {tags.map((i, index) => (
        <Label as="a" color="blue" basic style={{ marginLeft: index === 0 ? '0' : 'auto' }} >{i}</Label>
      ))}
    </>
  )
}

export default Tags;