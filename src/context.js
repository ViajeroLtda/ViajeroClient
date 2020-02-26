import { createContext } from 'react';

const Context = createContext({
  isAuth: true, // not building login for now
  idToken: 'idToken' // changing this value when login is ready
})

export default Context;