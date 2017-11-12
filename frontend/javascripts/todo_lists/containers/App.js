import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import AddListForm from '../components/AddListForm';

class App extends Component {
  render() {
    const { todoLists, dispatch } = this.props
    return (
        <div>
          <ul>
            {this.listCreator()}
          </ul>
        <AddListForm
          addList={(text) => dispatch(actions.addList(text))}
        />
        <div>
        <button onClick={() => dispatch(actions.ajaxSubmit(todoLists))}>保存</button>
        </div>
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
            <input key={i} type='checkbox' value={v['title']} id={idName} onChange={() => this.checkAction(i, v['checked'])} checked={this.checkFlg(v['checked'])} />
            <label key={i + 1} htmlFor={idName} onChange={() => console.log("aaa")} onChange={() => this.checkAction(i, v['checked'])}>
              {v['title']}
            </label>
            </li>
        )
      })
    }
    return lists
  }
  checkAction(index, checked) {
    this.props.dispatch(actions.changeChecked(index, checked))
  }
  checkFlg(checked) {
    if(checked) {
      return 'checked'
    }
    return ''
  }
}

App.propTypes = {
  todoLists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.integer,
    title: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired
  }))
}

const mapStateToProps = (state) => {
  return {
    todoLists: state.todoLists
  }
}

export default connect(mapStateToProps)(App);
