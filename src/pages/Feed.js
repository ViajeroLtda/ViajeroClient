import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import FeedList from '../components/FeedList';

const Feed = () => {
  return (
    <Grid>
      <Grid.Column width={3}></Grid.Column>
      <Grid.Column width={3}></Grid.Column>
      <Grid.Column width={7}>
        <Segment>
          <FeedList />
        </Segment>
      </Grid.Column>   
    </Grid>
  )
}

export default Feed;