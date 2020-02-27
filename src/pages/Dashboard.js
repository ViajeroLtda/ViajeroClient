import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Post from '../components/Post';

const Dashboard = () => {
  return (
    <>
    <Grid>
      <Grid.Row>
        <Grid.Column width={16}>
          <Segment>HEADER</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Grid>
      <Grid.Column width={3}></Grid.Column>
      <Grid.Column width={7}>
        <Segment><Post /></Segment>
      </Grid.Column>
      <Grid.Column width={3}>
        <Segment>3</Segment>
      </Grid.Column>
      <Grid.Column width={3}></Grid.Column>
      
    </Grid>
    </>
  )
}

export default Dashboard;