import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App.js';
import combineReducers from './reducers/index.js'
import { createStore } from 'redux'

export default class TodoList extends Component {
  render() {
    let store = createStore(combineReducers, this.props)
    return (
        <Provider store={store}>
          <App />
        </Provider>
    );
  }
}
