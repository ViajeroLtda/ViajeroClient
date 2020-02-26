import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Context from '../context';
import GoogleLogin from 'react-google-login';
import { BASE_URL } from '../client';

const Login = () => {
  const { dispatch, state } = useContext(Context)
  const onSuccess = async googleUser => {
    try {
      console.log('try')
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