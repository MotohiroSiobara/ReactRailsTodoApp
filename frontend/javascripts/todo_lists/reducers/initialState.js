export default function initialState() {
  fetch('/todo_lists/state.json', {
      method: 'get'
  }).then(function(response) {
    console.log(response)
      return response
  }).catch(function(err) {
  });
}
