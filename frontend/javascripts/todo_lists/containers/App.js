import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'


class App extends Component {
  render() {
    return (
        <div>
        <form>
          <ul>
            {this.listCreator()}
          </ul>
        </form>
        </div>
    );
  }
  listCreator() {
    let lists = []
    {
      this.props.todoLists.forEach((v, i, a) => {
        let idName = `todo_input_${i}`
        lists.push(
            <li key={i}>
            <input key={i} type='checkbox' value={v['title']} id={idName} onChange={() => this.props.dispatch(actions.changeChecked(i, v['checked']))} />
            <label key={i + 1} htmlFor={idName} onChange={() => console.log("aaa")}>{v['title']}</label>
            </li>
        )
      })
    }
    return lists
  }
}

const mapStateToProps = (state) => {
  return {
    todoLists: state.todoLists
  }
}

export default connect(mapStateToProps)(App);
