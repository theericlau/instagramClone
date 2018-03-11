// a reducer takes in two things:

//actions (information about what happened)
//copy of current state

function posts(state = [], action) {
  const { type } = action;
  // console.log('im the action in post', type);
  // console.log(state, action);
  return state;
}

export default posts;