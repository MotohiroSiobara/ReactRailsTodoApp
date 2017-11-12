export const changeChecked = (index, checked) => {
  if(checked) {
    return {
      type: "UNCHECK",
      index: index
    }
  }
  return {
    type: "CHECK",
    index: index
  }
}

export const addList = (title) => {
  return {
    type: "ADDLIST",
    title
  }
}

export const ajaxSubmit = (todoLists) => (dispatch, state) => {
  $.ajax({
    url: '/todo_lists',
    type: 'post',
    contentType: 'application/json',
    data: JSON.stringify({
      todo_lists: todoLists
    })
  }).done(json => {
  })
}
