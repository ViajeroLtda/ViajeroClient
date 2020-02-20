import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import SideBar from '../components/Sidebar';
const items = [
  {
    icon: 'abc',
    title: 'def'
  },
  {
    icon: 'abc',
    title: 'def'
  }
]
const Dashboard = () => {
  return (
    <Grid columns='equal'>
      <Grid.Column>
        <SideBar items={items} />
      </Grid.Column>
      <Grid.Column width={8}>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>3</Segment>
      </Grid.Column>
    </Grid>
  )
}

export default Dashboard;