import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import SideBar from '../components/Sidebar';
const items = [
  {
    icon: 'newspaper outline',
    anchor: 'News'
  },
  {
    icon: null,
    anchor: 'Messages'
  }
]
const Dashboard = () => {
  return (
    <Grid>
      <Grid.Column width={3}>
        <SideBar items={items} />
      </Grid.Column>
      <Grid.Column width={10}>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column width={3}>
        <Segment>3</Segment>
      </Grid.Column>
    </Grid>
  )
}

export default Dashboard;