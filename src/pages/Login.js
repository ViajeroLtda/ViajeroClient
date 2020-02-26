import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Context from '../context';
import { GraphQLClient } from 'graphql-request';
import GoogleLogin from 'react-google-login';
import { BASE_URL } from '../client';
import { ME_QUERY } from '../graphql/queries';

const Login = () => {
  const { dispatch, state } = useContext(Context)
  const onSuccess = async googleUser => {
    try {
      const tokenId  = googleUser.getAuthResponse().id_token;
      const client = new GraphQLClient(BASE_URL, {
        headers: { authorization: tokenId }
      })
      const { me } = await client.request(ME_QUERY);
      dispatch({ type: 'LOGIN_USER', payload: me })
      dispatch({ type: "IS_LOGGED_IN", payload: googleUser.isSignedIn() })
    } catch (error) {
      onFailure();
      dispatch({ type: "IS_LOGGED_IN", payload: false })
    }
  }

  const onFailure = err => {
    console.error('error login', err);
  }

  if (state.isAuth) return <Redirect to="/" />
  
  return (
    <div>
      <GoogleLogin
        buttonText="Login with Google"
        clientId="425993808005-tq26jpnsupbrupqvtcjn8es2nl3qkc95.apps.googleusercontent.com"
        onSuccess={onSuccess}
        onFailure={onFailure}
        theme="dark"
        isSignedIn={true}
      />
    </div>
  )
}

export default Login;