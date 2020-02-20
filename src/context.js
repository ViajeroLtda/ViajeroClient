import { createContext } from 'react';

const Context = createContext({
  isAuth: true, // not building login for now
})

export default Context;