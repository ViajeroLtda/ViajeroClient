import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Context from '../context';

const Login = () => {
  const { state } = useContext(Context);
  if (state.isAuth) return <Redirect to="/" />
  return (
    <div>
      Login
    </div>
  )
}

export default Login;