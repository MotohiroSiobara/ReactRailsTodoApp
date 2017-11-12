import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App.js';
import rootReducer from './reducers/index.js'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

const loggerMiddleware = createLogger()

export default class TodoList extends Component {
  render() {
    return (
        <Provider store={this.returnStore()}>
          <App />
        </Provider>
    );
  }
  returnStore() {
    return(
      createStore(
        rootReducer,
        this.props,
        applyMiddleware(
          thunkMiddleware,
          loggerMiddleware
        )
      )
    )
  }
}
