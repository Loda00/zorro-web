export function data(state = true, action) {
  console.log('action', action)
  switch (action.type) {
    case 'SIDEBAR_SHOW_CLOSE_SUCCESS':
      return action.data;
    default:
      return state;
  }
}

export default data
