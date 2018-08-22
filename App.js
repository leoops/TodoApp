import React from 'react';
import TodoView from './src/views/Todo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './src/store/reducers';

import devToolsEnhancer from 'remote-redux-devtools';
const store = createStore(rootReducer, devToolsEnhancer());

const App = () => (
    <Provider store={ store } >
        <TodoView/>     
    </Provider>
)
export default App;