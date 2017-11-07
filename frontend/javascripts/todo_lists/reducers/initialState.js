export default function initialState() {
  fetch('/todo_lists/state', {
      method: 'get'
  }).then(function(response) {
    console.log(response)
    return response["todoLists"]
  }).catch(function(err) {
    return []
  });
}
