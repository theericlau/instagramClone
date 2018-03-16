// a reducer takes in two things:

//actions (information about what happened)
//copy of current state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log('incrementing likes for ', index);
      const { index } = action;
      return [
        ...state.slice(0, index), // before the one we are updating
        {...state[index], likes: state[index].likes + 10},
        ...state.slice(index+1),
      ]
    default:
      return state;
  }
  // console.log('im the action in post', type);
  // console.log(state, action);

}

export default posts;