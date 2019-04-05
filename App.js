import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';

import Main from './components/Main';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
)

export default App;
