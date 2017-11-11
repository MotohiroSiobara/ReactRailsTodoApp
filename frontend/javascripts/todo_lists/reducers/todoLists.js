export default function todoLists(state = [], action) {
  switch(action.type) {
  case "CHECK":
    return [
      ...state.slice(0, action.index),
      Object.assign({}, state[action.index], {
        checked: true
      }),
      ...state.slice(action.index + 1)
    ]
  case "UNCHECK":
    return [
      ...state.slice(0, action.index),
      Object.assign({}, state[action.index], {
        checked: false
      }),
      ...state.slice(action.index + 1)
    ]
  }
  return state;
}
