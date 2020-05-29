import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react';
import GoogleLogin from 'react-google-login';
import { GraphQLClient } from 'graphql-request';
import { BASE_URL } from '../client';
import Context from '../context';
import { ME_QUERY } from '../graphql/queries';

const Login = () => {
  const { dispatch, state: { isAuth } } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const onSuccess = async googleUser => {
    setLoading(true);
    try {
      const tokenId = googleUser.getAuthResponse().id_token;
      const client = new GraphQLClient(BASE_URL, {
        headers: { authorization: tokenId }
      })
      const { me } = await client.request(ME_QUERY);
      dispatch({ type: "LOGIN_USER", payload: me });
      dispatch({ type: "IS_LOGGED_IN", payload: googleUser.isSignedIn() })
    } catch (err) {
      console.log({ err });
      dispatch({ type: "IS_LOGGED_IN", payload: false });
    } finally {
      setLoading(false);
    }
  }
  if(isAuth) return <Redirect to="/" />;
  return (
    <>
      <Grid centered>
        <Grid.Column width={10}>
          <Segment>
          <GoogleLogin
            buttonText={!loading ? "Login with Google" : 'Loading...'}
            disabled={loading}
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