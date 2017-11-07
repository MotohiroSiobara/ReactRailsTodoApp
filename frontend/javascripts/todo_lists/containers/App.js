import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { todoLists } = this.props
    return (
        <div>
          <h1>TODOアプリ</h1>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {state};
}

export default connect(mapStateToProps)(App);
