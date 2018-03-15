// function comments(state = [], action) {
//   switch (action.type) {
//     case 'ADD_COMMENT':
//     console.log('add comment',state , action);
//     let post = {
//       text: action.comment,
//       user: action.author
//     }
//     return [...state,
//     state[action.postId].push(post)
//     ]
//   default:
//    return state;
//   }
// }
function comments(state=[], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComment(state[action.postId], action)
    }
  }
  return state;
}



function postComment(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      console.log('removing');
      return state
    default:
      return state;
  }
  return state;
}

export default comments;