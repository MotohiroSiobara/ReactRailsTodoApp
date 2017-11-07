import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { todoLists } = this.props
    let lists = []
    {
      todoLists.forEach((v, i, a) => {
        lists.push(<li>v.name</li>)
      })
    }
    return (
        <div>
        <h1>TODOアプリ</h1>
        <ul>{lists}</ul>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {state};
}

export default connect(mapStateToProps)(App);
