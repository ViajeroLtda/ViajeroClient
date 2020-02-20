import React, { useContext, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Context from './context';
import reducer from './reducer';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProtectedRoute from './ProtectedRoute';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';
import * as serviceWorker from './serviceWorker';

// const wsLink = new WebSocketLink({
//   uri: 'wait back-end prod url',
//   options: {
//     reconnect: true,
//   }
// })

const client = new ApolloClient({
  // link: wsLink,
  link: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});

const Root = () => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Router>
      {/* <ApolloProvider client={client}> */}
      <ApolloProvider client={client}>
        <Context.Provider value={{ state, dispatch }}>
          <Switch>
            <ProtectedRoute path="/" exact component={Dashboard} />
            <Route path="/login" component={Login} />
          </Switch>
        </Context.Provider>
      </ApolloProvider>
    </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();