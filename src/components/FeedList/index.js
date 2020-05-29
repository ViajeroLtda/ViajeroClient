import React from 'react';
import { Header, Icon, Divider } from 'semantic-ui-react';

const FeedList = ({ feedItems }) => {
  const list = [
    {
      _id: '0001',
      title: '1st item',
      author: 'soy jo',
      description: 'lorem ipsum lorem ipsum',
      category: 'question'
    },
    {
      _id: '0002',
      title: '2nd item',
      author: 'soy jo2',
      description: 'lorem ipsum lorem ipsum',
      category: 'discussions',
    },
  ]
  return (
    <>
      {list.map(item => (
        <React.Fragment key={item._id}>
          <Header as='h2'>
            <Icon name={item.category} />
            <Header.Content>
              {item.title}
              <Header.Subheader>{item.description}</Header.Subheader>
            </Header.Content>
          </Header>
          <Divider />
        </React.Fragment>
      ))}
    </>
  )
}

export default FeedList;
