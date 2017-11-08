import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
        <div>
        {this.listCreator()}
        </div>
    );
  }
  listCreator() {
    let lists = []
    {
      this.props.todoLists.forEach((v, i, a) => {
        lists.push(
            <input type='checkbox' value={v['title']} id={v['title']} />
        )
        lists.push(
            <label htmlFor={v['title']}>{v['title']}</label>
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

 export default connect(mapStateToProps)(App)}>{v['title']}</label>
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
