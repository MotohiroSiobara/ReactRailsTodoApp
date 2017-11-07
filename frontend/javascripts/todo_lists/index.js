import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App.js';
import todoLists from './reducers/todoLists.js'
import { createStore } from 'redux'

let store = createStore(todoLists)

export default class TodoList extends Component {
  render() {
    return (
        <Provider store={store}>
          <App />
        </Provider>
    );
  }
}
