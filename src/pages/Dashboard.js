import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import SideBar from '../components/Sidebar';
import Like from '../components/Like';
const items = [
  {
    icon: 'newspaper outline',
    anchor: 'Feed'
  },
  {
    icon: 'comment alternate outline',
    anchor: 'Messages'
  },
  {
    icon: 'user outline',
    anchor: 'Friends',

  },
  {
    icon: 'compass outline',
    anchor: 'Community',
  },
  {
    icon: 'calendar alternate outline',
    anchor: 'My planned trips',
  },
]
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
      <Grid.Column width={1} style={{ paddingBottom: 0 }}>
        {/* <SideBar items={items} /> */}
      </Grid.Column>
      <Grid.Column width={12}>
        <Segment><Like likesNumber="50" /></Segment>
      </Grid.Column>
      <Grid.Column width={3}>
        <Segment>3</Segment>
      </Grid.Column>
    </Grid>
    </>
  )
}

export default Dashboard;