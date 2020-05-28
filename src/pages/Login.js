import React, { useContext } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import GoogleLogin from 'react-google-login';
import { GraphQLClient } from 'graphql-request';
import { BASE_URL } from '../client';
import Context from '../context';
import { ME_QUERY } from '../graphql/queries';

const Login = () => {
  const { dispatch } = useContext(Context);
  const onSuccess = async googleUser => {
    try {
      const tokenId = googleUser.getAuthResponse().id_token;
      const client = new GraphQLClient(BASE_URL, {
        headers: { authorization: tokenId }
      })
      console.log('await');
      const { me } = await client.request(ME_QUERY);
      console.log({ me });
      dispatch({ type: "LOGIN_USER", payload: me });
      dispatch({ type: "IS_LOGGED_IN", payload: googleUser.isSignedIn() })
    } catch (err) {
      console.log({ err });
      dispatch({ type: "IS_LOGGED_IN", payload: false });
    }
  }
  return (
    <>
      <Grid centered>
        <Grid.Column width={10}>
          <Segment>
          <GoogleLogin
            buttonText="Login with Google"
            clientId="425993808005-tq26jpnsupbrupqvtcjn8es2nl3qkc95.apps.googleusercontent.com"
            onSuccess={onSuccess}
            onFailure={() => console.log('failure')}
            theme="dark"
            isSignedIn={true}
          />
          </Segment>
        </Grid.Column>    
      </Grid>
    </>
  )
}

export default Login;