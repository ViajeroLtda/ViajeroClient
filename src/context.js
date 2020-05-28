import { createContext } from 'react';

const Context = createContext({
  isAuth: false, // not building login for now
  idToken: 'idToken', // changing this value when login is ready
  currentUser: null,
})

export default Context;